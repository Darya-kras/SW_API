import "./style.css";

import SearchBar from "./../SearchBar/SearchBar";

const Header = () => {
    const activelink = 'nav-list__link nav-list__link--active';
    const normallink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                
                <div className="nav-row">

                    <strong>STAR WARS CHARACTERS</strong> 
                    <SearchBar />
                    
                    
                    <ul className="nav-list">

                        <li className="nav-list__item">
                         MAIN 
                        </li>

                        <li className="nav-list__item">
                         FAVORITE
                        </li>
                        
                                           
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;