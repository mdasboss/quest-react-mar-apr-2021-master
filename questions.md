1. Which of these cannot be interpolated in JSX as child within a React element?
a) String
b) A plain JS object
c) React element
d) An array of React elements

2. If a component throws an error in a lifecycle method, which of the following will be invoked in  order to handle the error?
a) componentDidCatch() in the component
b) componentDidUpdate() in the component
c) componentDidCatch() in the parent component
d) render() in the parent component

3. What arguments does componentDidMount() receive?
a) None
b) current props and state (before a state change occurs)
c) old props and old state (after state changes)
d) new props and new state (after state changes)

4. Which of the following is a correction description of the return value of a call to useState?
a) An array with 2 items - first is the current value of state, and second is a setter function for it
b) It has 2 return values - first is the current value of state, and second is a setter function for it
c) An array with 2 items - first is a setter function for state, and second is the current value of state
d) It has 2 return values - first is a setter function for state, and second is the current value of state

5. What do we need to pass as the second argument to useEffect in order to run the effect function only after the initial render?
a) Nothing (no second argument is to be passed)
b) An empty array
c) An array of all the state and props
d) false

6. What is permitted as a return value of the effect function passed to useEffect?
a) Object
b) A React element
c) A function
d) A component

7. Choose the best description for a Higher Order Component (HOC).
a) It is a component that renders another component
b) It is a function that takes a component passed to it, and returns another component that render the component passed
c) It is a component that passes some logic encapsulated in the form of functions to its child components
d) It is a component that is rendered by another component and receives logic encapsulated in the form of functions from its parent component

8. What kind of object is returned by React.createElement( )? Select the best answer.
a) A normal JavaScript object (not of any special type)
b) A DOM node
c) A React element
d) An array

9. Which of these correctly sets an event listener onClick defined as a method in a class component?
a) <div onClick={onClick}>...</div>
b) <div onClick={onClick()}>...</div>
c) <div onClick={this.onClick}>...</div>
d) <div onClick={this.onClick()}>...</div>

10. What can we do if components A and B are siblings and they require access to the same state element? Choose the best answer.
a) Restructure the application to have A and B be related differently
b) Place the state in the parent component of A and B
c) Place the state in a third component C that is a sibling to A and B
d) Place the state in either A or B