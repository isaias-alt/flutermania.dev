---
title: "Introduction to Dart: Variables and Data Types"
description: "Some description"
pubDate: "March 20 2024"
---

In the vast universe of programming, each language has its own structure and style, marking its distinctive identity and usefulness. On this journey towards Dart introduction, we will delve into the fundamental concepts that build the foundations of this modern and powerful language.

Dart, a language developed by Google, has quickly gained popularity thanks to its versatility and efficiency. It is the primary programming language used in Flutter, the open source framework for creating applications for mobile, web, desktop, even embedded systems. Before we dive into creating interactive and dynamic applications, it is essential to understand the most basic building blocks: variables and data types.

Get ready to discover how Dart makes data management an intuitive and powerful experience. Ok, let's begin our journey into the heart of software development with Dart.

# Variables

> Variables in dart are simply containers of data.

Maybe now is a good time to introduce myself, **my name is Lucas**. That is information that as human beings we hear frequently or I could tell you that i live in Paraguay or that my ambition is to see all the movies made in history, but if you are a computer, this information is better saved in a variable.

```dart
var myName = 'Lucas';
```

*var* is a keyword that says i'm creating a variable, then i give that variable a name, in this case it's called *myName* and i set what that variable is equal to in this case it's *'Lucas'*, and everything else as the point and comma or equal sign are just syntax.

The syntax is just computer grammar, just like we would have commas, periods, colons in English or Spanish language, computers also have their own grammar and this grammar differs from programming language to another but in Dart this is how it looks when you create a new variable.

## What is really happening here?

Essentially when i type the *var* keyword, the computer builds a box, then looks at what name to give that box, in this case it's *myName*; and then looks at the right side of the equal sign to see what to put inside the box, in this case it's the word *'Lucas'* and the semicolon just says that it is the end of this line of code, so the computer can close the box.

Now imagine you have a shelf and as you create more and more variables you will build more shelves full of these boxes, and when you need one you can go, find the box, take it off the shelf and open it to see what's inside.

So, for example if i wanted to print the value of the variable i just created, this is how i would write:

```dart
print(myName);
```

I would use the print function and inside the parentheses i would tell it what i want to print and in this case it is actually not the words myName that will print, it is the value of that variable that will print, so when you run this line of code, the computer will take the box labeled myName from the shelf, open it, see what's inside, and place it on the console. What you will actually see is the Flutter output that says the word 'Lucas'.

## For better understanding...

Now for practice this, please go to <a href="https://dartpad.dev/" target="_blank"> DartPad </a>