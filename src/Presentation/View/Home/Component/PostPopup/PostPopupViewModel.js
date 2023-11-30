import { useEffect, useState } from "react";

const PostPopupViewModel = (props) => {

    const [loadComments,setLoadComments] = useState(null);

    function getCommentLoader(loader)
    {
        setLoadComments(() => (loader));
    };

    return {
        getCommentLoader,
        loadComments
    }
};

export default PostPopupViewModel;