import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const CustomerStories = () => {
    const [customerStories, setCustomerStories] = useState([]);

    useEffect(() => {
        fetch('https://y-pi-jade.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setCustomerStories(data))
    }, [])
    return (
        <div>
            <section>
                <SectionTitle
                    heading={"Customer stories"}>
                </SectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        customerStories.map(customerStorie => <div key={customerStorie._id} className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-44 rounded-xl bg-clip-border justify-center flex items-center">
                                <img
                                    src={customerStorie.image}
                                    className="rounded-full object-cover w-3/6 h-full "
                                />
                            </div>
                            <div className="py-2 px-6">

                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                    <FaQuoteLeft className="text-xs" />{customerStorie.description} <FaQuoteRight className="text-xs" />
                                </p>

                                <div className="flex items-center justify-between ">
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">

                                    </p>
                                    <p className=" block font-sans text-sm font-bold antialiased  leading-relaxed text-blue-gray-900">
                                        --- {customerStorie.name} ---
                                    </p>
                                </div>
                            </div>

                        </div>)
                    }
                </div>



               

            </section>
        </div>
    );
};

export default CustomerStories;