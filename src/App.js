import './App.scss';
import { Sidebar } from '../src/Components/SideBar/SideBar.tsx';

const App = () => {
  return (
    <div className="App">
      <Sidebar/>
      <div className='App__body'>
      </div>
    </div>
  );
}

export default App;
