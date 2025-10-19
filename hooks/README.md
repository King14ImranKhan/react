useEffect 
-> Removes side effects inside component(This is mostly we from states)
->Revoves side effects update component(This mostly we get from props)
Use to fetch data
Can be used as life cycle methods
Can be used for DOM manipulation
We can say useEffect is used to prevent extra rendering of component on state.
Note - When in a component we change state whole component gets re-rendered. So, the function that we want to call only once, but it is getting called every time whenever state is changing because component is getting re-rendered. To prevent this we can use useEffect.


useRef
->It is used with input fields. Whenever we use useRef with input field, then we can contol that input field with the help of useRef. In other words, input field reference will come under useRef. Now if we have used useRef with input field then we can do whatever we want like change of style, focus etc.
->useRef is used to control input field or any html element.


useReducer
->It is better alternate of useState Hook.
->Like in useState, we can store values of object, array, variable or input field etc. In same way we can do all these things in useReducer. But we should use useReducer in some specific scenarios, not with everycase everywhere.
->useReducer is expensive object, so it takes time to compile.
->In small forms, we can use use useState and it is good. But suppose if we have long form which have 10 or 15 fields, then don't use useState Hook because there for every state we will be require to declare many states. So in that case we should go for useReducer Hook.


useContext 
-> This work same as Redux for state management.
->Difference between Redux and useContext
1. Redux is external library that we need to install it separately in react.js projects.
React Context API is inbuilt. No need of installing it separately.
2. If we apply redux then it will be applied to whole project. If we have 200 components then all will come under redux.
But in Context API, it is not necessary keep all project components under Context API. We can take any number of components as required in application.


useMemo
-> We always work with states and props, then our component unwantedly gets updated with same values, Even though it is not required. So in case of that we should use useMemo.

useEffect vs useMemo
useEffect is used as an life cycle method. It means when your component gets created()mount or anything gets updated in it or when component gets unmounted. In every case useEffect is used.
It is also used to reduce unwanted rendering. It is used reduce whole component rendering.
But useMemo is used to reduce specific part of component. 
This is the major difference between them.



