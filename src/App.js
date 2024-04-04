import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import SearchResults from './components/SearchResults';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route index element={ <PostList url="home" /> }/>
            <Route exact path="/" element={ <PostList url="home" /> } />
            <Route path="/popular" element={ <PostList url="popular" /> } />
            <Route path="/post/:subreddit/:id" element={ <PostDetails /> } />
            <Route path="/search" element={ <SearchResults /> } />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
