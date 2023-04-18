import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import './FooterSection.scss';

const FooterSection = () => {
    const [state, setState] = useState({});

    const { getResource } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {

        getResource('footer')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
    }

    const { logo, alt, copyright } = state;
    return (
        <div className="footer-section">
            <Link 
                to="heroSection"  
                className="logo"
                smooth={ true }
                offset={ 0 }
                duration={ 500 }
            >
                <img src={ logo } alt={ alt } />
            </Link>
            <p className="footer-text">
                { copyright }
            </p>
        </div>
    )
}

export default FooterSection;