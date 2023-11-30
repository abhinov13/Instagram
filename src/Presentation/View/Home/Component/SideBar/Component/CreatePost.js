import CreatePostViewModel from "./CreatePostViewModel"

const CreatePost = (props) => {
    const {
        imgSrc,
        setDescription,
        uploadRequest,
        updateImage
    } = CreatePostViewModel();

    return <div className="banner_wrapper">
        <div className="upload">
            <div className="banner_header">Create New Post
                <img src="close.svg" style={{ height: "80%", float: "right", marginRight: "2%", cursor: "pointer" }} onClick={() => { props.setCreate(false) }} />
            </div>
            <div style={{ backgroundColor: "#444444", height: "0.01rem", width: "100%" }} className="centre_vertically" />
            <div className="create_post_seperator">
                <div style={{ width: "63%" }}>
                    <img src={imgSrc} style={{ height: "100%", width: "100%" }} />
                </div>
                <div style={{ width: "33%" }} className="create_post_control">
                    Description
                    <textarea onChange={(e) => { setDescription(e.target.value) }} maxLength="1000" />
                    <label for="image-upload">Select Image</label>
                    <input id="image-upload" type="file" style={{ display: "none" }} accept="image/*" onChange={(e) => { updateImage(e) }} />
                    <label onClick={uploadRequest}>Create Post</label>
                </div>
            </div>

        </div>
    </div>
}

export default CreatePost;