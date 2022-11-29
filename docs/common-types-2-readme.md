# Common Types in TypeScript (part 2)

This is part 2 and a continuation from [Common Types in TypeScript part 1](). The following have code examples in [common-types-examples-part-2.ts](../src/common-types-examples-part-2.ts).

`union type`
- A simple way to combine types is called a union type
- This is created from 2 or more types
    - e.g. variableName: type1 | type2;
- More reading on [union types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
```typescript
```

`discriminated unions`
- Similar to union type, but only allows access to shared properties.
```typescript
```

`casting`
- Typecasting allows you to convert types and provide consistent (expected) results.
    - Example use cases:
        - concatenation of a number and string
        - convert arrays of numbers to strings for formatting and display
- Force Casting
    - To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type
```typescript
```

`classes`
- Starting with ECMAScript 2015 (aka ECMAScript 6), JavaScript programmers can build their applications using this object-oriented class-based approach. In TypeScript, it allows developers to use these techniques now and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript
- Access modifiers
    - Access modifiers change the visibility of the properties and methods of a class.
        - `private`
            - Limits the visibility to the same class only.
        - `protected`
            - allows properties and methods of a class to be accessible within same class and within subclasses
        - `public`
            -	allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.
