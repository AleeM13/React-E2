import { Home } from '../pages/Home';
import Todo from '../pages/Todo';
import { PokeApi } from '../pages/pokemon/PokeApi';
import { Route, Routes as MyRoutes } from 'react-router-dom';

function Routes() {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/To-do" element={<Todo />} />
      <Route path="/Pokemons" element={<PokeApi />} />
    </MyRoutes>
  );
}

export default Routes;
