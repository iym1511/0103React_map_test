import back from '../img/backimg.jpg';
import Home from './Home';

const Main = () => {
    return (  
        <div>
            <img src={back} height="400" width="100%"/>
            <Home />
        </div>
    );
}
 
export default Main;