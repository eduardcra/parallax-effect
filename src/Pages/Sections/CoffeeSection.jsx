import ButtonCounter from "../Components/ButtonCounter.jsx";
import CupOfCoffe from '../../Assets/Images/coffee-cup.png';
import '../../Styles/Section/CoffeeSection.scss'

const CoffeeSection = (props) =>{
    return (
        <>
            <ButtonCounter content="-" count={props.lowerCounter}/>
            <p className="app-main-content-text">Give to this developer a cup o coffee {props.count} </p>
            <img className="app-main-content-image" src={CupOfCoffe} alt="This is an image of a cup of water" />
            <ButtonCounter content="+" count={props.addCounter}/>
        </>
    );
};

export default CoffeeSection