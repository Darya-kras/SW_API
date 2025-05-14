import "./style.css";

import { NavLink } from "react-router-dom";
import SearchBar from "./../SearchBar/SearchBar";


const Header = ({ searchTerm, setSearchTerm }) => {

    return (
        <nav className="nav">
            <div className="container">
                
                <div className="nav-row">

                    <strong>STAR WARS CHARACTERS</strong> 
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    

                    <ul className="nav-list">
                        <NavLink to={`/`}>
                         MAIN 
                        </NavLink>

                        <NavLink to={`/FavoritesPage`}>
                         FAVORITE
                        </NavLink>
                        
                                           
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;