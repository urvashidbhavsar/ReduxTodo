// import { configureStore } from "@reduxjs/toolkit";
// import { Todoslice } from "../Features/Todo/Todoslice";
// // import reducer from "../Features/Todo/Todoslice";

// export const store = configureStore({
//   reducer: Todoslice
// })

import { configureStore } from "@reduxjs/toolkit";
import Todoslice from "../Features/Todo/Todoslice"; // Import default export

export const store = configureStore({
  reducer: {
    todos: Todoslice, // Assign the reducer correctly
  },
});
