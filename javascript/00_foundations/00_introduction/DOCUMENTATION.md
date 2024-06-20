# Foundations :: Introduction

<figure style="text-align: center">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="DOM Tree" width="100" />
   <figcaption>JavaScript</figcaption>
</figure>

## What is JavaScript

JavaScript (from now on **JS**) is a programming or scripting language that allows you to implement complex functions on web pages. Whenever a web page does more than display static information for the user to see, it displays timely content updates, interactive maps , 2D/3D graphics animation, scrolling of video playing machines... JS is involved. ([MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript))

The core of the client-side JavaScript language consists of some common programming features that allow you to do things like:

- Store useful values inside variables. In the example above, for example, we ask you to enter a new name and then we store that name in a variable called name.
- Operations on fragments of text (known as "strings" in programming). In the example above, we take the string "Player1:" and join it to the name variable to create the complete text label, e.g. e.g. ''Player1: Chris".
- And it executes code in response to certain events that occur on a web page. We used a click event in our example above to detect when the button is clicked and then run the code that updates the text label.

## Brief history

JS was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major web browsers.

JS has almost nothing to do with Java. When JS was being introduced, Java was becoming heavily commercialized and gaining popularity. Someone thought it was a good idea to try to build on this success.

## The standard

After its adoption outside of Netscape, a standard document was written to describe the way the JS language should work to ensure that all browsers (and any other piece of software) were actually providing the same language. This is called the **ECMAScript standard**.

> [!NOTE]  
> In practice, the terms ECMAScript and JavaScript can be used interchangeably, they are two names for the same language.

JS is ridiculously liberal in what it allows. The idea behind this design was that it would make JS programming easier for beginners. This actually makes finding problems in your programs... but this flexibility also has its advantages. It leaves room for techniques impossible in more rigid languages.

There have been several versions of JS. ECMAScript version 3 was the widely supported version during JS's rise to dominance, roughly between 2000 and 2010. During this time, an ambitious version 4 was in the works, but changing a living, widely used language proved to be difficult.

Work on version 4 was abandoned in 2008. A much less ambitious version 5, which made only a few non-controversial improvements, came out in 2009. In 2015, Version 6 came out, a major update that included some of the ideas planned for version 4. Since then, we've had new small updates every year.

The fact that JS is evolving means that browsers have to constantly keep up. If you are using an older browser, it may not support all features. Language designers make sure not to make changes that would break existing programs.

> [!NOTE]  
> This is the reason why JS always ensures **backward compatibility** when new features are added to the lenguage,
