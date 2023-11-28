import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import useService from "../../hooks/useService";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServicesCategory from "./ServicesCategory/ServicesCategory";
import menuImg from '../../assets/ServiceCategory/category.jpg'
import adventureImg from '../../assets/ServiceCategory/category.jpg'


const Services = () => {
    const [place] = useService();
    const adventure = place.filter(item => item.category === 'adventure');
    const relaxation = place.filter(item => item.category === 'relaxation');
    const nature = place.filter(item => item.category === 'nature');
    const historical = place.filter(item => item.category === 'historical');
    const offered = place.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>DP Tourist Guide | Services</title>
            </Helmet>
            <Cover img={menuImg} title="All Services"></Cover>
            
            

            {/* offeres category  */}
            <SectionTitle heading={"Today's Offer"}></SectionTitle>
            <ServicesCategory items={offered}  ></ServicesCategory>

            {/* adventure category  */}
            
            <ServicesCategory items={adventure} title='adventure' img ={adventureImg}></ServicesCategory>

            {/* relaxation category  */}
            
            <ServicesCategory items={relaxation} title='relaxation' img ={adventureImg}></ServicesCategory>

            {/* nature Category  */}
            
            <ServicesCategory items={nature}  title='nature' img ={adventureImg}></ServicesCategory>

            {/* historical Category  */}
            
            <ServicesCategory items={historical}  title='historical' img ={adventureImg}></ServicesCategory>

            

            
           
        </div>
    );
};

export default Services;