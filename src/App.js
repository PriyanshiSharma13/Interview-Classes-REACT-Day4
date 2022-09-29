import './App.css';
import Callback from './Components/Callback';
import ContextAPI from './Components/ContextAPI';
import LifeCyclesA from './Components/LifeCyclesA';
import PropsDrilling from './Components/PropsDrilling';
import UseContext from './Components/UseContext';
import UseRefHook from './Components/UseRefHook';

function App() {
  return (
    <div className="App">
      <h1>Interview-Classes-REACT-Day4</h1>
      <h2>Q1. What is UseRef Hook ?(Implementation)</h2>
      <div>
        <h3>Ans- UseRef hook-</h3>
        <p>The useRef hook is the new addition in React 16.8</p>
        <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.</p>
        <p>Syntax:</p>
        <pre>const refContainer = useRef(initialValue);</pre>
        <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
        <UseRefHook />
      </div>
      <hr />
      <h2>Q2. What is Context API ?</h2>
      <div>
        <h3>Ans- Context API-</h3>
        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
        <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
        <ContextAPI />
      </div>
      <hr />
      <h2>Q3. Difference between callback and useCallback Hook ?</h2>
      <div>
        <h3>Ans- callback and useCallback Hook</h3>
        <p>The useCallback hook is used when a child component is rerendering over and over again without any need.</p>
        <h4>Purpose of useCallback</h4>
        <p>By using useCallback, you can prevent unnecessarily re-rendering components by returning the same instance of the function that is passed instead of creating a new one each time.</p>
        <p>Syntax of useCallback: </p>
        <Callback />
      </div>
      <hr />
      <h2>Q4. What is Props Drilling Concept ?What is State Uplifting ?</h2>
      <div>
        <h3>Ans- Props Drilling-</h3>
        <p>Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. Here is a diagram to demonstrate it better. Data needed to be sent from Parent to ChildC.</p>
        <p>The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last.</p>
        <p>A better alternative to this is using useContext hook. The useContext hook is based on Context API and works on the mechanism of Provider and Consumer. Provider needs to wrap components inside Provider Components in which data have to be consumed. Then in those components, using the useContext hook that data needs to be consumed.</p>
        <h3>State Lifting-</h3>
        <p>Every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.</p>
        <p>Time to use Lift up the State: If the data in “parent and children components” or in “cousin components” is Not in Sync.</p>
        <p>Example 1: If we have 2 components in our App. A more than B where, A is parent of B. keeping the same data in both Component A and B might cause inconsistency of data.</p>
        <PropsDrilling />
      </div>
      <hr />
      <h2>Q5. Difference between useEffect and useContext ?</h2>
      <div>
        <h3>Ans- useEffect and useContext-</h3>
        <h4>useEffect-</h4>
        <p>useEffect is a hook for encapsulating code that has ‘side effects,’ and is like a combination of componentDidMount, componentDidUpdate, and componentWillUnmount. Previously, functional components didn’t have access to the component life cycle, but with useEffect you can tap into it.</p>
        <h4>useContext-</h4>
        <p>useContext is a hook for getting broadly shared application data from context providers. When they added the official context API to React in 16.3, I was really excited about the capabilities but hated working with the API. The need for functional rendering made sense, but I strongly disliked using it. Now with the useContext hook, we can utilize all that power without having to ugly up our code or the React Developer Tools component tree!</p>
        <UseContext />
      </div>
      <hr />
      <h2>Q6. What are React Life cycles Explain each one with Example.</h2>
      <div>
        <h3>Ans- React Life cycles-</h3>
        <p>To put it in simple terms, you can think of the React component lifecycle as the “lifetime” of a component. Lifecycle methods are series of events that happen throughout the birth, growth, and death of a React component.</p>
        <p>In React, components go through a lifecycle of events:</p>
        <ol><li>Mounting (adding nodes to the DOM)</li>
        <li>Updating (altering existing nodes in the DOM)</li>
        <li>Unmounting (removing nodes from the DOM)</li>
        <li>Error handling (verifying that your code works and is bug-free)</li></ol>
        <p>Before rendering, the component will have gone through its mounting, updating, and unmounting phase.</p>
        <LifeCyclesA />
      </div>
    </div>
  );
}

export default App;
