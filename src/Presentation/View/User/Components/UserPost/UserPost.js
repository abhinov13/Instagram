const UserPost = (props) => {
    return (
        <div onClick={() => { props.getPopupParams(props.post) }}>
            <img src={props.post.src} alt="post" />
            <div className="user_post_item">{props.post.likeCount} Like {props.post.commentCount} Comment</div>
        </div>
    )
}

export default UserPost;

//