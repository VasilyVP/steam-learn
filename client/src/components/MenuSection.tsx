import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'
import steamButton from '../assets/sits_large_noborder.png'
import OAuth from 'client-oauth2'
import { setSignedIn } from '../actions'
import { steamAuth } from '../common/consts';

const useStyles = makeStyles(theme => ({
    buttonLogin: {
        align: 'right'
    },
    grow: {
        flexGrow: 1
    },
}));

export default () => {
    const classes = useStyles();

    const handleClick = () => {
        const auth = new OAuth({ ...steamAuth });

        (window as any).oauth2Callback = async (uri: string) => {
            const tokenSet = await auth.token.getToken(uri);

            const addr = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + tokenSet.accessToken;
            const userInfoJSON = await fetch(addr);
            const userInfo = await userInfoJSON.json();

            dispatch(setSignedIn({
                email: userInfo.email,
                firstName: userInfo.given_name
            }));
        };

        window.open(auth.token.getUri());
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <div className={classes.grow}></div>
                <Button className={classes.buttonLogin} onClick={handleClick}>
                    <img src={steamButton} alt="Sign in with Steam" />
                </Button>
            </Toolbar>
        </AppBar>
    )
}