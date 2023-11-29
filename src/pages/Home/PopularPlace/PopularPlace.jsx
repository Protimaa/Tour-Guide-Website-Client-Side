import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TouristPlace from "../../Shared/TouristPlace/TouristPlace";
import useService from "../../../hooks/useService";
import { Link } from "react-router-dom";

const PopularPlace = () => {
    const [service] = useService();
    const popular = service.filter(item => item.category === 'popular')
    // const [place, setPlace] = useState([]);

    // useEffect(() => {
    //     fetch('touristPlaces.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setPlace(popularItems);
    //         });
    // }, [])
    return (
        <section>
            <SectionTitle heading={"Popular Services"}></SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    popular.map(item => <TouristPlace key={item._id} item={item}></TouristPlace>)
                }
            </div>
            <Link to={"services"}>
                <div className="flex justify-center items-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 ">See Our Services</button>
                </div>
            </Link>
        </section>

    );
};

export default PopularPlace;