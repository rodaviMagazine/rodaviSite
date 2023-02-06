import {contentData} from "./ContentData/contentData";

import Grid from "../Grid/Grid";
import ContentHolder from "./ContentHolder";

const Content = () => {
    return (
        <ContentHolder>
            <Grid data={ contentData }/>
        </ContentHolder>
    );
}

export default Content;