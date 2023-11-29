import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle  heading={"Featured Item"}></SectionTitle>


            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60 ">
                <div>
                    <img src='https://images.unsplash.com/photo-1670930371984-d8f47ec55d87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN5bGhldCUyMGNvbG9yZnVsbHxlbnwwfHwwfHx8MA%3D%3D' alt="" />
                </div>
                <div className="md:ml-10">
                    <p>2024-12-01</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Explore the historical significance of Lalbagh Fort in Dhaka. Walk through its majestic corridors, marvel at ancient architecture, and discover the tales of bygone eras.</p>
                    {/* <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default Featured;