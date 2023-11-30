import { useEffect, useRef, useState } from "react";
import { useUser } from "../../UserContext/UserContext";
import { Create } from "../../../../../Domain/UseCase/Comment/Create";

const CommentInputViewModel = (props) => {

    const [comment, setComment] = useState({});
    const username = useUser();
    const [lock, setLock] = useState(false);

    const inputRef = useRef('');

    function updateComment(e) {
        if (!lock)
            setComment(e.target.value);
    }

    function sendComment(e) {
        e.preventDefault();
        setLock(true);
        Create()
            .execute(username, comment, props.postUsername, props.postUserId)
            .then(() => {
                inputRef.current.value = '';
                setComment(null);
                setLock(false);
                if(props.loadComments != null)
                {
                    props.loadComments();
                }
            });
    }

    return {
        updateComment,
        sendComment,
        inputRef
    }
}

export default CommentInputViewModel;