import { useState, useRef, useEffect } from 'react';
import '../../Styles/Components/CardComponent.scss';

const CardComponent = (props) => {
    const componentRef = useRef(0),
        [componentInViewport, setComponentInViewport] = useState(false);

    
    useEffect(() => {
        const onViewportAnimation = () => {
            const elementTop = componentRef.current.getBoundingClientRect().top,
                viewportHeight = window.innerHeight;

            if (elementTop <= viewportHeight) {
                setComponentInViewport(true); 
            } else if (elementTop >= getPercentage(viewportHeight, 75)) {
                console.log(getPercentage(viewportHeight, 75));
                setComponentInViewport(false);
                //console.log(props.cardTitle, elementTop, '>', viewportHeight, componentInViewport); 
            }

            //console.log(props.cardTitle ,elementTop, viewportHeight - getPercentage(viewportHeight,30), componentInViewport);

        };

        window.addEventListener('scroll', onViewportAnimation);

        return () => window.removeEventListener('scroll', onViewportAnimation)
    });

    function getPercentage(total, percentageToKnow) {
        return ((total * percentageToKnow)/100)
    }

    return (
        <>
            <div ref={componentRef} className={`card-container ${componentInViewport ? 'fade-in-bottom' : 'fade-out-bottom'}`} >
                <div className="card-content-image">
                    <img src={props.cardImage.src} alt={props.cardImage.alt} className={`card-image ${props.subClassName}`} />
                </div>
                <div className="card-content">
                    <h3 className="card-title">{props.cardTitle}</h3>
                    <p className="card-description">{props.cardDescription}</p>
                </div>
            </div>
        </>
    );
};

export default CardComponent;