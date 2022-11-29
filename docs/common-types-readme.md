# Common Types in TypeScript

This is part 1 of the common types in TypeScript, there will be a part 2 to follow which explain a few more in depth types within TypeScript.

## Primitives

Along with this file, there are code examples in [common-types-examples.ts](../src/common-types-examples.ts).

There is a [TypeScript playground](https://www.typescriptlang.org/play) where you can write, learn and share TypeScript. This is a sandbox environment in which you can experiment with TypeScript syntax in a safe area.

The [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) includes really good introductory documentation to the "everyday types" that you will encounter on your TS journey! To add to this, there is the [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) which make common type transformations easier.

Please note the primitive types below are in lowercase. The following types: `Boolean`, `Number`, `String`, `Symbol` and `Object` refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code. See TypeScripts [do's and don'ts on general types](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#number-string-boolean-symbol-and-object) for more information.

The following have code examples in [common-types-examples.ts](../src/common-types-examples.ts).

Similar to JavaScript, there are 3 commonly used primitives:

`boolean`
- This is the same as in JavaScript, simple true/false value
```typescript
const isFun: boolean = false;
```

`number`
- There is no int or float, everything is number to JavaScript/TS
```typescript
const pie: number = 3.14;
```

`string`
- Like JavaScript, strings can use single quotes or double quotes
- Template string using backticks and the `${}` syntax
```typescript
// strings can use single quotes
const favouriteColour: string = 'Black';

// or double quotes
const fullName: string = "Hasib Ahmed";

// template string, using backticks
const greet: string = `Salutations ${fullName}!`;
```

There are other basic types in TypeScript which you should be aware of:

`symbol`
- There is a primitive in JavaScript used to create a globally unique reference via the function `Symbol()`
- Symbol represents unique tokens that can be used as keys for object properties
```typescript
// symbol
// note that both variables have what seems to be the same value
const firstName = Symbol("name");
const secondName = Symbol("name");

// if we check their equality, it will always return false & TS will give us an error
if (firstName === secondName) {
// can not happen as each Symbol is a globally unique reference
}
```

`bigint` 
- Introduced in TypeScript 3.2, it provides a way to represent whole numbers larger than 253
- You can get a bigint in 2 ways:
	- Calling the `BigInt()` function
	- Writing a BigInt literal by adding `n` to the end of any numeric integer
- NOTE: You can only use the `bigint` type if you are targeting version ESNext
```typescript
// creation via the BigInt function
const big1: bigint = BigInt(200);

// creation via the literal syntax
let big2: bigint = 200n;
```

`null`
- Like JavaScript, null is used to indicate an absent value
```typescript
const absentValue: null = null;
```

`undefined`
- Like JavaScript, undefined is used to indicate an uninitialised value
```typescript
const uninitialisedValue: undefined = undefined;
```

Note: `null` and `undefined` will not be factored into any type checks unless you have the [strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks) option enabled (this will be covered in a later posts/updates)

`any`
- A top type of TypeScript's type system (aka universal supertype)
- [TypeScripts Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any) explicitly say **not** to use any as a type **unless** you are migrating an existing JavaScript project to TypeScript
- `any` represents all possible JavaScript values; primitives, objects, arrays, functions, errors, symbols, etc
- TypeScript lets us perform any operation we want on values of type `any` without having to perform any kind of checking beforehand
- However, In most cases, this is too permissive and can be problematic at runtime. There is not much protection offered from TypeScript when using the `any` type
```typescript
// any
let value: any;

// all the below are type-correct
value.trim();
value[0];
value.property.does.not.exist;
new value();
```

`unknown`
- Another top type of TypeScript's type system
- If a variable is not known at the time of writing (e.g. accepting all values from user input) we can use the `unknown` type here
- You can narrow your `unknown` type variable to something more specific by doing typeof checks, comparison checks, or more advanced type guards
- This is known as [type narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- This is similar to `any`, as the value can be of any type but it is essentially safe by default
```typescript
// unknown type with above code in same file
let value1: unknown;
// the following operations are no longer considered type-correct (value1[0] would not be type-correct with the strictNullChecks option on)
value1.trim(); // ERROR: Object is of type 'unknown'
value1[0]; // ERROR: Object is of type 'unknown'
value1.property.does.not.exist; // ERROR: Object is of type 'unknown'
new value1(); // ERROR: Object is of type 'unknown'

// unknown type pt2
// set unknown type to default of null for this example
let userInput: unknown = null;

// variable userInput can be any specific type, so all the below work fine
userInput = "mumbo jumbo";
userInput = 10;
userInput = true;

// simple typeof checks for an unknown type
if (typeof userInput === "boolean") {
  // TS knows that userInput is a boolean now
  // we can save this in a new const (or let) now we know the type and value
  const userInputBool: boolean = userInput;
  // within this typeof check block, you cannot assign userInput to another type
  // the following will show a type error
  const userInputNumber: number = userInput; // ERROR: Type 'boolean' is not assignable to type 'number'
}
```

`object`
- Everything that isn’t a primitive type in TypeScript is a subclass of the object type
	- i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined
```typescript
// defining an object explicitly
const myObject: object = {};
```

`array`
- TypeScript allows you to work with an array of values similar to JavaScript
- There are 2 ways to write an `array` type
	- Use the type of element followed by square brackets e.g. `number[] = []`
	- Use the generic array type (generics will be covered in later posts/updates) e.g. `Array<number> = []`
```typescript
// defining arrays
// method 1
let arr1: number[] = [1, 2, 3];

// method 2, using generics
let arr2: Array<number> = [1, 2, 3];
```

`tuples`
- A tuple type allows you to express an array with a fixed number of elements, of which the types are known
- For example, you can represent a string and number type in an array
```typescript
// tuples
let person: [string, number];

// initialise in the correct order
person = ["Bob", 18];

// attempt to initialise in the incorrect order, gives us type errors
person = [18, "Bob"]; // ERROR 1: Type of 'number' is not assignable to type 'string'. ERROR 2: Type of 'string' is not assignable to type 'number'.

// attempt to initialise it as empty, gives us type errors
person = []; // ERROR: Type '[]' is not assignable to type '[string, number]'

// access correct element at index, correct type is retrieved and we can do an operation on the string
person[0].substring(1);

// attempt to access the same substring element at the incorrect index, and we get a type error
person[1].substring(1); // ERROR: Property 'substring' does not exist on type 'number'.

// attempt to access element outside the set of known indicies will error
person[3]; // ERROR: Tuple type '[string, number]' of length 2 has no element at index '3'.

```

`enums`
- Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime s
- As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values
- Read more about enums here [https://www.typescriptlang.org/docs/handbook/enums.html](https://www.typescriptlang.org/docs/handbook/enums.html)
```typescript
// enums
// enums begin numbering their members starting at 0
enum Colour {
  Green, // 0
  Amber, // 1
  Red, // 2
}
// call element by index
console.log(Colour[0]); // Green

// you can manually set the values in the enum
enum roomInMetres {
  Floor1 = 100,
  Floor2 = 321,
  Floor3 = 5,
}
// call element by it's name
console.log(roomInMetres.Floor2); // 321
```

In the next post we will be going over union types, discriminated unions, casting to a different types and casting!
