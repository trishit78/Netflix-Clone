// import {configureStore} from '@reduxjs/toolkit';

// import { useReducer } from '../features/userSlice';

// export default configureStore({
//     reducer:{
//         user:useReducer,
//     }
// })

// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../features/userSlice'; // Import the userReducer

// export default configureStore({
//   reducer: {
//     user: userReducer, // Use the userReducer from userSlice
//   },
// });


import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});