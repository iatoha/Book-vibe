import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../Pages/Shahed/NavigationBar/NavigationBar";
import { FooterWithSitemap } from "../Pages/Shahed/Footer/Footer";

const Root = () => {
    return (
        <div>
            <NavbarWithMegaMenu></NavbarWithMegaMenu>
            <Outlet></Outlet>
            <br />
            <FooterWithSitemap></FooterWithSitemap>
        </div>
    );
};

export default Root;