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
    // const offered = place.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>DP Tourist Guide | Services</title>
            </Helmet>
            <Cover img={menuImg} title="All Services"></Cover>
            
            

            {/* offeres category  */}
            <SectionTitle heading={"Today's Offer"}></SectionTitle>
            <div className="relative flex w-6/12 mx-auto flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
            <div className="relative grid justify-center items-center mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-60 rounded-xl bg-clip-border">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvIwXw2wFNU5k43BfuRtgr4h7io3IF5WRGrhpNnx9OTQAqozwy_yuC3mEkWkqzxB4BiE&usqp=CAU"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Dhaka
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        $70
                    </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Dhaka, city and capital of Bangladesh. It is located just north of the Buriganga River, a channel of the Dhaleswari River, in the south-central part of the country. Dhaka is Bangladesh’s most populous city and is one of the largest metropolises in South Asia. Pop. (2001) city, 5,333,571; metro. area, 9,672,763; (2011) city, 7,033,075; metro. area, 14,543,124.
                </p>
            </div>
            
        </div>

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