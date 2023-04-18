import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../../hooks/useSection/useSection';

import './ServicesSection.scss';

const ServiceSection = () => {
    const [state, setState] = useState({}),
          [title, setTitle] = useState(''),
          [id, setId] = useState(''),
          [content, setContent] = useState([]);

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getContentSection('Services')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
        const { sectionTitle, id, content } = value;

        setTitle(sectionTitle);
        setId(id);
        setContent(content);
    }

    const serviceSection = useSection(title, content, id);

    return (
        <div className='section-columns' key={id}>
            { serviceSection }
        </div>
    )
}

export default ServiceSection;