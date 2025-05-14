import "./style.css"

import axios from 'axios';
import { useState, useEffect } from "react";
import CharacterCard from './../../components/Characterlist/CharacterCard/CharacterCard';
import Pagination from "./../../components/Pagination/Pagination";
import { useSearch } from './../../components/SearchBar/SearchContext'; 

const FavoritesPage = () => {
    const [ setCurrentPage] = useState(1)
    const [HPage] = useState(10)
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const { searchQuery } = useSearch();

    useEffect(() => {
        const fetchFavorites = async () => {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const characterDataPromises = favorites.map(async (UID) => {
                try {
                    const res = await axios.get(`https://www.swapi.tech/api/people/${UID}`);
                    return res.data.result; 
                    
                } catch (error) {
                    console.error('Error fetching favorite character:', error);
                    return null; 
                }
            });

            const charactersData = await Promise.all(characterDataPromises);
            setFavoriteCharacters(charactersData.filter(character => character !== null)); 
            
            setLoading(false);
        };

        fetchFavorites();
    }, []);

    

    if (loading) {
        return <>Загрузка избранных персонажей...</>;
    }

    if (favoriteCharacters.length === 0) {
        return <>Нет избранных персонажей.</>;
    }

    const paginate = pageNumber => setCurrentPage(pageNumber)


    const filteredCharacters = favoriteCharacters.filter(character => {
    if (character.properties && character.properties.name) {
     return character.properties.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
     return false;
    });
    return (
    <div className='container'>
        <Pagination HPage={HPage} totalPages={0} paginate={paginate}/>
        <h1>Favorite:</h1>
    <ul className='Listgroup'>
        {searchQuery && searchQuery.trim() !== '' ? (
        filteredCharacters.length > 0 ? (
            filteredCharacters.map(character => (
                <li key={character.uid} className="list-group-item">
                    <CharacterCard UID={character.uid} />
                </li>
            ))
         ) : (
          <p>Нет совпадений</p>
        )
        ) : (
        favoriteCharacters.map(character => (
          <li key={character.uid} className="list-group-item">
            <CharacterCard UID={character.uid} />
          </li>
        ))
        )}
    </ul>
    </div>
);
}

export default FavoritesPage;