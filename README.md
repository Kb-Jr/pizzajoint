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
- The default type for framer motion is usually 'spring'. On a spring type of animation you can specify other properties such as the stiffness, damping, mass etc.
- Other types includes the 'tween' type which is more like a linear type of transition timing function, 'just' type, 'inertia' type etc.
- Find out more about the types on [linktodocs]

### Animate on Hover

- To animate an element while hovering, we don't use the 'animate' prop, we use the 'whileHover' prop on the motion element.

### Variants

- variants allows us to extract the 'initial' 'animate' and 'transition' properties to an outside object which we can then reference.
- Makes for a cleaner code
- variants gives us the ability to propagte animation attributes down through the DOM, that means it can make deductions from the parent element on what to pass down to the child elements.
- We implemet this by creating a variable whose data type would be an object. In this object we define the rules which we want our initial state, animate and transition state to be. Then we reference this variable as the value of the 'variant' prop which is defined on a motion element. We also reference the initial and animate states as the values for the initial and animate props on a motion element.
- Transition orchestration property is defined on the parent animation variant in relation to the child animation. An example of such property is the 'when', which takes in values such as the 'beforeChildren', 'afterChildren' etc. The beforeChildren for example says animate this parent and then when it is done animate the children.
- Another transition orchestration property is the 'staggerChildren'which staggers the animation of children elements by the time specified

### Keyframes

- Sometimes we want an animation to transition through several differents animations. We achieve this by using keyframes.
- In framer motion we implement keyframes by specifying the value of the property we want to animate to be an array. Items in the array will be comma separated, with each item representing an animation state.

### Transition Property - YoYo

- We may want our animation to repeat itself, we can employ the transition property called 'yoyo'. A numeric value can be passed to this property and it specifies the number of times we want the animation to repeat itself. Specifying the keyword 'infinity' on the yoyo transition property will make the animation repeat itself forever.

### AnimatePresence

- This function comes from framer motion
- We can use it to animate elements off pages.
- We wrap the block of code we want to conditionally render in the AnimatePresnece card, then turn the element we are animating off to a motion element. Afterwards we can specify an 'exit' property on the motion element, this defines how the element leaves the page.

### Animating Routes

- When navigating from one route to another, the route that is left just sort of pops off the screen. The exit of this route can be animated to have a smoother transition into another route.
- This can be achieved by wrapping the route definitions with an "AnimatePresence" tag from framer motion. the Router or Switch which wraps the route can then be passed a location prop. The location is pulled from the useLocation hook which is imported from react router. This location prop enables the router to be aware of the current location.
- Next the exit animation can then be defined and assigned to a the motion element which wraps the the entire page.
- It can be observed that when the pages are being animated out, the animation may not be complete before the next page kicks into view. To address this, we can add "exitBeforeEnter" as a prop on AnimatePresence. This ensures that the entire route is completely out before the next one comes into view.

### Modal
- onExitComplete


### Loader
- 

### UseCycle

## Resources
### Framer Motion Documentation