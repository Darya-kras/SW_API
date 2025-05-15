import axios from 'axios';
import { useState, useEffect } from "react";
import "./style.css";
import BtnLike from './BtnLike/BtnLike';
import GetPlanet from './Planet/GetPlanet';

const CharacterCard = ({ UID }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getHeroes = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://www.swapi.tech/api/people/${UID}`);
                setData(res.data); 
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        getHeroes();
    }, [UID]);

    if (loading) {
        return <>Ожидание...</>;
    }

    if (!data || !data.result || !data.result.properties) { 
        return <>Нет данных для отображения</>;
    }


    const {  name, birth_year, eye_color, skin_color, hair_color, gender, homeworld, mass, height} = data.result.properties

    return ( 
        <div className="HeroCard">
            <h3>Card: {UID} Name: {name}</h3> 
            <div className='body'>

            
            <img 
                className="Photo"
                src={`/people/${UID}.jpg`}
                alt="Персонаж"
            />

            <div className="aboutChar">
                
                <div className='origin'> ORIGIN
                    <p>Birth year:</p>
                    {birth_year}
                    <p>Homeworld: </p>
                    <GetPlanet planet={homeworld}/>
                </div>
                
                <div className='appearance'> APPEARANCE
                <p>Gender: {gender}</p>
                <p>Height: {height} cm</p>
                <p>Mass: {mass} kg</p>
                <p>Eye color: {eye_color}</p>
                <p>Skin color: {skin_color}</p>
                <p>Hair color: {hair_color}</p>
                </div>
            </div>
            </div>
            <BtnLike  id={UID}/>
        </div>
     );
}

export default CharacterCard;