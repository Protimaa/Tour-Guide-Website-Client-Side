import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center text-red-700 text-7xl font-extrabold gap-10 ">
            
           <div className="5">
            <img className="rounded-lg" src="https://media.istockphoto.com/id/1467134281/photo/top-view-of-coffee-as-number-0-number-404-as-error-of-non-existent-website.webp?b=1&s=170667a&w=0&k=20&c=liMrAm1WsXwf5YXal7DZr1wQguAgf5SWffbXNDWn_0A=" alt="czc" />
           </div>
           <div>
            <Link><button className="btn btn-success">Back Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;