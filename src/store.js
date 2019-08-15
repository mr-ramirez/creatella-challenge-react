import { configureStore } from 'redux-starter-kit';
import { products } from './containers/Products/reducer';
import { app } from './containers/App/reducer';

export const store = configureStore({
  reducer: { products, app },
});
