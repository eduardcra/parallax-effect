import CardComponent from '../Components/CardComponent.jsx';
import '../../Styles/Section/CardSection.scss';

const CardSection = () => {
    const cardComponentData = [
        {   id: 1,
            image: {
                alt: 'This image is about React JS logo',
                src: '../../Assets/Images/science.png'
            },
            cardTitle: 'React JS',
            cardDescription: 'This site was mainly build with React JS framework, I choose it because its way to handle components, and obviously for practice this technology.',
            subClassName: 'react-card'
        },
        {
            id: 2, 
            image: {
                alt: 'This image is about JavaScript logo',
                src: '../../Assets/Images/js.png'
            },
            cardTitle: 'JavaScript',
            cardDescription: 'This is mainly linked with React JS, it was used with React JS to basically handle the animations integrated in the site like the parallax animated welcome title',
            subClassName: 'js-card'
        },
        {
            id: 3,
            image: {
                alt: 'This image is about SCSS logo',
                src: '../../Assets/Images/sass.png'
            },
            cardTitle: 'SCSS',
            cardDescription: 'A helpful stylesheet language, that makes CSS more flexible and reusable. Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
            subClassName: 'scssCard'
        },
        {
            id: 4,
            image: {
                alt: 'This image is about webpack logo',
                src: '../../Assets/Images/webpack.svg'
            },
            cardTitle: 'webpack',
            cardDescription: 'This project was configurated from scratch using this tool to setup your work environment, and bundle it to make it work',
            subClassName: 'webpack-card'
        }
    ]

    return (
        <>
            <h1 className="card-grid-title">This site uses these awesome technologies:</h1>
            <div className="card-grid">
                {cardComponentData.map(element => <CardComponent key={element.id} cardImage={element.image} cardTitle={element.cardTitle} cardDescription={element.cardDescription} subClassName={element.subClassName}/>)}
            </div>
        </>
    );
}

export default CardSection