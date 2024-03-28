import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className=" mx-auto lg:flex justify-center items-center h-screen">
            <div>
            <h1 className=" text-7xl font-medium text-center ">Error 404</h1>
            <p className="mt-5 text-3xl text-center">Sorry, We Misplaced That Page</p>
            <br />
            <p className=" lg:w-[800px] text-center">Our digital librarian seems to have misplaced the page you requested. Stay with us, <br /> and  we'll help you rediscover it.</p>
            <div className=" text-center flex justify-center py-8">
            <Link>
            <Button color="white">Home</Button></Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;