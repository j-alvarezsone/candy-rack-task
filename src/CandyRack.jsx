import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { CandyRackScreen } from './components/candy-rack/CandyRackScreen';
export const CandyRack = () => {
  return (
    <Provider store={store}>
      <CandyRackScreen />
    </Provider>
  );
};
