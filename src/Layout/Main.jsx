import { Outlet } from "react-router-dom"

import Footer from "../home/Home/Shared/Footer/Footer";
import Navbar from "../home/Home/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;