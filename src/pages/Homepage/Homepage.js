import axios from 'axios'
import { useState,useEffect } from "react";
import Characterlist from './../../components/Characterlist/Characterlist';
import Pagination from './../../components/Pagination/Pagination';
import { useSearch } from './../../components/SearchBar/SearchContext'; 


const Homepage = () => {
    const [data, setData] = useState({ results: [] });
    const [loading, setLoading] = useState(false);
    const [CurrentPage, setCurrentPage] = useState(1)
    const [HPage] = useState(10)
    const { searchQuery } = useSearch();
    
    const [characters, setCharacters] = useState([]);
    

    useEffect(() => {

        const getHeroes = async () => {
            setLoading(true);
            try {
                let url = `https://www.swapi.tech/api/people?page=${CurrentPage}&limit=10`;
                if (searchQuery && searchQuery.trim() !== '') {
                    url += `&name=${encodeURIComponent(searchQuery.trim())}`;
                }
                const res = await axios.get(url);
                setData(res.data);
                setCharacters(res.data.results);
                console.log(res.data.results)
                if (searchQuery && searchQuery.trim() !== '') {
                    setCharacters(res.data.result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        getHeroes();
    }, [CurrentPage, searchQuery]);


    const paginate = pageNumber => setCurrentPage(pageNumber)
   
    return ( 
        <div className='container'>
          <Pagination HPage={HPage} totalPages={data.total_pages} paginate={paginate}/>
          <h1 className='textCard'>ALL Characters:</h1>
          <Characterlist characters={characters} loading={loading}/>
  
        </div>
     );
}
 
export default Homepage;