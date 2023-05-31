import { RouterProvider } from 'react-router-dom'
import './App.scss';
import { router } from './navigation/nav.items';


function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
