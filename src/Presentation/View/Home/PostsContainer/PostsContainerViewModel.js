import { useState, useEffect } from "react";
import GetPosts from "../../../../Domain/UseCase/Post/GetPosts";

const PostContainerViewModel = () => {
    const [posts, setPosts] = useState([]);
    useEffect(
        () => {
            const getter = GetPosts();
            getter.execute().then(({ data }) => {
                if (data != null)
                {
                    setPosts(data);
                }
                else {
                    alert('Oops! An error has occurred');
                }
            });
        }, []
    );

    const [data,setData] = useState(null);

    function resetPopupParams()
    {
        setData(null);
    }

    function getPopupParams(data)
    {
        data = {...data, resetPopupParams};
        setData(data);
    }

    return {
        posts,
        getPopupParams,
        data
    }
}

export default PostContainerViewModel;