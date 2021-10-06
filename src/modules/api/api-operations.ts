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
const searchUser = `${user}/search`;

const userObj = {
    user,
    profile,
    avatar,
    password,
    searchUser,
};

const chats = '/chats';
const chatsArchive = `${chats}/archive`;
const chatsUnArchive = `${chats}/unarchive`;
const chatUsers = `${chats}/users`;

const chatesObj = {
    chats,
    chatsArchive,
    chatsUnArchive,
    chatUsers,
};

export { authObj, userObj, chatesObj };
