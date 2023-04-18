import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

import './goToTopButton.scss';
import img from '../../resources/img/angle.svg';

const ToTopButton = () => {
    const [visibility, setVisibility ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const handler = () => {
        const aboutSection = document.querySelector('.about-section');

        setVisibility((visibility) => {
            if (
                !visibility &&
                (document.body.scrollTop > aboutSection.offsetTop ||
                    document.documentElement.scrollTop > aboutSection.offsetTop)
            ) {
                return true;
            }

            if (
                visibility &&
                document.body.scrollTop < 4 &&
                document.documentElement.scrollTop < 4
            ) {
                return false;
            }

            return visibility;
        })
    }

    const render = () => {
        let show = visibility ? 'show-button' : null;

        return (
            <Link
                to='heroSection'
                offset={ -50 }
                smooth={ true }
                duration={ 500 }
                className={ `totop-button-container ${show}` }
            >
                <img src={ img } alt="Arrow" className='arrow' />

            </Link>
        )
    }

    const button = render();

    return (
        <>
            { button }
        </>
    )
}

export default ToTopButton;