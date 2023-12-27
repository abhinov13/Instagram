import GetTimeElapsed from "../../../../../Domain/UseCase/Utils/GetTimeElapsed";
import CommentInput from "../CommentInput/CommentInput";
import LikeButton from "./Components/LikeButton/LikeButton";
import PostViewModel from "./PostViewModel";

const Post = (props) => {
    const {
        viewComment,
        likedBy,
        setLikedBy,
        commentCount,
        setCommentCount,
        goToUser
    } = PostViewModel(props);

    return (
        <>
            <div className="post_wrapper">
                <div className="post_head">
                    <div className="post_user_img"><img src={props.userSrc? props.userSrc : "/user.svg"} alt="user" onClick={goToUser} style={{cursor: "pointer"}} /></div>
                    <div className="post_username" onClick={goToUser} style={{cursor: "pointer"}}>{props.username}</div>
                    <div className="dot_seperator"></div>
                    <div className="date_posted">{GetTimeElapsed(new Date(props.creationDate))}</div>
                    {/**<div className="post_menu"><img src="/dotMenu.svg" alt="menu" /></div> */}
                </div>

                <div className="post_data">
                    <img src={props.src} alt="post" />
                </div>

                <div className="post_interact">
                    <LikeButton postUsername={props.username} postId={props.id} likedBy={likedBy} setLikedBy={setLikedBy} />
                    <div style={{ marginLeft: "1%" }} onClick={() => viewComment(props)}><img src="/comment.svg" alt="comment" /></div>
                    <div style={{ marginLeft: "1%" }}><img src="/share.svg" alt="send" /></div>
                    {/**<div style={{ marginLeft: "auto" }}><img src="/bookmark.svg" alt="bookmark" /></div> */}
                </div>

                <div className="post_description">
                    {likedBy.length} likes<br />
                    {props.description !== "" ? <><b>{props.username}</b> {props.description}<br /></> : null}
                    <div style={{ color: "gray", cursor: "pointer" }} onClick={() => viewComment(props)}>
                        {commentCount === 0 ? <>View Comments</> : <>View all {commentCount} Comments</>}
                    </div>
                </div>
                <CommentInput postUsername={props.username} postUserId={props.id} commentCount={commentCount} setCommentCount={setCommentCount}/>
            </div>
        </>
    )
}

export default Post;