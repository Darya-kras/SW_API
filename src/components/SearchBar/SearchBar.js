import { useSearch } from './/SearchContext'; 
import { useState } from 'react';

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useSearch();
    const [inputValue, setInputValue] = useState(searchQuery || '');

    const handleSearch = () => {
        setSearchQuery(inputValue);
    };

    return (
        <div className='container'>
            <input
            type="text"
            placeholder="Поиск персонажей..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='searchBtn' onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;