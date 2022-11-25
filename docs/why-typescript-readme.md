# Why TypeScript?

TypeScript is a superset of JavaScript that has optional typing and compiles down to plain JavaScript. TypeScript is technically JavaScript with [static typing](https://developer.mozilla.org/en-US/docs/Glossary/Static_typing).

To make sure there aren't any bugs in your code, you'd usually write some tests - following test-driven development (TDD). You would also manually verify the code works, by running it, and also have a peer review (pull requests on GitHub or have someone just sit next to you and look at your code).

![javascript undefined](https://media.tenor.com/PlXROjIs2BcAAAAd/javascript-undefined-is-not-a-function.gif)

Using a type-checked language like TypeScript provides immediate feedback during development & can save you time and effort.

With these features, TypeScript can help you feel more confident in your code and save a lot of time checking to make sure you haven't broken the project by accident at run time since variable types are known at compile time.

![Great Success](https://media.tenor.com/D8WfhN1xzwMAAAAC/sachabaroncohen-borat.gif)

## Why choose TypeScript over JavaScript?

- TypeScript code is more reliable and easier to refactor. This allows you to avoid errors and rewrite code a lot easier.

    Types negate most of the head-scratching errors that can make their way into JavaScript code & also allows for a quick feedback loop to fix the small mistakes during code writing & refactoring.


- TypeScript is less ambiguous, it allows you to focus on how each part of your code interacts with one another & makes you pay attention to how your system is actually built.

- TypeScript is a superset of JavaScript, you can use all your favourite JavaScript libraries and code that you want in your TypeScript code!

    This means that you can gradually start to use TypeScript in your codebase, first adding types to individual files and modules, then *you'll be pushing TypeScript as much as I am*.

![Roll Safe](https://media.tenor.com/WdMAHbF-yVYAAAAC/think-about-it-reece-simpson.gif)

It isn't all sunshine & rainbows over in TypeScript land, however. With any new bit of tech, be that a framework, library or, like now, a programming language - there are always downsides. Here are my top few cons of TypeScript:

- Grandmasters of Java, C++ or C# often argue that TypeScript is not a *true* statically typed language. This feature is optional for TS & eventually, it's transpiled into untyped JavaScript, which brings the risk of weird type conversions at runtime.

- Even though it's relatively easy for JavaScript developers to learn TypeScript due to the similarities, you still need to invest time and effort in learning types and some TypeScript-specific constructs.

- Enhanced code readability is a pro of TypeScript, but this can often result in bloated code due to a lot of type annotations and syntactic sugar. It also means .ts filetypes are often larger than their .js equivalents. Luckily, this is negated by the fact that once TypeScript is transpiled into plain JavaScript, the browser will only execute the JavaScript.

In the next post about TypeScript, I'll outline a bunch of common types that are used in TypeScript with some examples to help you with your TypeScript journey!
