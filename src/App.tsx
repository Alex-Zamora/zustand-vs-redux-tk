import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './redux/store';
import PostsListRedux from './redux/components/PostsList';
import PostsListZustand from './zustand/components/PostsList';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/redux" component={PostsListRedux} />
            <Route path="/zustand" component={PostsListZustand} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
