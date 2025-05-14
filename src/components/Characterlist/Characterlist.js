import React from 'react';

import CharacterCard from './CharacterCard/CharacterCard';
import "./style.css";


const Characterlist = ({ characters, loading,} ) => {

    if(loading) {
        return <h2>Loading...</h2>
    }
 
    return (
        <div className='scrollblock'>
            <ul className='Listgroup'>
                {characters.map(character => (
                    
                    <li className="list-group-item" key={character.name}>
                        <CharacterCard UID={character.uid} key={character.name}/>
                    </li>
                
                ))}
            </ul>
        </div>
    );
};

export default Characterlist;