# HOC (Higher Order Component)

A Higher-Order Component (HOC) in React is a pattern used to enhance a component by wrapping it in another component. It allows for code reuse, logic abstraction, and state management across multiple components. HOCs are functions that take a component and return a new component with additional props or behavior.

## Key Characteristics of HOCs:

### Function Signature

A HOC is a function that takes a component and returns a new component.

```js
const withHOC = (WrappedComponent) => {
  return  (props) => {
      // Enhance the WrappedComponent with additional props or behavior
      return <WrappedComponent {...props} />;
    }
  };
};
```

### Code Reusability

HOCs promote code reuse by extracting common logic into a single place and applying it to multiple components.

### Separation of Concerns

They help separate concerns by isolating the enhanced logic from the component's primary logic, making the code more maintainable.

### Do Not Mutate the Original Component

Instead, HOCs create a new component that wraps the original one, leaving the original component unmodified.

### Props Manipulation

HOCs can modify the props passed to the wrapped component, providing additional data or behavior.

## Example of a Simple HOC:

Suppose you want to create an HOC that adds logging functionality to a component:

```js
import React, { useEffect } from "react";

// This is the HOC function
const withLogging = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(
        `Component ${WrappedComponent.name} mounted with props`,
        props
      );

      return () => {
        console.log(`Component ${WrappedComponent.name} will unmount`);
      };
    }, [props]);

    useEffect(() => {
      console.log(
        `Component ${WrappedComponent.name} updated with props`,
        props
      );
    }, [props]);

    // Pass all props to the wrapped component
    return <WrappedComponent {...props} />;
  };
};

// Example usage of the HOC
const MyComponent = (props) => <div>{props.message}</div>;

// Wrap MyComponent with the withLogging HOC
const MyComponentWithLogging = withLogging(MyComponent);

// Now, MyComponentWithLogging will log messages when it mounts and updates
```

## Common Use Cases for HOCs:

### Authentication

Wrapping a component to check if the user is authenticated before rendering it.

### Data Fetching

Wrapping a component to fetch data from an API and pass it as props.

### Logging

Wrapping a component to log its lifecycle events or prop changes.

### Authorization

Wrapping a component to check user permissions before rendering it.

## Alternatives to HOCs:

With the introduction of hooks in React, some patterns that were traditionally implemented with HOCs can now be achieved using custom hooks, which can provide a more straightforward and composable approach. However, HOCs remain a valuable tool for certain use cases, especially when dealing with class components.
