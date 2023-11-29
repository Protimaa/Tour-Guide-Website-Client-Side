
import { Helmet } from 'react-helmet-async';
import Banner from "../Banner/Banner";
import CustomerStories from "../CustomerStories/CustomerStories";
import Featured from "../Featured/Featured";
import PopularPlace from "../PopularPlace/PopularPlace";
import TourPlace from "../TourPlace/TourPlace";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DP Tourist Guide | Home</title>
            </Helmet>
            
          

            <Banner></Banner>
            <TourPlace></TourPlace>
            <PopularPlace></PopularPlace>

            
            <Featured></Featured>
            <CustomerStories></CustomerStories>
        </div>
    );
};

export default Home;