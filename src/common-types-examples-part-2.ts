// ******************************
// Common Types Examples - Part 2
// ******************************

// union types
let age: string | number;
// set to a string
age = "twenty five";
// set to a number
age = 25;
// attempt to set age to boolean, gives us a type error
age = false;

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

randomAnimal;

// only the weight property is allowed on randomAnimal as it's the only common property between the types in the union

// casting
let year: number = 2022;

// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct
console.log((year as string).length);
// alternatively you can cast with <>, this will still be typechecked
console.log((<string>year).length);

// you can override the typechecking with force casting, first cast to unkown, then target type
console.log((year as unknown as string).length);

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
