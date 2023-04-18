import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useParallax from '../../hooks/useParallax/useParallax';

const FactoryParallax = () => {
    const [state, setState] = useState({});

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {

        getContentSection('Factory Parallax')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
    }

    const { alt, link } = state;
    const factoryParallax = useParallax(link, alt)

    return (
        <>
            { factoryParallax }
        </>
    )
}

export default FactoryParallax;