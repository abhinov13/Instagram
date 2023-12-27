import CommentInputViewModel from "./CommentInputViewModel";

const CommentInput = (props) => {
    const {
        updateComment,
        sendComment,
        inputRef } = CommentInputViewModel(props);

    return (
        <>
            <div className="comment" style={{ color: "white", marginTop: "3%", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <input ref={inputRef} type="text" placeholder="Add a comment" style={{ width: "85%" }} onChange={(e) => { updateComment(e) }} />
                <button className="comment_send" onClick={(e) => { sendComment(e) }}>Send</button>
            </div>
        </>)
}

export default CommentInput;