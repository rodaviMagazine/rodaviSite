import { useSelector } from "react-redux";

import { contentData } from "../components/Content/ContentData/contentData";
import Footer from "../components/Footer/Footer";
import MagazineContent from "../components/Magazine/MagazineContent";
import Navigation from "../components/Navigation/Navigation";

const Magazine = () => {
    const revista = useSelector(({reducer}) => reducer.revista);
    const some = [];

    for (let index = 0; index < 135; index++) {
        some.push(`limon${index}.jpg`);
    }
    console.log(some) 

    return (
        <>
            <Navigation data={contentData.Titulos[revista]}/>
            <MagazineContent/>
            <Footer/>
        </>
    )
}

export default Magazine;