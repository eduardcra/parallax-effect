import { useState, useRef, useEffect } from 'react';
import '../../Styles/Section/SpriteSheetIntro.scss';
import SpriteWelcome from '../../Assets/Images/spritesheet.png';

const SpriteSheetIntro = () => {
    const spriteComponent = useRef(0);
    const [currentPosition, setCurrentPosition] = useState(0),
        [scrollPosition, setScrollPosition] = useState(0),
        [lastScrollTop, setLastScrollTop] = useState(0),
        [count, setCount] = useState(0),
        [transformScale, setTransformScale] = useState(0.5),
        [infiniteAnimation, setInfiniteAnimation] = useState(false);

    let steps = 15,
        frameWidth = 500,
        bgPositionTotal = steps * frameWidth;

        useEffect(() => {
            const scrollAnimation = () => {
                const documentHeight = document.body.getBoundingClientRect().height;
                let scrollPositionValue = window.scrollY || document.documentElement.scrollTop;
                if (scrollPositionValue < (getPercentage(documentHeight, 20))) {
                    if (count >= 0 && count < 15) {
                        setScrollPosition(scrollPositionValue);
                        if (scrollPosition > lastScrollTop) {
                            scrollAnimationUp();
                        } else if (scrollPosition < lastScrollTop) {
                            scrollAnimationDown();
                        }
                        setLastScrollTop(scrollPosition);
                    }
                } else {
                    setCount(0);
                    setCurrentPosition(0);
                    setInfiniteAnimation(true);
                }
            };

            window.addEventListener('scroll', scrollAnimation, {passive: true});

            return () => window.removeEventListener('scroll', scrollAnimation);
        });

    function scrollAnimationUp() {
        const countSum = count + 1,
            newPosition = currentPosition + frameWidth,
            newTransScale = transformScale + 0.09375;
        setCount(countSum);
        setCurrentPosition(newPosition);
        setTransformScale(newTransScale);
        spriteComponent.current.style.backgroundPositionX = `-${newPosition}px`;
        //spriteComponent.current.style.transform = `scale(${newTransScale})`;
    }

    function scrollAnimationDown() {
        const countSum = count - 1,
            newPosition = currentPosition - frameWidth;
        setCount(countSum);
        setCurrentPosition(newPosition);
        spriteComponent.current.style.backgroundPositionX = `-${newPosition}px`;
    }

    function getPercentage(total, percentageToKnow) {
        return ((total * percentageToKnow)/100)
    }

    return (
        <>
            <div className="parallaxContainer">
                <div className="introSpriteSheet">
                    <div ref={spriteComponent} className={`${infiniteAnimation ? 'infiniteAnimation': null} spriteImage`}></div>
                </div>
            </div>
        </>
    );
};

export default SpriteSheetIntro