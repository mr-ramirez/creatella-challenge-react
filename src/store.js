import { configureStore } from 'redux-starter-kit';
import { products } from './containers/Products/reducer';

export const store = configureStore({
  reducer: { products },
});
