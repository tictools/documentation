# Flux pattern :: state managenent

## Step #1: Implementing Flux :: state, actions and reducers

> The Flux architecture is a design pattern for managing application state in a unidirectional data flow, which typically involves actions, dispatchers, stores, and views.

This code implements a Flux pattern for managing the state of notes in a React application. Let's break down how each component of the Flux pattern is represented in this code:

### Initial State

```javascript
export const INITIAL_STATE = {
  notes: null,
};
```

- **Store**: This defines the initial state of the store, where `notes` is initially set to `null`.

### Store Actions

```javascript
export const STORE_ACTIONS = {
  POPULATE_NOTES: "@notes/populate",
};
```

- **Actions**: Actions are payloads of information that send data from your application to your store. Here, `STORE_ACTIONS` defines a single action type, `POPULATE_NOTES`.

### Action Creators

```javascript
const populateNotes = (notes) => ({
  type: STORE_ACTIONS.POPULATE_NOTES,
  payload: {
    notes,
  },
});

export const actionCreators = {
  populateNotes,
};
```

- **Action Creators**: These are functions that create actions. The `populateNotes` function takes `notes` as an argument and returns a plain object (called action) with a type of `POPULATE_NOTES` and a payload containing the `notes`.

### Action Reducers

```javascript
const populateNotes = (state, action) => ({
  ...state,
  notes: action.payload.notes,
});

export const actionReducers = {
  populateNotes,
};
```

- **Reducers**: Reducers specify how the application's state changes in response to actions sent to the store. The `populateNotes` reducer is a pure function that updates the state by setting `notes` to `action.payload.notes`.

#### Pure functions

A pure function is a function that:

1. **Deterministic**: Always returns the same output given the same input.
2. **No Side Effects**: Does not cause any side effects, meaning it does not modify any external state or interact with outside systems like databases, network calls, or I/O operations.

Reducers in state management must be pure functions for several reasons:

- **Predictability**: Since pure functions are deterministic, the state updates are predictable and easy to debug.
- **Testability**: Pure functions are easier to test because they don't rely on or modify external state.
- **State Integrity**: Ensures that the state transitions are consistent and do not produce unexpected changes, preserving the integrity of the state.

By ensuring that reducers are pure functions, the state management logic remains clean, predictable, and maintainable.

### Store Reducers

```javascript
const STORE_REDUCERS = {
  [STORE_ACTIONS.POPULATE_NOTES]: actionReducers.populateNotes,
};
```

- **Store Reducers Mapping**: This maps action types to their corresponding reducer functions. The `STORE_REDUCERS` object maps the `POPULATE_NOTES` action to the `populateNotes` reducer.

### Store Reducer Factory

```javascript
const storeReducerFactory = (actionReducers = {}) => {
  return (state, action) => {
    const reducerHandler = actionReducers[action?.type] ?? null;
    return reducerHandler ? reducerHandler(state, action) : state;
  };
};
```

- **Reducer Factory**: The `storeReducerFactory` is a higher-order function that returns a reducer function. This function looks up the appropriate reducer for a given action type in the `actionReducers` object and calls it to get the new state. If no reducer is found for the action type, it returns the current state unchanged.

### Combine Reducers

```javascript
export const reducers = {
  storeReducer: storeReducerFactory(STORE_REDUCERS),
};
```

- **Combining Reducers**: This combines all the individual reducers into a single root reducer by using the `storeReducerFactory` and passing in the `STORE_REDUCERS` object.

### Summary

This implementation follows the Flux pattern, ensuring a unidirectional data flow and centralized state management.

- **Actions**: Represented by `STORE_ACTIONS` and created by `actionCreators`.
- **Reducers**: Functions that handle state transitions, mapped in `STORE_REDUCERS`.
- **Store**: State management using `useReducer` and `storeReducerFactory`.
- **Custom Dispatch**: Enhanced dispatch function that supports thunks for async operations.

## Step #2: Implementing Flux in React :: custom dispatch and action thunks

The `customDispatch` in the `useStoreReducer` hook is a customized dispatch function that extends the standard `dispatch` function provided by the `useReducer` hook. This customization allows for dispatching both plain action objects and functions (thunks), which enables handling asynchronous actions directly within the dispatcher. Here's a step-by-step explanation of how `customDispatch` works:

### Hook Definition

First, let's break down the `useStoreReducer` hook:

```javascript
import { useReducer } from "react";
import { INITIAL_STATE } from "@ui/shared/store/initialState";
import { reducers } from "@ui/shared/store";

export const useStoreReducer = () => {
  const [state, dispatch] = useReducer(reducers.storeReducer, INITIAL_STATE);

  const customDispatch = (action) => {
    if (typeof action === "function") {
      action(customDispatch);
    } else {
      dispatch(action);
    }
  };

  const asyncCustomDispatch = async (action) => {
    if (typeof action === "function") {
      await action(customDispatch);
    } else {
      dispatch(action);
    }
  };

  return {
    state,
    dispatch: customDispatch,
    asyncDispatch: asyncCustomDispatch,
  };
};
```

#### Custom Dispatch Explanation

1. **Initialization**:

   - The `useReducer` hook initializes the state and the standard `dispatch` function.
   - `useReducer` takes a reducer function (`reducers.storeReducer`) and an initial state (`INITIAL_STATE`).

2. **Custom Dispatch Function**:

   - `customDispatch` is defined to handle both plain action objects and functions (thunks).
   - It checks if the action is a function:
     ```javascript
     if (typeof action === "function") {
       action(customDispatch);
     } else {
       dispatch(action);
     }
     ```
   - If the action is a function, it calls that function with `customDispatch` as its argument. This allows the function to perform asynchronous operations and dispatch further actions.
   - If the action is not a function (i.e., it's a plain action object), it simply dispatches the action using the standard `dispatch` function.

3. **Asynchronous Dispatch**:
   - `asyncCustomDispatch` is similar to `customDispatch`, but it awaits the execution of the action function.
   - This allows handling asynchronous operations more gracefully by waiting for the function to complete.

### Provider Definition

Next, let's look at the `StoreContextProvider`:

```javascript
import React from "react";
import { useStoreReducer } from "../hooks";
import { actionCreators, actionThunks } from "../store/actions";

export const StoreContext = React.createContext();

export const StoreContextProvider = ({ children }) => {
  const { state, dispatch } = useStoreReducer();

  const getNotes = ({ userId }) => {
    dispatch(actionThunks.getNotes({ userId }));
  };

  const actions = { getNotes };

  return (
    <StoreContext.Provider value={{ actions, state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
```

### Context Provider Explanation

1. **Using Custom Dispatch**:

   - The `useStoreReducer` hook is used to get the state and the `dispatch` function.
   - The `dispatch` function is then used within the `getNotes` action, which is defined as a function that dispatches the `getNotes` thunk.

2. **Providing Context**:
   - The state and the `dispatch` function (renamed to `dispatch` in the context value for simplicity) are provided to the `StoreContext.Provider`.
   - This makes the state and the dispatch function available to any component that consumes the context.

### Action Thunk

Finally, let's understand the `getNotes` action thunk:

```javascript
import { getNotesUseCase } from "path-to-application-layer";
import { actionCreators } from "@ui/shared/store/actions";

export const getNotes = ({ userId }) => {
  return async (dispatch) => {
    getNotesUseCase
      .execute({ userId })
      .then((notes) => {
        dispatch(actionCreators.populateNotes(notes));
      })
      .catch((error) => console.error(error));
  };
};
```

### Action Thunk Explanation

1. **Thunk Definition**:

   - The `getNotes` function is an action thunk that returns an asynchronous function.
   - This asynchronous function takes `dispatch` as an argument.

2. **Async Operations**:
   - Inside the returned function, the `getNotesUseCase` is executed with the given `userId`.
   - When the use case execution resolves, it dispatches an action to populate the summary data using `dispatch(actionCreators.populateNotes(notes))`.
   - If an error occurs, it logs the error to the console.

### Notes

- `dispatch` allows dispatching both plain action objects and function actions (thunks), enabling handling of asynchronous logic within the dispatcher.
- `asyncDispatch` extends this functionality by allowing asynchronous handling with `await`.
- The `StoreContextProvider` uses `dispatch` to provide enhanced dispatching capabilities to the context consumers.
- The action thunk `getNotes` demonstrates how to perform asynchronous operations and dispatch further actions based on the results of these operations.

### Putting It All Together

When you use this setup in a component, it will look something like this:

```javascript
import React from "react";
import { useStoreReducer } from "./useStoreReducer";
import { actionCreators } from "./store/actions";

const MyComponent = () => {
  const { state, customDispatch } = useStoreReducer();

  React.useEffect(() => {
    // Simulate fetching notes
    const notes = fetchNotesFromServer();
    customDispatch(actionCreators.populateNotes(notes));
  }, [customDispatch]);

  return (
    <div>
      {state.notes ? (
        state.notes.map((note) => <div key={note.id}>{note.content}</div>)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyComponent;
```

In this component:

- The `useStoreReducer` hook is used to get the current state and the custom dispatch function.
- `customDispatch` is used to dispatch an action to populate notes once they are fetched from the server.
- The component renders the notes or a loading message based on the state.

---

# Flux pattern :: testing approach

Let's define a test suite for this approach using Vitest and React Testing Library (RTL)

## A tiny approach to test setup

To define this test suite using Vitest and React Testing Library, you'll need to follow these steps:

1. **Install dependencies**: Ensure you have `vitest`, `@testing-library/react`, and `@testing-library/jest-dom` installed in your project.

2. **Setup Vitest**: Create a configuration file for Vitest if you don't have one yet.

3. **Write test cases**: Create test cases to verify the behavior of your custom hook.

Here's how you can achieve this:

### Step 1: Install Dependencies

If you haven't installed the necessary dependencies, run:

```bash
npm install -D -E vitest @testing-library/react @testing-library/jest-dom
```

### Step 2: Setup Vitest

Create a `vitest.config.js` file (if not already created) to configure Vitest:

```javascript
// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
  },
});
```

Create a `setup.js` file for global test setup:

```javascript
// test/setup.js
import '@testing-library/jest-dom';
import {afterAll, afterEach, beforeAll, vi} from 'vitest';
import { server } from '@api/mws/server';

// define global mock if required
vi.mock('path-to-module', async importOriginal => {
  const originalModule = await importOriginal();

  const mockedFooModule = vi.fn();

  return {
    ...originalModule,
    fooModule: mockedFooModule,
  };
});

// define conditionally global mock depending on file name if required
vi.mock('path-to-module', async importOriginal => {
  const isMobileComponent = globalThis.__vitest_worker__.filepath.includes('mobile');

  const originalModule = await importOriginal();

  const mockReturnedValueForMobile = 'isMobile';
  const mockReturnedValueForDesktop = 'isDesktop';

  const value = isMobileComponent ? mockReturnedValueForMobile : mockReturnedValueForDesktop;

  const mockedFooModule = vi.fn();

  return {
    ...originalModule,
    fooModule: mockedFooModule.mockReturnValue(value),
  };
});

// define globalThis mocks if required
glocalThis.location = {
  href: vi.fn();
};

globalThis.location.href = 'http://localhost:3000/notes'

// define msw behaviour if required
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

> [!NOTE]  
> This is e the file where you can also define global mocks for all tests.

## useStoreReducer.test.js

Create a test file, e.g., `useStoreReducer.test.js`, and write your test cases:

```javascript
// useStoreReducer.test.js
import { renderHook, act } from "@testing-library/react-hooks";
import { useStoreReducer } from "./path/to/your/hook";
import { INITIAL_STATE } from "@ui/shared/store/initialState";
import { reducers } from "@ui/shared/store";
import { describe, it, expect } from "vitest";

// Mock the initial state and reducers if necessary
vi.mock("@ui/shared/store/initialState", () => ({
  INITIAL_STATE: { counter: 0 },
}));

vi.mock("@ui/shared/store", () => ({
  reducers: {
    storeReducer: (state, action) => {
      switch (action.type) {
        case "INCREMENT":
          return { ...state, counter: state.counter + 1 };
        default:
          return state;
      }
    },
  },
}));

describe("useStoreReducer", () => {
  it("should initialize state with INITIAL_STATE", () => {
    const { result } = renderHook(() => useStoreReducer());
    expect(result.current.state).toEqual({ counter: 0 });
  });

  it("should handle synchronous actions with customDispatch", () => {
    const { result } = renderHook(() => useStoreReducer());

    act(() => {
      result.current.dispatch({ type: "INCREMENT" });
    });

    expect(result.current.state).toEqual({ counter: 1 });
  });

  it("should handle asynchronous actions with asyncDispatch", async () => {
    const { result } = renderHook(() => useStoreReducer());

    await act(async () => {
      await result.current.asyncDispatch(async (dispatch) => {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async operation
        dispatch({ type: "INCREMENT" });
      });
    });

    expect(result.current.state).toEqual({ counter: 1 });
  });
});
```

## actionCreators.test.js

```javascript
import { STORE_ACTIONS } from "../path/to/storeActions";
import { actionCreators } from "../path/to/actionCreators";

describe("actionCreators", () => {
  describe("populateNotes", () => {
    it("should create an action to populate notes", () => {
      const notes = [
        { id: 1, content: "Note 1" },
        { id: 2, content: "Note 2" },
      ];

      const expectedAction = {
        type: STORE_ACTIONS.POPULATE_NOTES,
        payload: {
          notes,
        },
      };

      const action = actionCreators.populateNotes(notes);
      expect(action).toEqual(expectedAction);
    });

    it("should create an action with an empty notes array", () => {
      const notes = [];

      const expectedAction = {
        type: STORE_ACTIONS.POPULATE_NOTES,
        payload: {
          notes,
        },
      };

      const action = actionCreators.populateNotes(notes);
      expect(action).toEqual(expectedAction);
    });

    it("should create an action with null notes", () => {
      const notes = null;

      const expectedAction = {
        type: STORE_ACTIONS.POPULATE_NOTES,
        payload: {
          notes,
        },
      };

      const action = actionCreators.populateNotes(notes);
      expect(action).toEqual(expectedAction);
    });
  });
});
```

## actionReducers.test.js

```javascript
import { actionReducers } from "../path/to/actionReducers";
import { STORE_ACTIONS } from "../path/to/storeActions";

describe("actionReducers", () => {
  describe("populateNotes", () => {
    it("should populate notes in the state", () => {
      const initialState = {
        notes: null,
      };

      const action = {
        type: STORE_ACTIONS.POPULATE_NOTES,
        payload: {
          notes: [
            { id: 1, content: "Note 1" },
            { id: 2, content: "Note 2" },
          ],
        },
      };

      const expectedState = {
        notes: [
          { id: 1, content: "Note 1" },
          { id: 2, content: "Note 2" },
        ],
      };

      const newState = actionReducers.populateNotes(initialState, action);
      expect(newState).toEqual(expectedState);
    });

    it("should handle an empty notes array", () => {
      const initialState = {
        notes: null,
      };

      const action = {
        type: STORE_ACTIONS.POPULATE_NOTES,
        payload: {
          notes: [],
        },
      };

      const expectedState = {
        notes: [],
      };

      const newState = actionReducers.populateNotes(initialState, action);
      expect(newState).toEqual(expectedState);
    });

    it("should handle null notes", () => {
      const initialState = {
        notes: [{ id: 1, content: "Existing Note" }],
      };

      const action = {
        type: STORE_ACTIONS.POPULATE_NOTES,
        payload: {
          notes: null,
        },
      };

      const expectedState = {
        notes: null,
      };

      const newState = actionReducers.populateNotes(initialState, action);
      expect(newState).toEqual(expectedState);
    });

    it("should not mutate the initial state", () => {
      const initialState = {
        notes: [{ id: 1, content: "Existing Note" }],
      };

      const action = {
        type: STORE_ACTIONS.POPULATE_NOTES,
        payload: {
          notes: [{ id: 2, content: "New Note" }],
        },
      };

      const expectedState = {
        notes: [{ id: 2, content: "New Note" }],
      };

      const newState = actionReducers.populateNotes(initialState, action);
      expect(newState).toEqual(expectedState);
      expect(newState).not.toBe(initialState); // Ensure a new state object is returned
    });
  });
});
```

## storeReducerFactory.test.js

```javascript
import { storeReducerFactory } from "../path/to/storeReducerFactory";
import { STORE_ACTIONS } from "../path/to/storeActions";

describe("storeReducerFactory", () => {
  const mockReducer = vi.fn((state, action) => ({
    ...state,
    notes: action.payload.notes,
  }));

  const actionReducers = {
    [STORE_ACTIONS.POPULATE_NOTES]: mockReducer,
  };

  const reducer = storeReducerFactory(actionReducers);

  it("should return the new state when the action type matches a reducer", () => {
    const initialState = {
      notes: null,
    };

    const action = {
      type: STORE_ACTIONS.POPULATE_NOTES,
      payload: {
        notes: [
          { id: 1, content: "Note 1" },
          { id: 2, content: "Note 2" },
        ],
      },
    };

    const expectedState = {
      notes: [
        { id: 1, content: "Note 1" },
        { id: 2, content: "Note 2" },
      ],
    };

    const newState = reducer(initialState, action);
    expect(newState).toEqual(expectedState);
    expect(mockReducer).toHaveBeenCalledWith(initialState, action);
  });

  it("should return the initial state when the action type does not match any reducer", () => {
    const initialState = {
      notes: [{ id: 1, content: "Existing Note" }],
    };

    const action = {
      type: "UNKNOWN_ACTION",
      payload: {
        notes: [{ id: 2, content: "New Note" }],
      },
    };

    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(mockReducer).not.toHaveBeenCalled();
  });

  it("should return the initial state when action is undefined", () => {
    const initialState = {
      notes: [{ id: 1, content: "Existing Note" }],
    };

    const newState = reducer(initialState, undefined);
    expect(newState).toEqual(initialState);
    expect(mockReducer).not.toHaveBeenCalled();
  });

  it("should return the initial state when action type is undefined", () => {
    const initialState = {
      notes: [{ id: 1, content: "Existing Note" }],
    };

    const action = {
      type: undefined,
      payload: {
        notes: [{ id: 2, content: "New Note" }],
      },
    };

    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(mockReducer).not.toHaveBeenCalled();
  });
});
```

## actionThunks.test.js

```javascript
import { getNotesUseCase } from "path-to-application-layer";
import { actionCreators } from "@ui/shared/store/actions";
import { getNotes } from "../path/to/actionThunks";

vi.mock("path-to-application-layer");
vi.mock("@ui/shared/store/actions");

describe("actionThunks", () => {
  describe("getNotes", () => {
    it("should dispatch populateNotes with fetched notes on success", async () => {
      const mockDispatch = vi.fn();

      const userId = "user123";

      const notes = [
        { id: 1, content: "Note 1" },
        { id: 2, content: "Note 2" },
      ];

      getNotesUseCase.execute.mockResolvedValue(notes);

      actionCreators.populateNotes.mockReturnValue({
        type: "POPULATE_NOTES",
        payload: { notes },
      });

      await getNotes({ userId })(mockDispatch);

      expect(getNotesUseCase.execute).toHaveBeenCalledWith({ userId });
      expect(mockDispatch).toHaveBeenCalledWith(
        actionCreators.populateNotes(notes)
      );
    });

    it("should log an error on failure", async () => {
      console.error = vi.fn();

      const mockDispatch = vi.fn();

      const userId = "user123";

      const error = new Error("Failed to fetch notes");

      getNotesUseCase.execute.mockRejectedValue(error);

      await getNotes({ userId })(mockDispatch);

      expect(getNotesUseCase.execute).toHaveBeenCalledWith({ userId });
      expect(mockDispatch).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith(error);
    });
  });
});
```
