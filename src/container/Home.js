import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const Home = () => {
    return (
        <>
            <Navigation/>
            <div>
                <Content/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;