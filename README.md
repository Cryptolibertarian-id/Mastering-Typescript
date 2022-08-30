# Mastering Typescript



# Table of Contents

- [ ] Typescript
  - [x] Why Typescript?
    - [x] Static Typing
    - [x] Type Annotation
  - [ ] New Features?
- [x] Variable Declaration
  - [x] Type Annotations
    - [x] Declare Explicit
    - [x] Declare Implicit
- [ ] Data Types
  - [ ] Primitive Types
  - [ ] Reference Types
  - [ ] Custom Type
  - [ ] Enums
    - [ ] Javascript Way
    - [ ] Typescript Way




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

Javascript is a language that has dynamic typing characteristics, to see how the dynamic typing program is working we need to run it. With dynamic typing we cant make a prediction how the code is expected, so here is the typescript came up as an alternative programming paradigm. With Static Type System on typescript we can make a prediction how the code is expected before it runs.

Static Type System help us to understand the shape and behaviors on our code.

As a superset, typescript provides the new advantage of supporting static typing characteristics. So, what are the advantages of static typing?

<img src="assets/Static-Typing.png" style="zoom:120%;" />

Every time we create a new variable we must first define the data type. Once this type has been specified, we cannot change it. This protects developers from a bunch of common bugs and security flaws in the code we write. Software development becomes more secure.

Below we create a variable name with data type number. However we pass a string literal so that the typescript code will fail when it compiles into javascript :

```typescript
let fullname: number;
fullname = "Gun Gun Febrianza"; // compile-time error
```



### Type Annotation

Typescript provide type annotation so any code editor can perform static code analysis, like autocompletion and better refactoring system to improve developer productivity. Type Annotation helping the development of static type checker tools.



---



## New Features?



---



# Variable Declaration



## Type Annotations

Typescript uses Type Annotations to explicitly assign data type to an identifier. When an identifier, variable, function, or object has been assigned a type annotation, the identifier can only use the data type that has been given.

Typescript supports Static Typing which prevents us from creating a generic variable. If we are developing an application using the Deno runtime which uses typescript then we can use the type annotation every time we create an identifier.

When we declare a variable in typescript, we must add a colon and type annotation. Below are the type annotations available in typescript:

<img src="assets/Type-Annotation.png" style="zoom:120%;" />

To declare the data type of a variable we can do it explicitly or implicitly :

<img src="assets/Declare-Type.png" style="zoom:120%;" />



---



### Declare Explicit 

Below is an example of using type annotations on primitive data types. The declaration is done explicitly by asserting the given data type :

```typescript
  const username: string = "Maudy Ayunda";
  const height: number = 167.13;
  const isCute: boolean = true;
```



---



### Declare Implicit

Below is an implicit data type declaration, the typescript compiler will auto-type the data based on the given literal :

```typescript
  const username = "Maudy Ayunda";
  const height = 167.13;
  const isCute = true;
```



---



# Data Types



## Primitive Types

As discussed earlier, JavaScript has 8 Data Types and 7 of them are called primitives or primitive values.

<img src="assets/Primitive-Types.png" style="zoom:120%;" />

The term primitive is used because it only stores a single value, data is not an object and has no methods. Previously in javascript we could create a primitive type without using a type annotation:

```javascript
// strings
var name = "Gun Gun Febrianza";

// numbers
var age = 25;
var price = 1.51;

// boolean
var isExist = true;

// null
var objectx = null;

// undefined
var flag = undefined;
var ref; // undefined too

```

s

```typescript
let productName: string;
let chainID: number;
let isPowerful: boolean;
productName = "Polygon Edge";
chainID = 137;
isPowerful = true;
console.log(productName);
```



---



## Reference Types

In javascript, reference types are represented by an object. An object is different from a primitive, an object can have different forms and values. An object is capable of storing various values (hetererogenously).

Objects can store all values that belong to primitive types. This flexible nature makes objects can be used to build a custom data type.

When we interact with web browsers using JavaScript we will be acquainted with the built-in objects, a set of objects built into the web browser that we can use to make it easier to solve problems in programming languages. Below is an example of a built-in object in javascript:

<img src="assets/Reference-Types.png" style="zoom:120%;" />

The built-in object is also available in Node.js/Deno Runtime Engine, below is an example of a simple object that has properties and methods in the javascript :

```javascript
let Gun = {
    name: "GGF",
    ucapSalam: function () {
        alert("Hello World!!");
    }
};
Gun.ucapSalam(); // Hello World!
```

Here an example on typescript :

```typescript
type humanoid = {
  name: string;
  sayHello(): string;
};

let Gun: humanoid = {
  name: "GGF",
  sayHello: function () {
    return "Hello World!!";
  },
};
console.log(Gun.sayHello()); // Hello World!
```



---



## Custom Type

With the type keyword we can create a new type or a type alias. Below we create a type alias:

```typescript
  type Balance = number;
  type Type = string;
```

Next we create a new type:

```typescript
  type Wallet = {
    name: string;
    amount: Balance;
    symbol: Type;
  };
```

In the Type Wallet above we use two type aliases for the amount and symbol properties. Next we can create a variable with the Wallet data type:

```typescript
  let bitcoinWallet: Wallet = {
    name: "Bitcoin",
    amount: 5.88800007,
    symbol: "BTC",
  };
```

Furthermore, every time we create a variable of type Wallet make sure we fill in every available property otherwise the result will be an error. If you don't want an error to occur then we have to use optional properties using a question mark.

Look at the code below:

```typescript
  type CryptoWallet = {
    name: string;
    amount: Balance;
    symbol?: Type;
  };

  let ethereumWallet: CryptoWallet = {
    name: "Ethereum",
    amount: 23.88800007,
  };
```

The symbol property uses a question mark, so if we don't fill in the symbol property when creating a variable the error will not occur.



## Enums

In programming language we can use enums to define an object that has finite properties to setup information. 

We can learn from javascript version then to typescript version.

### Javascript Way

In javascript we can create enums as object keys, for example :

```javascript
const blockchain = {
    Bitcoin: "Bitcoin",
    Ethereum: "Ethereum",
    Polkadot: "Polkadot",
    Polygon: "Polygon",
    Solana: "Solana"
}
```

To get the information we can access specific properties or all properties :

```javascript
console.log(blockchain); // Get All Properties
console.log(blockchain.Bitcoin); //Access Enum properties
```

We can also using number as values :

```javascript
const NBlockchain = {
  Bitcoin: 0,
  Ethereum: 1,
  Polkadot: 2,
  Polygon: 3,
  Solana: 4,
};
```

Here we try to compare by number using ternary operator :

```javascript
0 == NBlockchain.Bitcoin ? console.log(true) : console.log(false); //true
1 == NBlockchain.Bitcoin ? console.log(true) : console.log(false); //false
```

To prevent collision we can using symbol object :

```javascript
const Satoshi1 = Symbol("Satoshi Nakamoto");
const Satoshi2 = Symbol("Satoshi Nakamoto");
```

If we compare both it will return false on javascript, note: dont do it on typescript.

The problem with this code is not immutable, we can change the value object that we want to treat as enums :

```javascript
const SymBlockchain = {
  Bitcoin: Symbol("Bitcoin"),
  Ethereum: Symbol("Ethereum"),
  Polkadot: Symbol("Polkadot"),
  Polygon: Symbol("Polygon"),
  Solana: Symbol("Solana"),
};

console.log(SymBlockchain.Bitcoin); //Symbol(Bitcoin)
SymBlockchain.Bitcoin = Symbol("Shitcoin");
console.log(SymBlockchain.Bitcoin); //Symbol(Shitcoin)
```

To transform above code into immutable object we can use Object.freeze(), here is the example :

```javascript
const EnumBlockchain = Object.freeze({
  Bitcoin: Symbol("Bitcoin"),
  Ethereum: Symbol("Ethereum"),
  Polkadot: Symbol("Polkadot"),
  Polygon: Symbol("Polygon"),
  Solana: Symbol("Solana"),
});
```

When we try to change the value :

```javascript
EnumBlockchain.Bitcoin = Symbol("Bitconnect"); // Error
```

Its become immutable, you cant change the value.

```
"Cannot assign to 'Bitcoin' because it is a read-only property.",
```



---



### Typescript Way

#### Numeric Enums

In typescript enums are set of named constants, we can isolate a list of constants to define real world object. Here we create enum Blockchain and all the member will become numeric constant starting from zero.

```typescript
enum Blockchain {
  Bitcoin,
  Ethereum,
  Polkadot,
  Polygon,
  Solana,
}
```

If we try to see the constants on enums we will get the number position :

```javascript
console.log(Blockchain.Bitcoin); //0
```

We can also setup the order numbering system on enums :

```typescript
enum Blockchain {
  Bitcoin,
  Ethereum = 100,
  Polkadot,
  Polygon,
  Solana,
}

console.log(Blockchain.Bitcoin); //0
console.log(Blockchain.Ethereum); //100
console.log(Blockchain.Polkadot); //101
console.log(Blockchain.Polygon); //102
```



---



#### String Enums 

String enums dont have auto-increment behavior

```typescript
enum BlockchainRPC {
  Server = "SERVER-ADDRESS",
  Height = "HEIGHT",
  Latency = "LATENCY",
  Score = "SCORE",
}

console.log(BlockchainRPC);
//{ Server: "SERVER-ADDRESS", Height: "HEIGHT", Latency: "LATENCY", Score: "SCORE" }
console.log(BlockchainRPC.Latency); //Latency
```



---



# Time Programming



## Timestamp

In javascript, to get current timestamp you can execute this statement :

```javascript
Date.now(); //1661845421947
```

