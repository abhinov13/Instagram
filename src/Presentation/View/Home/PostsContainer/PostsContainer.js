import Post from "../Component/Post/Post";
import PostPopup from "../Component/PostPopup/PostPopup";
import PostContainerViewModel from "./PostsContainerViewModel";
const PostsContainer = (props) => {
    const {
        posts,
        getPopupParams,
        data
    } = PostContainerViewModel(props);

    return (
        <>
            {data != null? <PostPopup data={data}/> : null}
            <div className="post_container">
                {posts?.map((val) => (
                    <Post key={val.postLink} username={val.key.username} id={val.key.id} src={val.postLink} description={val.description} creationDate={val.creationDate} getPopupParams={getPopupParams} />
                ))}
            </div>
        </>
    )
}

export default PostsContainer;