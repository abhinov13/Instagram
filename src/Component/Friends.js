import { Avatar, Box, Button, Card, Divider, Grid, List, ListItem, Toolbar, Typography } from "@mui/material";

const Friends = ((props) => {

    const reasons = ["Suggested for you", "New to Instagram", "Follows You"];
    const suggestedUsers = (<Grid container spacing={2} xs={12} marginTop={1}>
        {
            [
                { profileSrc: "brokerSrc.jpg", username: "userNameGoesHere", reason: 0 },
                { profileSrc: "brokerSrc.jpg", username: "userNameGoesHere", reason: 1 },
                { profileSrc: "brokerSrc.jpg", username: "userNameGoesHere", reason: 2 },
                { profileSrc: "brokerSrc.jpg", username: "userNameGoesHere", reason: 1 },
                { profileSrc: "brokerSrc.jpg", username: "userNameGoesHere", reason: 0 }
            ].map((user) => (
                <>
                    <Grid item xs={2}>
                        <Avatar sx={{ width: 50, height: 50 }} />
                    </Grid>
                    <Grid item direction={"column"} xs={8}>
                        <Typography variant="subtitle1">
                            {user.username}
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"} gutterBottom>
                            {reasons[user.reason]}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Button>
                            Follow
                        </Button>
                    </Grid>
                </>
            ))
        }
    </Grid>);

    return (
        <>
            <Box margin={"15% 10% 0 20%"}>
                <Grid container spacing={2} xs={12} gutterBottom>
                    <Grid item xs={2}>
                        <Avatar sx={{ width: 50, height: 50 }} />
                    </Grid>
                    <Grid item direction={"column"} xs={8}>
                        <Typography variant="subtitle1">
                            _abhinov__
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"} gutterBottom>
                            Abhinov Mishra
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Button>
                            Switch
                        </Button>
                    </Grid>
                </Grid>
                <Divider/>
                {suggestedUsers}
            </Box>
        </>
    )
}
);

export default Friends;
