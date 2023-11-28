import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import TouristPlace from "../../Shared/TouristPlace/TouristPlace";



const ServicesCategory = ({ items, title, img }) => {


    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                {
                    items.map(item => <TouristPlace key={item._id} item={item}></TouristPlace>)
                }
            </div>

            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Booked Now</button>
            </Link>

        </div>
    );
};

export default ServicesCategory;