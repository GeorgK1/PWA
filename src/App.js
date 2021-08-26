import Navbar from './components/NavBar';

import MainContent from './components/MainContent';
import MenuBar from './components/MenuBar';


function App() {
    return (
        <div className='App'>
            <Navbar title={'Treeningutulemused'}  ></Navbar>
              
            <MainContent/>

            <MenuBar/>
        </div>
    );
}

export default App;
