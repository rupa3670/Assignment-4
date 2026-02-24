1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
<br>
Ans: difference between getElementById and getElementsByClassName <br> and querySelector and querySelectorAll
getElementById:
<br>
->An ID is unique
<br>
->It can select only one element
<br>
->It return a single element
<br>
<br>
getElementsByClassName:
<br>
->A class can be used one multiple elements
<br>
->It can select multiple element
<br>
->It returns an HTMLCollection
<br>
<br>

querySelector:
<br>
->It uses a CSS selector(id, class,tag, etc)
<br>
->It selects only the first matching element 
<br>
->It return a single element
<br>
<br>
querySelectorAll
<br>
->It uses a CSS selector(id, class,tag, etc)
<br>
->It selects all matching elements
<br>
->It returns NodeList
<br>
<br>
<br>



2.How do you create and insert a new element into the DOM?
<br>
Ans:To create and insert a new element into the DOM, first use document.createElement() to create the 
<br>element. Then add content to  it using innerText or innerHTML. Finally select a parent element<br> and use appendChild() or append() to insert the new element into the DOM.
<br>
<br>
<br>


3.What is Event Bubbling? And how does it work?<br>
Ans:Event Bubbling in JavaScript is when a event happens on a element ,<br> it first run on that element and move up to its parent <br> then grandparent and so on up the DOM tree.
<br>
<br>
<br>


4.What is Event Delegation in JavaScript? Why is it useful?<br>
Ans:Event delegation is a technique where a single event handler on a <br> parent element handles event for its child elements. <br> Its useful because it don't need separate handles for each child ,<br> and each work for dynamically added elements.

<br>
<br>
<br>


5.What is the difference between preventDefault() and stopPropagation() methods?<br>
Ans:
preventDefault():<br>
->stops a default action of an element from happening <br>
->Example: prevent a link from navigation or a form from submitting <br>
->It dose not stop event bubbling<br>
<br>

stopPropagation():<br>
->Stop the event from bubbling up the DOM<br>
->Example: click on a button inside a div won't trigger the div click handle<br>
->It dose not stop the default action<br>

