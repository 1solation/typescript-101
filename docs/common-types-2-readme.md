# Common Types in TypeScript (part 2)

This is part 2 and a continuation from [Common Types in TypeScript part 1](). The following have code examples in [common-types-examples-part-2.ts](../src/common-types-examples-part-2.ts).

`union type`
- A simple way to combine types is called a union type
- This is created from 2 or more types
    - e.g. variableName: type1 | type2;
- More reading on [union types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
```typescript
// union types
let age: string | number;

// set to a string
age = "twenty five";

// set to a number
age = 25;

// attempt to set age to boolean, gives us a type error
age = false; // ERROR: Type 'boolean' is not assignable to type 'string | number'.
```

`discriminated unions`
- Similar to union type, but only allows access to shared properties
```typescript
// discriminated union
interface Fish {
  weight: number;
  numberOfScales: number;
  canSwim: boolean;
}

interface Bird {
  weight: number;
  canFly: boolean;
}

let randomAnimal: Fish | Bird;

// type `randomAnimal.` below, without the backticks to see what properties you can access

randomAnimal; // ERROR: Variable 'randomAnimal' is used before being assigned.

// only the weight property is allowed on randomAnimal as it's the only common property between the types in the union

```

`casting`
- Typecasting allows you to convert types and provide consistent (expected) results
    - Example use cases:
        - concatenation of a number and string
        - convert arrays of numbers to strings for formatting and display
- Force Casting
    - To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type
```typescript
// casting
let year: number = 2022;

// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct
console.log((year as string).length); // ERROR: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// alternatively you can cast with <>, this will still be typechecked
console.log((<string>year).length); // ERROR: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// you can override the typechecking with force casting, first cast to unkown, then target type
console.log((year as unknown as string).length);

```

`classes`
- Starting with ECMAScript 2015 (aka ECMAScript 6), JavaScript programmers can build their applications using this object-oriented class-based approach. In TypeScript, it allows developers to use these techniques now and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript
- Access modifiers
    - Access modifiers change the visibility of the properties and methods of a class
        - `private`
            - Limits the visibility to the same class only.
        - `protected`
            - allows properties and methods of a class to be accessible within same class and within subclasses
        - `public`
            -	allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default
```typescript
// classes
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hey, I'm learning " + this.greeting;
  }
}

let greeter = new Greeter("TypeScript!");
console.log(greeter); // Hey, I'm learning TypeScript!

```

In the next post, we'll put some of these learnings into action & create a small project using TypeScript!
