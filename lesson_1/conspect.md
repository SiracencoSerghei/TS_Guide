**Міні-конспект TypeScript**

### **1. Установка та компіляція**

```bash
npm install -g typescript   # Встановлення TypeScript глобально
tsc --init                  # Ініціалізація tsconfig.json
tsc                         # Компіляція .ts у .js
tsc -w                      # Watch mode (автокомпіляція)
```

### **2. Основні типи**

```ts
let name: string = "John";
let age: number = 25;
let isValid: boolean = true;
let nums: number[] = [1, 2, 3];
let person: [string, number] = ["Alice", 30];
```

### **3. Об'єкти та складні типи**

```ts
let user: { name: string; age: number } = { name: "John", age: 25 };
let value: any = 42;  // Може змінювати тип
let input: unknown;    // Потребує перевірки перед використанням
```

### **4. Enum та Union/Intersection**

```ts
enum Role { Admin, User, Guest }
let userRole: Role = Role.Admin;
let id: string | number = 123;
type Person = { name: string; };
type Employee = { employeeId: number; };
let staff: Person & Employee = { name: "Alice", employeeId: 123 };
```

### **5. Функції та їх типи**

```ts
function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

let sum: (a: number, b: number) => number;
sum = (x, y) => x + y;
```

### **6. Додаткові можливості**

```ts
function greet(name: string, age?: number): void {
  console.log(`Hello ${name}`);
}

let value: unknown = "Hello";
let strLength: number = (value as string).length;

type Data = { [key: string]: string | number };
let user: Data = { name: "John", age: 30 };
```

Цей конспект допоможе швидко орієнтуватися в основних поняттях TypeScript!

