import { createContext, useContext } from "react"

const Context = createContext();

const UserContext = ({ data, children }) => {
    const userData = data.username;

    return (
        <Context.Provider value={userData}>
            {children}
        </Context.Provider>
    )

}

export default UserContext;

export const useUser = () => {
    return useContext(Context);
};