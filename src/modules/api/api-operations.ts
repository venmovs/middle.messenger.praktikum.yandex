const auth = '/auth/';
const signUp = `${auth}signup`;
const signIn = `${auth}signin`;
const authUser = `${auth}user`;
const logout = `${auth}logout`;

const authObj = {
    signUp,
    signIn,
    authUser,
    logout,
};

const user = '/user/';
const profile = `${user}profile`;
const avatar = `${profile}/avatar`;
const password = `${user}password`;

const userObj = {
    user,
    profile,
    avatar,
    password,
};

const chats = '/chats';
const chatsArchive = `${chats}/archive`;
const chatsUnArchive = `${chats}/unarchive`;

const chatesObj = {
    chats,
    chatsArchive,
    chatsUnArchive,
};

export { authObj, userObj, chatesObj };
