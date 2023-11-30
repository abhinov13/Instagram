import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entry from './Presentation/View/Entry/Entry';
import { NotFoundComponent } from './Presentation/View/Not Found/NotFound';
import Home from './Presentation/View/Home/Home';
import User from './Presentation/View/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/NotFound' Component={NotFoundComponent} />
          <Route path='/Home' Component={Home}/>
          <Route path='/User/:userid' Component={User}/>
          <Route path='/*' Component={Entry} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
