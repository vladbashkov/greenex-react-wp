import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../../hooks/useSection/useSection';

const OilProductsSection = () => {
    const [state, setState] = useState({}),
          [content, setContent] = useState([]),
          [title, setTitle] = useState('');

          const { getData } = useAppService();

    useEffect(() => {
        onRequest();
    });

    const onRequest = () => {
        let oilProductsSection = getData('oilProductsSection');
        onDataLoaded(oilProductsSection)
    }

    const onDataLoaded = (value) => {
        setState(value);
        const { sectionTitle, content } = value;

        setTitle(sectionTitle);
        setContent(content);
    }

    const oilProductsSection = useSection(title, content);

    return (
        <>
            { oilProductsSection }
        </>
    )
}

export default OilProductsSection;