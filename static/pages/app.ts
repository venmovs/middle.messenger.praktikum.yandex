import { Router } from '../../src/modules/router/router';
import { Login } from '../../src/pages/login/login';
import { Registration } from '../../src/pages/registration/registration';
import { Profile } from '../../src/pages/profile/profile/profile';
import { Chat } from '../../src/pages/chat/chat';
import { Error } from '../../src/pages/error/error';
import { ProfileEdit } from '../../src/pages/profile/profile-edit/profile-edit';

const router = new Router('#app');

router.use('/', Login);
router.use('/registration', Registration);
router.use('/profile', Profile);
router.use('/profile-edit', ProfileEdit);
router.use('/chats', Chat);
router.use('/error', Error);
router.start();
