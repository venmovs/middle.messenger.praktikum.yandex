import { Router } from './src/modules/router/router';
import { Login } from './src/pages/login/login';
import { Registration } from './src/pages/registration/registration';
import { Profile } from './src/pages/profile/profile/profile';
import { Chat } from './src/pages/chat/chat';
import { Error } from './src/pages/error/error';
import { ProfileEdit } from './src/pages/profile/profile-edit/profile-edit';
import { ProfileEditPassword } from './src/pages/profile/profile-edit-password/profile-edit-password';

import './static/styles/style.scss';
import './static/styles/utils.scss';
import './static/styles/button.scss';
import './static/styles/fonts.scss';
import './static/styles/inputs.scss';
import './static/styles/mixins.scss';
import './static/styles/variables.scss';

const router = new Router('#app');

router.use('/', Login);
router.use('/registration', Registration);
router.use('/profile', Profile);
router.use('/profile-edit', ProfileEdit);
router.use('/profile-edit-password', ProfileEditPassword);
router.use('/chats', Chat);
router.use('/error', Error);
router.start();
