import { useRef } from "react";

const HomeViewModel = (location) => {
    const data = { username: location.state.username };
    const loadPosts = useRef(null);
    function setPostsLoader(loader) {
        loadPosts.current = loader;
    }

    return {
        data,
        loadPosts,
        setPostsLoader
    }
};

export default HomeViewModel;