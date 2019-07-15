import React from 'react';
import './App.css';
import CommentList from './components/CommentList';
import AddComment from './containers/AddComment';

function App() {
  return (
    <div>
      <header className="App-header" />
      <AddComment />
      <CommentList />
    </div>
  );
}

export default App;
