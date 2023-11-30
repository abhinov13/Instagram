import { getAll } from "../../../Data/Repository/post_repository"

const GetPosts = () => {
    return {
        async execute() {
            const { data, error } = await getAll();
            return { data, error };
        }
    }
}

export default GetPosts;