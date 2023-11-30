import { create, getPostComment, getReplyComment } from "../DataSource/comment_datasource";

export const createComment = async (comment) => {
    try {
        const { data } = await create(comment);
        console.log('creating comment');
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while creating comment');
        console.log(error);
        return { data: null, error: error };
    }
}

export const getCommentForPost = async (post) => {
    try {
        const { data } = await getPostComment(post);
        console.log('getting post comment');
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while getting post comment');
        console.log(error);
        return { data: null, error: error };
    }
}

export const getReplyForComment = async (comment) => {
    try {
        const { data } = await getReplyComment(comment);
        console.log('getting reply comment');
        return { data: data, error: null };

    } catch (error) {
        console.log('error occurred while getting reply comment');
        console.log(error);
        return { data: null, error: error };
    }
}