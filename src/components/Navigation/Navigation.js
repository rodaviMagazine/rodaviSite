import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import NavigationHolder from "./NavigationHolder";
import { setSearchMatches } from "../../Redux/reducer";

const Navigation = ({data}) => {
    const searchMatches = useSelector(({reducer}) => reducer.searchMatches);
    const url = useLocation()?.pathname;
    const isMagazine = url !== '/';
    const dispatch= useDispatch();

    const handleChange = (e) => {
        dispatch(setSearchMatches(e.target.value));
    }

    const renderElement = () => {
        return (
            <>
                { isMagazine ?
                    <div className='magazine-container'>
                        <h1>{data}</h1>
                        <Link to="/" className='link'>
                            <FontAwesomeIcon icon={ faHandPointLeft } /> Regresar a inicio
                        </Link>
                    </div>
                :
                    <>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                        <TextField
                            id="standard-basic"
                            variant="standard" 
                            placeholder='Buscar Revista...' 
                            value={searchMatches}
                            onChange={handleChange}
                        />
                    </>
                }
                
            </>
        )
    }

    return (
        <NavigationHolder>
            { renderElement() }
        </NavigationHolder>
    )
}

export default Navigation;