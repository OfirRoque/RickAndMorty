import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";

export default function Nav(props){
    const { onSearch } = props;
    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <Link to="/about"><button>About</button></Link>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/favorites"><button>Favorites</button></Link>
        </div>
    )
}