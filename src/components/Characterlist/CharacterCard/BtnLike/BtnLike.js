import "./style.css";

import { useLocalStorage } from "./../../../../utils/useLocalStorage";

const BtnLike = ({ id }) => {
    const [like, setlike] = useLocalStorage(`like-${id}`, '🤍');

    const toggleLike = () => {
        setlike((currentValue) => {
            const newValue = currentValue === '🤍' ? '💛' : '🤍';
            updateFavorites(id, newValue);
            return newValue;
        });
    };
    const updateFavorites = (id, newValue) => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (newValue === '💛') {
            if (!favorites.includes(id)) {
                favorites.push(id);
            }
        } else {
            favorites = favorites.filter(favId => favId !== id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <button className="BtnLike" onClick={toggleLike}>
            {like}
        </button>
    );
};

export default BtnLike;