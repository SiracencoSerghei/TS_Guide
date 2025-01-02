# TypeScript Course

Цей репозиторій містить матеріали для курсу по TypeScript. Ви знайдете приклади коду, інструкції для налаштування середовища та вправи для освоєння TypeScript.

## Початок роботи

Щоб почати працювати з проектом, виконайте наступні кроки:

## Крок 1: Клонування репозиторію
```bash
git clone https://github.com/SiracencoSerghei/TS_Guide
```

## Крок 2: Встановлення залежностей
Встановіть всі необхідні пакети:

```bash
npm install
```

## Крок 3: Запуск проекту
Щоб запустити проект, скористайтеся командою:

```bash
npm run dev
```

## Крок 4: Компиляція TypeScript
Для компіляції TypeScript в JavaScript:

```bash
npm run build
```

## Крок 5: Перегляд результату
Після компіляції ви можете запустити зібраний проект:

```bash
npm run start
```

Структура проекту
src/ - вихідний код TypeScript.
dist/ - зібраний JavaScript код після компіляції.
tsconfig.json - конфігурація для TypeScript.
Ліцензія
Цей курс ліцензується за умовами MIT License.


### Щоб не виконувати команду 'tsc' щоразу, коли ми змінюємо код, ми можемо використовувати наступну команду:


```bash
tsc -w
```

Вона автоматично слідкуватиме за файлами проєкту і компілювати файли, які були змінені. Для того, щоб не зупиняти виконання npm start щоразу, можна відкрити tsc -w в окремій консолі.