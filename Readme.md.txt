1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=>getElementById:use for specific element of a tag/button

getElementsByClassName:use for when we work on several tag with same class name.

querySelector / querySelectorAll:can use css selector.first one select the first matching and second one finds all the matchings.

2.How do you create and insert a new element into the DOM?
=>document.getElementById("card");//want to add new element inside it
const p=document.createElement("p");
p.innerText="Addition is done";

3. What is Event Bubbling and how does it work?
=>it goes upward from target tag to the highest html tag in the html
works:after the target event execute then other event will be execute when it goes upward

4. What is Event Delegation in JavaScript? Why is it useful?
=>Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching listeners to multiple child elements
explaination:if we apply event listener to the parent,the event will be changing if we add new child element.But if we use event listener to the child when we add new element it will not work.we have to use this event listener to all the child.it consumes much memory.

5. What is the difference between preventDefault() and stopPropagation()
methods?
=>preventDefault():it is used to stop relode of a form which is default behaviour of form tag.
stopPropagation():when we use it the event inside the tag can be executed but out of this tag none event will be executed