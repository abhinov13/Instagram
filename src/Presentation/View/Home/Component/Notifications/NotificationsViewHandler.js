import { useEffect, useState } from "react";
import { useWebSocket } from "../../../../Context/WSContext/WSContext"
import { GetFollowing } from "../../../../../Domain/UseCase/Follow/GetUsers";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const NotificationsViewHandler = () => {

    const { notifications } = useWebSocket();
    const [followers, setFollowers] = useState([]);
    const { username } = useUser();
    const navigate = useNavigate();
    useEffect(
        () => {
            GetFollowing()
                .execute(username)
                .then(({ data }) => {
                    if (data != null) {
                        setFollowers(data);
                    }
                })
        }, [username]
    )

    function goToUser(username) {
        navigate("/home/user/" + username);
    }

    return {
        notifications,
        followers,
        goToUser
    }
};

export default NotificationsViewHandler;