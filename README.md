# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
### ANS :
GetElementById means when we try to locate only one Unique element  from our Html file. GetElemnstsById means when we locate multiple element by one single class name . By querySelector / querySelectorAl we can use valid css selector inside our js code .

 # 2. How do you create and insert a new element into the DOM?
 ### ANS : 
 We can easily create new element through JS DOM and insert the element to our html file . We use createElement() funtion to create element and appendChild() to insert the element to our html file.

# 3. What is Event Bubbling? And how does it work?
### ANS :
Event Bubbling means when we triggers a action to a child element , the action also flow to its parent element . It is very usefull because we can get the parent information by the action triggred of its child element. It is used in DOM Manupulation in JS.

# 4. What is Event Delegation in JavaScript? Why is it useful?
### ANS : 
Event Delegation is a system by which we can set a event listener to a parent element and we can run funtion to its child property. it is usefull because it requires less code means we do not have to add event listener to every single child, hence it improves performance of the code .

# 5. What is the difference between preventDefault() and stopPropagation() methods?
### ANS:
StopPropegation prevent unintended click or triggers on parent element . On the other hand preventDefault stop the default unintended browser behaviour.
