import './App.css';

// REDUX
import store from './redux/store';
import {Provider } from "react-redux"
import { get_pokemons } from './redux/actions/pokemonActions';
import { add_to_favorite } from './redux/actions/profileAction';

// COMPONENTS
import RoutesComponent from './routes/Routes';

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(get_pokemons())


function App() {
  return (
    <Provider store={store} className="App" >
      <RoutesComponent/>
    </Provider>
  );
}

export default App;
