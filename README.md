# Mastering Typescript



# Table of Contents

- [ ] Typescript
  - [x] Why Typescript?
    - [x] Static Typing
    - [x] Type Annotation
  - [ ] New Features?
    - [ ] 



----



# Typescript

Last Touched 18-07-2022.

| Parameter                              | Value                                                        | Note |
| -------------------------------------- | ------------------------------------------------------------ | ---- |
| Official Website                       | [Click Here](https://www.typescriptlang.org/)                |      |
| Announcing Typescript 4.8 Beta Version | [Click Here](https://devblogs.microsoft.com/typescript/announcing-typescript-4-8-beta/) |      |
| Release Note Typescript 4.7            | [Click Here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html) |      |
| Typescript Blog                        | [Click Here](https://devblogs.microsoft.com/typescript/)     |      |
| Typescript Compiler Options            | [Click Here](https://www.typescriptlang.org/docs/handbook/compiler-options.html) |      |

Typescript is a javascript superset developed by Microsoft. Typescript is also used in an Open Source Project that inspired Ryan Dahl called Deno, a Runtime Engine that can be used to execute Typescript.

<img src="assets/Superset-Javascript.png" style="zoom:120%;" />

If you look at the picture above, you will understand, every Javascript Code is a typescript and typescript provides new advantages for javascript so it is often called Extended Javascript.

*What if we could strengthen JavaScript with the things that are missing for large scale application development, like static typing, classes [and] modules... that’s what TypeScript is about.*

*—Anders Hejlsberg*

Typescript does not provide new functionality in the runtime, it offers a number of features that help developers to write more maintainable code than using Javascript. One of the features is implementing modern programming language paradigm like object oriented language.

A program written using typescript must first be compiled (technically it should be transpiller) into javascript so that it can be executed by a browser or javascript engine.

<img src="assets/Transpillation.png" style="zoom:120%;" />

As a javascript superset we can convert any javascript file into a typescript file by changing its extension:

<img src="assets/Javascript-to-Typescript.png" style="zoom:120%;" />

Typescript is also a superset of EcmaScript which determines the standard specification for writing javascript. ES Next represents future and final versions of EcmaScript.

<img src="assets/EcmaScript-Superset.png" style="zoom:120%;" />

As a javascript superset what advantages can typescript provide?



## Why Typescript?



### Static Typing

Javascript is a language that has dynamic typing characteristics.

As a superset, typescript provides the new advantage of supporting static typing characteristics. So, what are the advantages of static typing?

<img src="assets/Static-Typing.png" style="zoom:120%;" />

Every time we create a new variable we must first define the data type. Once this type has been specified, we cannot change it. This protects developers from a bunch of common bugs and security flaws in the code we write. Software development becomes more secure.

Below we create a variable name with data type number. However we pass a string literal so that the typescript code will fail when it compiles into javascript :

```typescript
let fullname: number;
fullname = "Gun Gun Febrianza"; // compile-time error
```



### Type Annotation

Typescript provide type annotation so any code editor can perform static code analysis, like autocompletion and better refactoring system to improve developer productivity.



---



## New Features?



---



# Variable Declaration



## Type Annotations

Typescript uses Type Annotations to explicitly assign data type to an identifier. When an identifier, variable, function, or object has been assigned a type annotation, the identifier can only use the data type that has been given.