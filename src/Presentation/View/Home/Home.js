import { Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./Component/SideBar/SideBar";
import PostsContainer from "./PostsContainer/PostsContainer";
import HomeViewModel from "./HomeViewModel";
import UserContext from "./UserContext/UserContext";

const Home = () => {
    const {
        data,
        loadPosts,
        setPostsLoader
    } = HomeViewModel(useLocation());
    return (
        <UserContext data={data}>
            <div className="homepage_wrapper">
                <SideBar isOpen={true} loadPosts={loadPosts}/>
                <Routes>
                    <Route path="/" element={<PostsContainer setPostsLoader={setPostsLoader} />}/>
                </Routes>
            </div>
        </UserContext>
    );
}

export default Home;