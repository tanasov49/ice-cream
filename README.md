# Проект Healthy-food
Макет Figma [ссылка на мекет](https://www.figma.com/file/ITSOvIfp5tdEigTry7kcFj/ice-cream?node-id=1175%3A291&t=eL6RBs5ZcWJfWG0k-0)

[Ссылка на демо страницу](https://tanasov49.github.io/healthy_food/)

В данном проекте я использовал локальный импорт изображений, все названия блоков и прочии моменты я использую из файла data в папке data
Данный проект создан при помощи React.
Используются следующий стек технологий:

-TypeScript

-Webpack 5 версии;

-NodeJs;

-React;

-Хуки реакта;

-grid

-flex;

-SASS

-Валидация формы

-Аналоговый слайдер изображений

-БЭМ, именование блоков согласно методологии;

-Адаптивная и мобильная верстка под все разрешения (от 320px до 1200px);

Использовал только доуступные в React хуки, т.к. старался сделать проект с минимальным участием сторонних библиотек. 
### Для развертывания проекта с помощью webpack использовал следующие модули:
#### Установка самого webpack
```shell
npm i webpack --save-dev
```
#### Установка плагина интерфейса
```shell
npm i webpack-cli --save-dev
```
#### Установка плагина локального сервера
```shell
npm i webpack-dev-server --save-dev
```
#### Установка плагина для Babel
```shell
npm i @babel/core --save-dev
npm i @babel/preset-env --save-dev
npm i core-js
npm i babel-loader --save-dev
```
#### Установка плагина html
```shell
npm i html-webpack-plugin --save-dev 
```
#### Установка плагина CleanWebpackPlugin
```shell
npm i clean-webpack-plugin --save-dev 
```
#### Установка плагинов для обрабоки CSS
```shell
npm i css-loader --save-dev
npm i mini-css-extract-plugin --save-dev 
npm i postcss-loader --save-dev
npm i autoprefixer --save-dev
npm i cssnano --save-dev 
```
#### Установка плагина для SASS
```shell
npm i sass-loader
npm i node-sass
```
#### Установка плагина для обработки SVG файлов (нужно для для того чтобы их удобно помещать в виде блоков React)
```shell
npm install --save-dev @svgr/webpack
```
#### Для запуска проекта используем
```shell
npm start
```
#### Конфигурация package.json для запуска проекта и его build
```javascript
  "scripts": {
    "start": "webpack serve",
    "build": "webpack --mode production",
    "predeploy": "npm run build",
    // для деплоя страницы
    "deploy": "gh-pages -d build"
  },
```
### Компоненты React
Все блоки React разбиты на отдельные компоненты в папке components, в которой есть главные блоки Header, Main, Footer. А уже в самой папке UI находятся все основные блоки компоненты для React
### Шрифты
[Шрифты]
Шрифты использую Worksans и Seymour One, все они импортированы локально
### Стили
Весь проект построен с помощью методологии БЭМ, т.е. каждый отдельный взятый блок можно использовать повторно на любой странице проекта, либо в другом проете. Все стили находятся отдельно в каждом компоненте React
### Изображения
Все изображения находятся в папке images и разбиты по секциям страницы
```javascript
// Для импорта в качестве подключения к img
import ImageFood1 from '../../../images/images_food/imagefood1.jpg';
// Для ипорта SVG в качестве блока использовал также
import ButtonLeft from '../../../images/svg/button-left.svg';
// Для иморта svg в качестве src использовал
import ButtonLeft from '../../../images/svg/button-left.svg?url';
```
### Использование SASS
Для использования миксинов и переменных, чтобы можно было в случае чего менять быстро значения стилей я использовал их, все они находятся в папке [sass]
## Задача проекта
Изучение работы Typescript, валидация форм