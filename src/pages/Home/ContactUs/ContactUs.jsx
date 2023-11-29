import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ContactUs = () => {
    return (
        <div className="pt-24">
            <SectionTitle heading={"Contact us"}></SectionTitle>
            <div className="flex
             justify-center items-center">
                <h2 className="text-2xl ">We’re available 24 hours a day, 7 days a week to help you by phone or email.</h2>
            </div>
            <div className="grid justify-center items-center ">
                <div className="bg-red-200 grid justify-center items-center w-3/5 mx-auto rounded-lg p-4 m-4">
                    <h2 className="text-center">FIND A LOCAL EXPERT</h2>
                    <p className="text-center"> Do you have questions about your destination or possible tour itineraries? The guides on ToursByLocals are local experts and you can contact them directly. Enter your destination</p>

                    <div className="join pt-4 flex justify-center items-center">
                        <input className="input input-bordered join-item text-center" placeholder="Type city, country or tour ..." />
                        <button className="btn join-item rounded-r-full">Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;