import Cover from "../../Shared/Cover/Cover";
import TouristPlace from "../../Shared/TouristPlace/TouristPlace";



const ServicesCategory = ({items, title, img}) => {
    
    
    return (
        <div className="pt-8">
            { title && <Cover img={img} title={title}></Cover> }

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                {
                    items.map(item => <TouristPlace key={item._id} item={item}></TouristPlace>)
                }
            </div>
        </div>
    );
};

export default ServicesCategory;