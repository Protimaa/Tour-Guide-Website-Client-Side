import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useBook from "../../hooks/useBook";
import useAuth from "../../hooks/useAuth";




const ServiceCard = ({ item }) => {
    const { name, image, price, description, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useBook();

    const handleAddToBooked = () => {
        if(user && user.email){
            // console.log(user.email)
            const bookItem = {
                serviceId: _id,
                email: user.email,
                name,
                image,
                price  
            }
            axiosSecure.post('/booked', bookItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    refetch();
                }

            
            })
             
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
              });
        }
    }

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute rounded-lg right-0 bg-slate-900 text-white mr-4 mt-4 px-4">{price} TK.</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions ">
                    <button
                        onClick={handleAddToBooked} className=" btn btn-outline bg-slate-100 border-0 border-b-4
                     mt-4 border-orange-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;