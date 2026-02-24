1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: difference between getElementById and getElementsByClassName and querySelector and querySelectorAll
getElementById:
->An ID is unique
->It can select only one element
->It return a single element

getElementsByClassName:
->A class can be used one multiple elements
->It can select multiple element
->It returns an HTMLCollection

querySelector:
->It uses a CSS selector(id, class,tag, etc)
->It selects only the first matching element 
->It return a single element

querySelectorAll
->It uses a CSS selector(id, class,tag, etc)
->It selects all matching elements
->It returns NodeList



2.How do you create and insert a new element into the DOM?
Ans:To create and insert a new element into the DOM, first use document.createElement() to create the element. Then add content to  it using innerText or innerHTML. Finally select a parent element and use appendChild() or append() to insert the new element into the DOM.



3.What is Event Bubbling? And how does it work?
Ans:Event Bubbling in JavaScript is when a event happens on a element , it first run on that element and move up to its parent  then grandparent and so on up the DOM tree.



4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation is a technique where a single event handler on a parent element handles event for its child elements. Its useful because it don't need separate handles for each child , and each work for dynamically added elements.




5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault():
->stops a default action of an element from happening 
->Example: prevent a link from navigation or a form from submitting 
->It dose not stop event bubbling

stopPropagation():
->Stop the event from bubbling up the DOM
->Example: click on a button inside a div won't trigger the div click handle
->It dose not stop the default action

