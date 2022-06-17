import { useState } from 'react';
import CoffeeSection from './Sections/CoffeeSection.jsx';
import SpriteSheetIntro from './Sections/SpriteSheetIntro.jsx';
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
                <section className='sprite-sheet-section'>
                    <SpriteSheetIntro />
                </section>
                {/* <CoffeeSection addCounter={addCounter} lowerCounter={lowerCounter} count={count}/> */}
            </div>
        </div>
    );

}

export default App