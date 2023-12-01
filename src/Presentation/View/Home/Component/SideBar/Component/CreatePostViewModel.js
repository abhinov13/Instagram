import { useState } from "react";
import { Create } from "../../../../../../Domain/UseCase/Post/Create";
import { useUser } from "../../../UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const CreatePostViewModel = (props, location) => {
    const [imgSrc, setImgSrc] = useState("addImage.svg");
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const username = useUser();
    const navigate = useNavigate();

    const uploadRequest = (e) => {
        props.setCreate(false);
        Create()
            .execute(file, username, description)
            .then(() => {
                if (props.loadPosts.current != null && location.pathname === '/home')
                    props.loadPosts.current();
                else if(location.pathname !== '/home')
                    navigate('/home', { state: { username } });
                else
                    alert('Oops! UI has an error');
            });
    }

    const updateImage = (e) => {
        if (e.target.files[0] == null) {
            setImgSrc('addImage.svg');
            setFile(null);
        }
        else {
            setImgSrc(URL.createObjectURL(e.target.files[0]));
            setFile(e.target.files[0]);
        }
    }

    return {
        imgSrc,
        setDescription,
        uploadRequest,
        updateImage
    }
}

export default CreatePostViewModel;