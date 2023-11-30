

const PostViewModel = (props) => {

    function viewComment()
    {
        props.getPopupParams(props);
    }
    
    return {
        viewComment
    }
}

export default PostViewModel;