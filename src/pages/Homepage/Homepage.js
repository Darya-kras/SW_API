import axios from 'axios'
import { useState,useEffect } from "react";
import Characterlist from './../../components/Characterlist/Characterlist';
import Pagination from './../../components/Pagination/Pagination';



const Homepage = () => {
    const [data, setData] = useState({ results: [] });
    const [loading, setLoading] = useState(false);
    const [CurrentPage, setCurrentPage] = useState(1)
    const [HPage] = useState(10)
    useEffect(() => {
      const getHeroes = async () => {
          setLoading(true);
          try {
              const res = await axios.get(`https://www.swapi.tech/api/people?page=${CurrentPage}&limit=10`);
              setData(res.data);
              setLoading(false);
          } catch (error) {
              console.error('Error fetching data:', error);
              setLoading(false);
          }
      };
      getHeroes();
  }, [CurrentPage]);

//  const lastCharIndex = CurrentPage * HPage
//  const firstCharIndex = lastCharIndex - HPage
//  const currentList = data.slice(firstCharIndex,lastCharIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

   
    return ( 
        <div className='container'>
          <Pagination HPage={HPage} totalPages={data.total_pages} paginate={paginate}/>
          <h1 className='textCard'>Characters:</h1>
          <Characterlist characters={data.results} loading={loading}/>
  
        </div>
     );
}
 
export default Homepage;