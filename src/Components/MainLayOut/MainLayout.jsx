import { Outlet } from "react-router-dom";
import Navbar from "../NAvbar/Navbar";
import Modal from "../Modal/Modal";

const MainLayout = () => {
    return (
        <div className="container mx-auto  ">
            <Navbar></Navbar>
            <Modal></Modal>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;