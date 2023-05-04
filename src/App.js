import { Provider } from 'react-redux';
import configureStore from './store';
import OrderBook from './components/orderbook';
import Ticker from './components/ticker';

import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Ticker />
      <OrderBook />
    </Provider>
  );
}

export default App;
