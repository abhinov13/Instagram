
const HomeViewModel = (location) => {
    const data = {username: location.state.username};
    return {
        data
    }
};

export default HomeViewModel;