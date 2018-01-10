# jquery-to-react
This project is a simple To Do List example of how to go about incrementally refactoring your JavaScript application to the [React](https://reactjs.org/) framework and how you can use [Redux](https://redux.js.org/) to share state between React and your original JavaScript.

The default branch, 'master', is only the working jQuery To Do List. There are additional branches to track the examples, see the [branches](#branches) explanation below. The refactoring steps are available for you via tags, or you may choose to view the project diffs by viewing the open pull requests.

This example was originally presented as part of a talk on Refactoring a Legacy Application with React.

## Branches
 - **master** [default]

      This branch is the starting point - a working To Do list application using only plain JavaScript and some jQuery

 - **refactor**

      This branch includes examples of refactoring the 'add to do item' input and 'Remove Completed' items button to React (without Redux)

 - **withRedux**

      This branch includes all the same content as the refactor branch and updates the 'Remove Completed' items button to use Redux state


## Refactoring to React

The purpose of this example is to show how you can begin to add React components to your front-end. The steps used in the refactor:
1. Start trying out React right away by adding UMD scripts to your HTML file, you may also refer to the example HTML template provide [in the React Docs](https://reactjs.org/docs/try-react.html)
2. Create the new AddTodoInput component by borrowing the markup that was in the DOM as our JSX
3. Render the new component into the DOM using the ReactDOM library
4. Handle the input's onChange and onSubmit using React state in steps:
    - Add the initial state to the component
    - Handle the onChange of the input, see [React's guide on handling forms](https://reactjs.org/docs/forms.html)
    - Handle the onSubmit using React state
    - Remove the old jQuery onsubmit event listener
5. Create a new 'Remove Completed' button with a prop to toggle visibility
    - Use ReactDOM's render to update the button's prop when jQuery needs to toggle the visibility of the button

## Using Redux to Manage Shared State

The purpose of the Redux example is to show an alternative way to handle state in React that needs to be updated by an external library. In the previous section, we used ReactDOM to update the 'show' prop in the button. This shows how you can manage the button's show prop using Redux for application level state.
1. Add the Redux and [React-Redux](https://redux.js.org/docs/basics/UsageWithReact.html) UMD scripts to the HTML page
2. Define the initial state we want to track
3. Define the action object that will describe what happens when the visibility should be toggled
4. Define a pure reducer function that returns the new state when it receives the action defined in step 2
5. Use the Redux library to create and manage the store
6. Connect the RemoveCompletedButton component to the redux store using the react-redux connect component
7. Dispatch the action to toggle the visibility in our jQuery code
