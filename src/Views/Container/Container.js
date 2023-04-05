import { App } from '../../App.tsx';
import { SideBarContainer } from '../../Components/SideBarContainer/SideBarContainer.tsx';
import '../../App.scss'

const Container = () => {
  return (
    <div className="App">
      <SideBarContainer/>
      <div className='App__body'>
        <App/>
      </div>
    </div>
  );
}

export default Container;
