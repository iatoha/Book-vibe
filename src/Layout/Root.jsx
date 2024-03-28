import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../Pages/Shahed/NavigationBar/NavigationBar";

const Root = () => {
    return (
        <div>
            <NavbarWithMegaMenu></NavbarWithMegaMenu>
            <Outlet></Outlet>
            <br />
        </div>
    );
};

export default Root;