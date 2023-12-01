import SideBarViewModel from "./SideBarViewModel";
import CreatePost from "./Component/CreatePost";

const SideBar = (props) => {

   const {
      create,
      setCreate
  } = SideBarViewModel();

    if (props.isOpen) {
       return <>
       {create? <CreatePost setCreate={setCreate} loadPosts={props.loadPosts}/> : null}
          <div className="side_bar">
             <img src="instaLogoDark.svg" className="sidebar_logo" alt="Home icon"/>
             <div>
                <div><img src="home.svg" alt="Home icon" /> <span className="side_bar_button_text">Home</span></div>
                <div><img src="search.svg" alt="Home icon" /> <span className="side_bar_button_text">Search</span></div>
                <div><img src="compass.svg" alt="Home icon" /> <span className="side_bar_button_text">Explore</span></div>
                <div><img src="reels.svg" alt="Home icon" /> <span className="side_bar_button_text">Reels</span></div>
                <div><img src="messenger.svg" alt="Home icon" /> <span className="side_bar_button_text">Messages</span></div>
                <div><img src="heart.svg" alt="Home icon" /> <span className="side_bar_button_text">Notifications</span></div>
                <div onClick={() => {setCreate(true)}}><img src="create.svg" alt="Home icon"/> <span className="side_bar_button_text">Create</span></div>
                <div><img src="user.svg" alt="Home icon" /> <span className="side_bar_button_text">Profile</span></div>
                <div><img src="menu.svg" alt="Home icon" /> <span className="side_bar_button_text">More</span></div>
             </div>
          </div>
       </>
    }
    else {
       return <>
          <div className="side_bar_small">
             <img src="instaSmallLogo.svg" className="sidebar_small_logo" alt="Home icon" />
             <div>
                <div><img src="home.svg" alt="Home icon" /></div>
                <div><img src="search.svg" alt="Home icon" /></div>
                <div><img src="compass.svg" alt="Home icon" /></div>
                <div><img src="reels.svg" alt="Home icon" /></div>
                <div><img src="messenger.svg" alt="Home icon" /></div>
                <div><img src="heart.svg" alt="Home icon" /></div>
                <div onClick={() => {setCreate(true)}}><img src="create.svg" alt="Home icon" /></div>
                <div><img src="user.svg" alt="Home icon" /></div>
                <div><img src="menu.svg" alt="Home icon" /></div>
             </div>
          </div>
       </>
    }
 };
 
 export default SideBar;