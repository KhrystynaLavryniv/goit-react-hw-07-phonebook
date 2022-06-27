import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
