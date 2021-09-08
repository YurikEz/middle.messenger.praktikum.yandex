"use strict";
exports.__esModule = true;
exports["default"] = {
    _404: {
        label: '404',
        subLabel: 'Возможно эту страницу кто-то уволок...',
        extendClass: 'title--big',
        link: {
            label: 'Вернуться в чат',
            href: 'chat'
        }
    },
    _500: {
        label: '500',
        subLabel: 'Сохраняйте спокойстиве и возвращайтесь в свой чат',
        extendClass: 'title--big',
        link: {
            label: 'Вернуться в чат',
            href: 'chat'
        }
    },
    chat: {
        label: 'Чат не работает',
        subLabel: 'Заворите чашечку горячего кофе ☕ и заполните профиль 📝',
        extendClass: 'title--big',
        link: {
            label: 'В профиль',
            href: 'profile'
        }
    },
    login: {
        label: 'Авторизация',
        formName: 'login',
        data: [
            {
                name: 'login',
                type: 'text',
                label: 'Логин',
                error: false,
                errorDescription: 'Неверный логин',
                hint: false,
                placeholder: 'Введите логин',
                autocomplete: false,
                disabled: false
            },
            {
                name: 'password',
                type: 'password',
                label: 'Пароль',
                error: false,
                errorDescription: 'Неверный пароль',
                hint: false,
                placeholder: 'Введите пароль',
                autocomplete: false,
                disabled: false
            },
        ],
        controls: [
            {
                name: 'login',
                type: 'submit',
                isButton: true,
                label: 'Войти',
                disabled: true,
                form: 'login'
            },
            {
                name: 'registration',
                href: 'registration',
                isButton: false,
                label: 'Ещё не зарегистрированы?',
                extendClass: ''
            },
        ]
    },
    profile: {
        label: 'Профиль',
        formName: 'profile',
        link: {
            href: 'chat'
        },
        data: [
            {
                name: 'email',
                type: 'email',
                label: 'Почта',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: true,
                value: 'yuelmanov@mail.com'
            },
            {
                name: 'login',
                type: 'text',
                label: 'Логин',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: true,
                value: 'yuelmanov'
            },
            {
                name: 'first_name',
                type: 'text',
                label: 'Имя',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: true,
                value: 'Юра'
            },
            {
                name: 'second_name',
                type: 'text',
                label: 'Фамилия',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: true,
                value: 'Елманов'
            },
            {
                name: 'display_name',
                type: 'text',
                label: 'Имя в чате',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: true,
                value: null
            },
            {
                name: 'phone',
                type: 'tel',
                label: 'Телефон',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: true,
                value: '+79999999999'
            },
        ],
        controls: [
            {
                name: 'editProfile',
                href: 'profile/edit/data',
                isButton: false,
                label: 'Изменить данные',
                extendClass: ''
            },
            {
                name: 'editPassword',
                href: 'profile/edit/password',
                isButton: false,
                label: 'Изменить пароль',
                extendClass: ''
            },
            {
                name: 'exit',
                href: 'login',
                isButton: false,
                label: 'Выйти',
                extendClass: 'red'
            },
        ]
    },
    profileEditData: {
        label: 'Редактирование данных в профиле',
        formName: 'editData',
        link: {
            href: 'chat'
        },
        data: [
            {
                name: 'email',
                type: 'email',
                label: 'Почта',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false,
                value: 'yuelmanov@mail.com'
            },
            {
                name: 'login',
                type: 'text',
                label: 'Логин',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false,
                value: 'yuelmanov'
            },
            {
                name: 'first_name',
                type: 'text',
                label: 'Имя',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false,
                value: 'Юра'
            },
            {
                name: 'second_name',
                type: 'text',
                label: 'Фамилия',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false,
                value: 'Елманов'
            },
            {
                name: 'display_name',
                type: 'text',
                label: 'Имя в чате',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false,
                value: null
            },
            {
                name: 'phone',
                type: 'tel',
                label: 'Телефон',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false,
                value: '+79999999999'
            },
        ],
        controls: [
            {
                name: 'save',
                type: 'submit',
                isButton: true,
                label: 'Сохранить',
                form: 'editData'
            },
            {
                name: 'profile',
                href: 'profile',
                isButton: false,
                label: 'Назад в профиль',
                extendClass: ''
            },
        ]
    },
    profileEditPassword: {
        label: 'Изменить пароль',
        formName: 'editPassword',
        link: {
            href: 'chat'
        },
        data: [
            {
                name: 'oldPassword',
                type: 'password',
                label: 'Старый пароль',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false
            },
            {
                name: 'newPassword',
                type: 'password',
                label: 'Новый пароль',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false
            },
            {
                name: 'newPasswordConfirm',
                type: 'password',
                label: 'Новый пароль (еще раз)',
                error: false,
                hint: false,
                autocomplete: false,
                disabled: false
            },
        ],
        controls: [
            {
                name: 'save',
                type: 'submit',
                isButton: true,
                label: 'Сохранить',
                form: 'editPassword'
            },
            {
                name: 'profile',
                href: 'profile',
                isButton: false,
                label: 'Назад в профиль',
                extendClass: ''
            },
        ]
    },
    registration: {
        label: 'Регистрация',
        formName: 'registration',
        data: [
            {
                name: 'email',
                type: 'email',
                label: 'Почта',
                error: false,
                hint: false,
                placeholder: 'Введите почту example@mail.com',
                autocomplete: false,
                disabled: false
            },
            {
                name: 'login',
                type: 'text',
                label: 'Логин',
                error: false,
                hint: false,
                placeholder: 'Введите логин',
                autocomplete: false,
                disabled: false
            },
            {
                name: 'first_name',
                type: 'text',
                label: 'Имя',
                error: false,
                hint: false,
                placeholder: 'Введите имя',
                autocomplete: false,
                disabled: false
            },
            {
                name: 'second_name',
                type: 'text',
                label: 'Фамилия',
                error: false,
                hint: false,
                placeholder: 'Введите фамилию',
                autocomplete: false,
                disabled: false
            },
            {
                name: 'phone',
                type: 'tel',
                label: 'Телефон',
                error: false,
                hint: false,
                placeholder: 'Введите телефон +7 999 999 99 99',
                autocomplete: false,
                disabled: false
            },
            {
                name: 'password',
                type: 'password',
                label: 'Пароль',
                error: false,
                errorDescription: 'Пароль менее 8 символов',
                hint: true,
                hintDescription: 'Пароль должен быть не менее 8 символов',
                placeholder: 'Введите пароль',
                autocomplete: false,
                disabled: false
            },
            {
                name: 'passwordConfirm',
                type: 'password',
                label: 'Пароль (еще раз)',
                error: true,
                errorDescription: 'Пароль не совпадает',
                hint: false,
                placeholder: 'Повторите введеный пароль выше',
                autocomplete: false,
                disabled: false
            },
        ],
        controls: [
            {
                name: 'send',
                type: 'submit',
                isButton: true,
                label: 'Создать аккаунт',
                disabled: false,
                form: 'registration'
            },
            {
                name: 'login',
                href: 'login',
                isButton: false,
                label: 'Войти',
                extendClass: ''
            },
        ]
    }
};
