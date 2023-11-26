import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TouristPlace from "../../Shared/TouristPlace/TouristPlace";
import useService from "../../../hooks/useService";

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
            <SectionTitle heading={"Popular Place"}></SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    popular.map(item => <TouristPlace key={item._id} item={item}></TouristPlace>)
                }
            </div>
        </section>

    );
};

export default PopularPlace;