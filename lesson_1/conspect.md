Міні-конспект TypeScript

1. Команди для роботи з TypeScript

```
npm install -g typescript
```

Установка TypeScript глобально, щоб працювати з ним у будь-якому проекті.

```
tsc --init
```

Ініціалізація файлу tsconfig.json, де налаштовуються параметри компілятора TypeScript.

```
tsc
```

Компіляція файлів .ts у .js згідно з налаштуваннями у tsconfig.json.

```
tsc -w
```

Активує "watch mode", у якому TypeScript автоматично компілює файли після кожної зміни.

2. Базові типи

```
string: рядки (let name: string = "John";)
number: числа (let age: number = 25;)
boolean: логічні значення (let isValid: boolean = true;)
array: масиви (let nums: number[] = [1, 2, 3];)
tuple: кортежі (let person: [string, number] = ["Alice", 30];)
```

3. Складні типи


object: об’єкти з фіксованою структурою.

```
let user: { name: string; age: number } = { name: "John", age: 25 };
```

4. any

Дозволяє змінній приймати значення будь-якого типу (фактично відключає ts).

```
let value: any = 42; 
value = "Hello"; 
value = true;
```

5. unknown

Схожий на any, але потребує перевірки типу перед використанням.

```
let input: unknown;
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

6. Enum

Перелік констант.

```
enum Role { Admin, User, Guest }
let userRole: Role = Role.Admin;
```

7. Union Type

Змінна може бути кількох типів.

```
let id: string | number = 123;
id = "abc";
```

8. Intersection Type

Об'єднання кількох типів в один.

```
type Person = { name: string; };
type Employee = { employeeId: number; };
let staff: Person & Employee = { name: "Alice", employeeId: 123 };
```

9. Return Type

Тип значення, яке повертає функція.

```
function add(a: number, b: number): number {
  return a + b;
}
```

10. void

Тип для функцій, які нічого не повертають.

```
function log(message: string): void {
  console.log(message);
}
```

11. Function as Type

Визначення типу для функції.

```
let sum: (a: number, b: number) => number;
sum = (x, y) => x + y;
```

12. Optional Params in Type

Параметри, які можуть бути відсутніми.

```
function greet(name: string, age?: number): void {
  console.log(`Hello ${name}`);
}
```

13. as Operator

Приведення типів.

```
let value: unknown = "Hello";
let strLength: number = (value as string).length;
```

14. Index Properties

Тип для об'єктів із динамічними ключами.

```
type Data = { [key: string]: string | number };
let user: Data = { name: "John", age: 30 };
```

Цей конспект допоможе швидко орієнтуватися в основних поняттях TypeScript.