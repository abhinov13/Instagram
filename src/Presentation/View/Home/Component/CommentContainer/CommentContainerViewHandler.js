import { useEffect, useState } from "react";
import GetComments from "../../../../../Domain/UseCase/Comment/GetComments";
const CommentContainerViewHandler = (props) => {

    const [comments, setComments] = useState([]);

    const loadComments = () => {
        GetComments()
            .execute({ username: props.data.username, id: props.data.id })
            .then(
                ({ data }) => {
                    setComments(data);
                }
            );
    }

    useEffect(
        () => {
            props.getCommentLoader(loadComments);
            loadComments();
        }, []
    )

    return {
        comments
    }
};

export default CommentContainerViewHandler;