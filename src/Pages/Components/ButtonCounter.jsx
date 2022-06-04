import '../../Styles/Components/ButtonCounter.scss';

const ButtonCounter = (props) => {
    return (
        <button className="button-counter" onClick={props.count}>{props.content}</button>
    );
}

export default ButtonCounter;