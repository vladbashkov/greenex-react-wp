import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../../hooks/useSection/useSection';

const LogDistSection = () => {
    const [state, setState] = useState({}),
          [content, setContent] = useState([]),
          [id, setId] = useState(''),
          [title, setTitle] = useState('');

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getContentSection('logistics & distribution')
            .then(onDataLoaded)
    }

    const onDataLoaded = (value) => {
        setState(value);
        const { sectionTitle, id, content } = value;

        setTitle(sectionTitle);
        setId(id);
        setContent(content);
    }

   const aboutSection = useSection(title, content, id);

    return (
        <div className='logistic-section'>
            { aboutSection }
        </div>
    )
}

export default LogDistSection;