import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';

// Root level of app
import Root from './src/root';

// const INITIAL_STATE = {
//   isModalOpen: false
// }

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
