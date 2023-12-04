# Framer Motion
## Learning Animations on React with Framer Motion

### Setting up
- Add framer-motion to list of dependencies and install with "npm install"
- Import "motion" from 'framer-motion', add 'motion.' to any JSX tag and specify an 'animate' prop to be able to animate this tag/element. 

### Initial state
- We can set the initial state of any element by adding the 'initial' prop to the motion element and adding an object containing a rule or set of rules to define the initial state. 
- So we set the initial state then the animate state.

### Transition
- We can add transition properties to motion elements by adding a 'transition' prop.
- The transition prop lets us specify rules for how the element animates such as the delay, duration, type etc.
- The default type for framer motion is usually 'spring'. On a spring type of animation you can specify other properties such as the stiffness. 
- Other types includes the 'tween' type which is more like a linear type of transition timing function, 'just' type, 'inertia' type etc. 
- Find out more about the types on [linktodocs]

### Animate on Hover
- To animate an element while hovering, we don't use the 'animate' prop, we use the 'whileHover' prop on the motion element.

### Variants
- variants allows us to extract the 'initial' 'animate' and 'transition' properties to an outside object which we can then reference. 
- Makes for a cleaner code
- variants gives us the ability to propagte animation attributes down through the DOM, that means it can make deductions from the parent element on what to pass down to the child elements.
- We implemet this by creating a variable whose data type would be an object. In this object we define the rules which we want our initial state, animate and transition state to be. Then we reference this variable as the value of the 'variant' prop which is defined on a motion element. We also reference the initial and animate states as the values for the initial and animate props on a motion element. 