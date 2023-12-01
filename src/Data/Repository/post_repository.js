import { getPosts, save } from "../DataSource/post_datasource";

export const getAll = async () => {
    try {
        const { data } = await getPosts();
        console.log('getting posts');
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while getting posts');
        console.log(error);
        return { data: null, error: error };
    }
}

export const create = async (post) => {
    try {
        const { data } = await save(post);
        console.log('creating post');
        return { data: data, error: null };

    } catch (error) {
        console.log('error occurred while creating post');
        console.log(error);
        return { data: null, error: error };
    }
}