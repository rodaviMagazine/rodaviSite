import { useState } from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { contentData } from "../Content/ContentData/contentData";
import MagazineContentHolder from "./MagazineContentHolder";

const MagazineContent = () => {
    const revista = useSelector(({reducer}) => reducer.revista);
    const [page, setPage] = useState(0);

   const pages = [...Array(contentData.revistas[revista].pages.length).keys()];

    return (
        <MagazineContentHolder>
            <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/img/${revista}/${contentData.revistas[revista].pages[page]}`} alt={revista}/>
                {page !== 0 && 
                    <Button className="image-container__left-button" onClick={ () => setPage(page === 0 ? contentData.revistas[revista].pages.length - 1 : page - 1) }>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                }
                {page !== (pages.length - 1) && 
                    <Button className="image-container__right-button" onClick={ () => setPage(page === contentData.revistas[revista].pages.length - 1 ? 0 : page + 1) }>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                }
            </div>
            <div className="buttons-container">
                <Slider
                    value={page}
                    min={0}
                    step={1}
                    max={pages.length - 1}
                    onChange={(e, newValue) => setPage(newValue)}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                />
            </div>
        </MagazineContentHolder>
    )
}

export default MagazineContent;