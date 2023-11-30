import { Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./Component/SideBar/SideBar";
import PostsContainer from "./PostsContainer/PostsContainer";
import HomeViewModel from "./HomeViewModel";
import UserContext from "./UserContext/UserContext";

const Home = () => {
    const {
        data
    } = HomeViewModel(useLocation());
    return (
        <UserContext data={data}>
            <div className="homepage_wrapper">
                <SideBar isOpen={true} />
                <Routes>
                    <Route path="/" Component={PostsContainer} />
                </Routes>
            </div>
        </UserContext>
    );
}

export default Home;