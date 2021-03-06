# Проект по созданию чата (Яндекс практикум)

# Команды в проекте
- Build проекта `yarn build || npm run build`
- Dev Сборка `yarn dev || npm run dev`
- Запуск Express без build `yarn server || npm run server`
- Запустить Eslint `yarn eslint || npm run eslint`
- Запустить Stylelint `yarn stylelint || npm run stylelint`
- Запустить Проверку типов `yarn tsc || npm run tsc`
- Запустить тесты `yarn test || npm run test`
# Работа с Docker и Heroku
- Собрать Docker Image `yarn docker-build || npm run docker-build`
- Зарегистрировать Docker Image `docker tag IMAGE_ID registry.heroku.com/yu-elmanov-chat/web`
    Тут надо `IMAGE_ID` заменить на свой ID образа
- Пушим Docker Image `yarn docker-push || npm run docker-push`
- Релизим новую сборку в Heroku `yarn heroku-release || npm run heroku-release`
- Открываем актуальную сборку на Heroku `yarn heroku || npm run heroku`

# Макет в [Figma](https://www.figma.com/file/rLeCAzgqTfcNl8OZZmj6se/Chat?node-id=0%3A1)

В Figma, есть несколько Pages:
- **Yandex chat** - Исходный макет от Яндекс практикума (изменена цветевая гамма);
- **Chat** - Моя адаптация макета;
- **Modules** - Модули проекта;
- **Color** - Цвета проекта.

# Ссылка на [Netlify](https://trusting-shannon-d97b93.netlify.app/)
# Ссылка на [Heroku](https://yu-elmanov-chat.herokuapp.com/)
# Ссылки на ```pull request```
[sprint_1](https://github.com/YurikEz/middle.messenger.praktikum.yandex/pull/1)
[sprint_2](https://github.com/YurikEz/middle.messenger.praktikum.yandex/pull/2)
[sprint_3](https://github.com/YurikEz/middle.messenger.praktikum.yandex/pull/3)
[sprint_4](https://github.com/YurikEz/middle.messenger.praktikum.yandex/pull/4)