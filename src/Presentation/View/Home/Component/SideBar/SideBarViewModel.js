import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../Context/UserContext/UserContext";
const SideBarViewModel = () => {

    const [create, setCreate] = useState(false);

    const {username} = useUser();

    const create_button_handler = () => {
        setCreate(true);
    }

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/Home");
    }

    const goToSearch = () => {
        navigate("/Home/Search");
    }

    const goToNotifications = () => {
        navigate("/Home/Notifications");
    }

    function goToUser()
    {
        navigate("/home/user/"+username);
    }

    return {
        create,
        setCreate,
        create_button_handler,
        goToHome,
        goToSearch,
        goToNotifications,
        goToUser
    }
}

export default SideBarViewModel;