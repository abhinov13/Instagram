import GetTimeElapsed from "../../../../../Domain/UseCase/Utils/GetTimeElapsed";
import CommentInput from "../CommentInput/CommentInput";
import PostViewModel from "./PostViewModel";

const Post = (props) => {
    const {
        viewComment
    } = PostViewModel(props);

    return (
        <>
            <div className="post_wrapper">
                <div className="post_head">
                    <div className="post_user_img"><img src="user.svg" alt="user" /></div>
                    <div className="post_username">{props.username}</div>
                    <div className="dot_seperator"></div>
                    <div className="date_posted">{GetTimeElapsed(new Date(props.creationDate))}</div>
                    <div className="post_menu"><img src="dotMenu.svg" alt="menu" /></div>
                </div>

                <div className="post_data">
                    <img src={props.src} alt="post" />
                </div>

                <div className="post_interact">
                    <div ><img src="heart.svg" alt="like" /></div>
                    <div style={{ marginLeft: "1%" }} onClick={() => viewComment(props)}><img src="comment.svg" alt="comment" /></div>
                    <div style={{ marginLeft: "1%" }}><img src="share.svg" alt="send" /></div>
                    <div style={{ marginLeft: "auto" }}><img src="bookmark.svg" alt="bookmark" /></div>
                </div>

                <div className="post_description">
                    Liked by <b>__abhinov_</b> and others<br />
                    {props.description !== "" ? <><b>{props.username}</b> {props.description}<br /></> : null}
                    ...<br />
                    <div style={{ color: "gray" }}>more
                        <br />View all 39 comments
                    </div>

                    <CommentInput postUsername={props.username} postUserId={props.id}/>

                </div>
            </div>
        </>
    )
}

export default Post;