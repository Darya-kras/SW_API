import React from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import "./style.css";

const Characterlist = ({ characters, loading} ) => {

    if(loading) {
        return <h2>Loading...</h2>
    }
//<CharacterCard UID={character.uid} />
    return (

    <ul className='Listgroup'>
        {
            characters.map((character, i) => (
                <li className="list-group-item" key={i}>
                   <CharacterCard UID={character.uid} />
                </li>
            ))
        }
    </ul>

    );
    
}
 
export default Characterlist;
