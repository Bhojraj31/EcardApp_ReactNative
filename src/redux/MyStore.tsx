import { configureStore } from '@reduxjs/toolkit';
import MyProductReducer from './MyProductSlice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

// export interface RootState {
//   product: {
//     products: ; 
//   };
// }

export const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
  },
});
export type RoootState =  ReturnType<typeof mystore.getState>;
export const useAppSelector: TypedUseSelectorHook<RoootState> = useSelector;
export const useAppDispatch = useDispatch