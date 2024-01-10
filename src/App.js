import { Routes, Route } from 'react-router-dom';

import Authentication from './routes/authentication/authentication.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx';
import Shop from './components/shop/shop.component.jsx';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />

      </Route>
    </Routes>
  );
}

export default App;
