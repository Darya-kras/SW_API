import axios from 'axios';
import { useState, useEffect } from "react";
import "./style.css";

const CharacterCard = ({ UID }) => {
    const [data, setData] = useState(null); // Инициализируем как null
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getHeroes = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://www.swapi.tech/api/people/${UID}`);
                setData(res.data); // Устанавливаем весь ответ
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

    if (!data || !data.result || !data.result.properties) { // Проверяем наличие данных
        return <>Нет данных для отображения</>;
    }

    return ( 
        <div className="HeroCard">
            <h3>Card: {UID} Name: {data.result.properties.name}</h3> 
            <div className="aboutChar">
                <div className='origin'> Origin
                    <p>Birth year: {data.result.properties.birth_year}</p>
                    <p>Homeworld: ---</p>
                </div>
                
                <div className='appearance'> Appearance
                <p>Gender: {data.result.properties.gender}</p>
                <p>Height & mass: {data.result.properties.height}, {data.result.properties.mass}</p>
                <p>Eye color: {data.result.properties.eye_color}</p>
                <p>Skin & hair color: {data.result.properties.skin_color}, {data.result.properties.hair_color}</p>
                </div>
            </div>
        </div>
     );
}

export default CharacterCard;