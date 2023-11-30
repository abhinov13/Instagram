import { useState } from "react"

const SideBarViewModel = () => {
    
    const [create,setCreate] = useState(false);

    const create_button_handler = () => {
        setCreate(true);
    }

    return {
        create,
        setCreate,
        create_button_handler
    }
}

export default SideBarViewModel;