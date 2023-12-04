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