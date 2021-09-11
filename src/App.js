import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Features from './views/Features';
import CheckOut from './views/CheckOut';
import { useState } from 'react';

function App() {

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedItemsId, setSelectedItemsId] = useState([]);
  const [cards, setCards] = useState([])
 
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/checkout">
          <CheckOut selectedItem={selectedItem} cards={cards} setCards={setCards} />
        </Route>
        <Route path="/">
          <Features selectedItem={selectedItem} setSelectedItem={setSelectedItem} selectedItemsId={selectedItemsId} setSelectedItemsId={setSelectedItemsId} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
