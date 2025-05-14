import axios from 'axios';
import { useState,useEffect } from "react";

const Planet = ({planet}) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPlanets = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${planet}`);
                setData(res.data); 
                setLoading(false);
                console.log('запрос планеты')
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        getPlanets();
    }, [planet]);

    if (loading) {
        return <>Поиск..</>;
    }

    if (!data || !data.result || !data.result.properties) { 
        return <>Нет данных</>;
    }
    return ( 
        <>
        {data.result.properties.name}
        </>
     );
}
 
export default Planet;