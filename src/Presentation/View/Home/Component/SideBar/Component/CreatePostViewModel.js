import { useState } from "react";
import { Create } from "../../../../../../Domain/UseCase/Post/Create";
import { useUser } from "../../../UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const CreatePostViewModel = () => {
    const [imgSrc, setImgSrc] = useState("addImage.svg");
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const username = useUser();
    const navigate = useNavigate();

    const uploadRequest = (e) => {
        Create()
        .execute(file,username,description)
        .then(({data}) => {
            console.log(data);
            navigate('/home', {state: {username}});
        });
    }

    const updateImage = (e) => {
        if(e.target.files[0] == null) 
        {
            setImgSrc('addImage.svg');
            setFile(null);
        }
        else 
        {
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