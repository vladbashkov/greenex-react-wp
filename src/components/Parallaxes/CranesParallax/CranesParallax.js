import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useParallax from '../../hooks/useParallax/useParallax';

const CranesParallax = () => {
    const [state, setState] = useState({});

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getContentSection('Port Parallax')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
    }

    const { alt, link } = state;
    const cranesParallax = useParallax(link, alt);

    return (
        <>
            { cranesParallax }
        </>
    )
}

export default CranesParallax;