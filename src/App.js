import './App.css';
import store from './redux/store';
import {Provider } from "react-redux"
import { add_to_favorite } from './redux/actions/profileAction';
import { get_pokemons } from './redux/actions/pokemonActions';


const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(get_pokemons())

function App() {
  return (
    <Provider store={store} className="App" >
      <h1>weed</h1>
    </Provider>
  );
}

export default App;
