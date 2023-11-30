import GetTimeElapsed from "../../../../../../Domain/UseCase/Utils/GetTimeElapsed";

const Comment = (props) => {

    return (
        <div className="comment_wrapper">
            <img src="user.svg" className="comment_user_img" alt="user Image"/>
            <div>
                <div className="comment_content">
                    <div><span style={{ fontWeight: "600" }}>{props.username}</span>
                        {props.content}
                    </div>
                    <img src="heart.svg" style={{ height: "60%", alignSelf: "center", marginLeft: "2%" }} />
                </div>
                <div className="comment_options">
                    <div>{GetTimeElapsed(new Date(props.creationDate))}</div>
                    <div>8 likes</div>
                    <div>Reply</div>
                </div>
            </div>

        </div>

    )
};

export default Comment;