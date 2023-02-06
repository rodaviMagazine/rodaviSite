import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { keys, toArray } from "lodash";

import GridHolder from "./GridHolder";
import { setRevista } from "../../Redux/reducer"

const Grid = ({ data }) => {
    const searchMatches = useSelector(({reducer}) => reducer.searchMatches);
    const dispatch = useDispatch();

    const handleMagazine = (portada) => {
        dispatch(setRevista(portada));
    }

    const gridElement = (portada, index) => {
        return (
            <Link key={index} to="/magazine" onClick={() => handleMagazine(portada)} className="link">
                <img src={`${process.env.PUBLIC_URL}/img/${portada}/${data['portadas'][portada]}`} alt={portada}/>
            </Link>
        );
    };

    const renderPortada = () => {
        if(searchMatches) {
            const foundRevista = toArray(data.revistas).find(revista => revista.name.toUpperCase().includes(searchMatches.toUpperCase()));
            if(foundRevista) {
                return gridElement(foundRevista?.id, 0);
            }
        }
        return keys(data['portadas']).map((portada, index) => gridElement(portada, index))
    }

    return (
        <GridHolder gridState={(searchMatches || keys(data['portadas']).length <= 1) ? 1 : 2}>
            {renderPortada()}
        </GridHolder>
    );
}

export default Grid;