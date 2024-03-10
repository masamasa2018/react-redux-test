import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';
import DisplayCounter from './components/DisplayCounter';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <DisplayCounter />
      </div>
    </Provider>
  );
}

export default App;
