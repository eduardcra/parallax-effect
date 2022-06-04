import { useState } from 'react';
import CoffeeSection from './Sections/CoffeeSection.jsx';
import '../Styles/Components/App.scss';

const App = () => {
    const [count, setCount] = useState(0);

    function addCounter() {
        return setCount(count + 1);
    }

    function lowerCounter() {
        return setCount(count - 1);
    }

    return (
        <div className='app-main-content'>
            <div className='app-main-content-container'>
                <CoffeeSection addCounter={addCounter} lowerCounter={lowerCounter} count={count}/>
            </div>
        </div>
    );

}

export default App