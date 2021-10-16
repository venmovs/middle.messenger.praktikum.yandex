import './error.scss';

import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { Block } from '../../modules/block/block';
import { ErrorMessage, IErrorMessage } from './error-message/error-message';
import { Button, IButton } from '../../components/button/button';
import { errorTemplate } from './error.tmpl';
import { Router } from '../../modules/router/router';

const router = new Router('#app');

class Error extends Block {
    constructor() {
        const errorMessage: IErrorMessage = {
            status: '404',
            message: 'страница не найдена',
        };

        const button: IButton = {
          text: 'Назад к чатам',
          events: {
              click: () => {
                  router.go('/chats');
              },
          },
        };

        super('fragment', {
            components: {
                errorMessage: new ErrorMessage(errorMessage),
                button: new Button(button),
            },
        });
    }

    render(): string {
        return makeHtmlFromTemplate(errorTemplate, this.props);
    }
}

export { Error };
