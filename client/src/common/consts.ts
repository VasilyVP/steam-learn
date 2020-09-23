export const initialState = {
    user: {
        email: null,
        nickName: null
    }
};

const redirectUri = 'http://localhost:3000'; //redirect

export const steamAuth = {
    clientId: '934395031037-lakk45hf1gpr8fihvutsgihb5q1ma99a.apps.googleusercontent.com',
    authorizationUri: 'https://steamcommunity.com/openid/',
    redirectUri: redirectUri,
    scopes: ['openid', 'email', 'profile']
}