import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostViewModel = (props) => {

    const navigate = useNavigate();

    function viewComment() {
        props.getPopupParams(props, props.username);
    }

    const [likedBy,setLikedBy] = useState(props.likedBy);
    const [commentCount,setCommentCount] = useState(props.commentCount);

    function goToUser()
    {
        navigate("/home/user/"+props.username);
    }

    return {
        viewComment,
        likedBy,
        setLikedBy,
        commentCount,
        setCommentCount,
        goToUser
    }
}

export default PostViewModel;