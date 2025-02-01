## Запуск локального сервера для TypeScript

```sh
# Ініціалізація проєкту
npm init -y

# Встановлення сервера
npm i --save-dev @web/dev-server

# Налаштування package.json
# Додайте в scripts:
# "start": "web-dev-server --node-resolve --open --watch"

# Запуск сервера
npm start
