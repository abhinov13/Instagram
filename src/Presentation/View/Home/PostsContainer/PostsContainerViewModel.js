import { useState, useEffect } from "react";
import GetPosts from "../../../../Domain/UseCase/Post/GetPosts";

const PostContainerViewModel = ({setPostsLoader}) => {
    const [posts, setPosts] = useState([]);

    const loadPosts = () => {
        GetPosts()
            .execute()
            .then(({ data }) => {
                console.log("after getting the posts");
                console.log(data);
                if (data != null) {
                    setPosts(data);
                }
                else {
                    alert('Oops! An error has occurred');
                }
            });
    };

    useEffect(
        () => {
            loadPosts();
        },[]
    );

    useEffect(
        () => {
            console.log("trying to set loader");
            setPostsLoader(loadPosts);
        }, [setPostsLoader]
    )

    const [data, setData] = useState(null);

    function resetPopupParams() {
        setData(null);
    }

    function getPopupParams(data) {
        data = { ...data, resetPopupParams };
        setData(data);
    }

    return {
        posts,
        getPopupParams,
        data
    }
}

export default PostContainerViewModel;