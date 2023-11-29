import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Community = () => {
    const [customerStories, setCustomerStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setCustomerStories(data))
    }, [])

    return (
        <div className="py-28 grid gap-4 grid-cols-1 md:grid-cols-3">
            {
                customerStories.map(customerStorie =><div key={customerStorie._id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                    <img src={customerStorie.image} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                       {customerStorie.name}
                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        CEO / Co-Founder
                    </p>
                </div>
                <div className="flex justify-center p-6 pt-2 gap-7">
                    <a href="#facebook"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                        <FaTwitter className="text-red-300"></FaTwitter>
                    </a>
                    <a href="#twitter"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                        <FaFacebook className=" text-blue-700"></FaFacebook>
                    </a>
                    <a href="#instagram"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
                            <FaInstagram className="text-orange-400"></FaInstagram>
                    </a>
                </div>
            </div> )
            }
            

            
        </div>
    );
};

export default Community;