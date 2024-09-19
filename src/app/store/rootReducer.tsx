"use client";
import { combineReducers } from "redux";

// Example slice reducer
interface ExampleState {
  value: boolean;
  leadOff: boolean;
}
interface actionInterface {
  type: string;
  value: boolean;
}

const initialState: ExampleState = {
  value: false,
  leadOff: true,
};

const exampleSlice = (
  state = initialState,
  action: actionInterface
): ExampleState => {
  console.log(action.value);
  switch (action.type) {
    case "leadPopup":
      return { ...initialState, value: action.value };

    case "leadOff":
      return { ...initialState, leadOff: action.value };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
