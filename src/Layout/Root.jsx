
import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../Pages/Shared/NavigationBar/NavigationBar";


const Root = () => {
    return (
        <div>
           <NavbarWithMegaMenu></NavbarWithMegaMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;