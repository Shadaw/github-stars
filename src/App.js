import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './screens/Home';
import { User } from './screens/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
