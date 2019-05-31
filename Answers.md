* Sprint 9 Study Questions *

* 1) In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? *

In Redux, the store sets the application state, actions allow us to modify the state and tell the reducers how to update the state, and reducers listen for and handle the actions and replace the state accordingly. 

* Why is the store known as a 'single source of truth' in a redux application? *

The store contains application state, and when we want to make any changes to it, we never write to our store object, but instead clone it, modify the clone, and replace our original state with the new copy.  We never mutate the original object.  Because of this one-way directional pattern which ensures there are no changes to the state directly, the store is known as a 'single source of truth' and reducers serve as the gate keepers to that source of truth.


* 2) What is the difference between Application state and Component state? When would be a good time to use one over the other? *
 
 Component state is stored locally within a component and is not accessible to other components unless it's explicitly passed as props to other components. Application state lives globally, so therefore any component in the app is able to access it without needed to receive props.  A good time to use Application state over Component state can be when the same state needs to be accessed by multiple components, and if in order to share state between multiple components there would be a need to pass props through multiple components.

 
 * 3) Describe redux-thunk, what does it allow us to do? How does it change our action-creators? *

 Redux-thunk is a middleware the looks at each action that passed through an app, and if it's a function, it calls that function.  Thunk functions take 2 parameters: dispatch, which will allow new actions to be dispatched if necessary, and getState, which allows them to access the current state.