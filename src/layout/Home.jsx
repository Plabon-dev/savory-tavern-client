import Banner from "../components/Banner";
import Features from "../components/Features";
import PageTitle from "../components/PageTitle";
import Testimonial from "../components/Testimonial";
import TopFood from "../components/TopFood";


const Home = () => {
    return (
        <div>
            <PageTitle title='Savory Tavern | Homepage'></PageTitle>
            <Banner></Banner>
            <Features></Features>
            <TopFood></TopFood>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;