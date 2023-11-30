import PostPopupViewModel from "./PostPopupViewModel";
import CommentContainer from "../CommentContainer/CommentContainer";
import CommentInput from "../CommentInput/CommentInput";

const PostPopup = (props) => {

    const { getCommentLoader,
        loadComments } = PostPopupViewModel(props);

    return (
        <>
            <div className="banner_wrapper" style={{ display: "flex" }} onClick={(e) => { if (e.target === e.currentTarget) props.data.resetPopupParams() }}>
                <div className="post_popup_body" onClick={() => { console.log('do nothing') }}>
                    <div className="post_popup_image">
                        <img src="testpost.png" style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className="post_popup_description">
                        <div className="post_popup_owner">
                            <img src="user.svg" />
                            <div>
                                {props.data.username}
                            </div>
                            <div style={{ float: "right", marginLeft: "auto", marginRight: "10%", color: "#2C95D9", cursor: "pointer" }}>Follow</div>
                        </div>
                        <div className="post_popup_description_value">
                            {props.data.description}
                        </div>
                        <div className="comment_section">
                            <CommentContainer data={{ username: props.data.username, id: props.data.id }} getCommentLoader={getCommentLoader} />
                        </div>
                        <CommentInput postUsername={props.data.username} postUserId={props.data.id} loadComments={loadComments} />
                    </div>

                </div>
            </div>
        </>
    )
};

export default PostPopup;