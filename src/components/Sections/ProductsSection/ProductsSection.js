import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../../hooks/useSection/useSection';

import './ProductsSection.scss';

const ProductsSection = () => {
    const [state, setState] = useState({}),
          [title, setTitle] = useState(''),
          [id, setId] = useState(''),
          [content, setContent] = useState([]);

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {

        getContentSection('products')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
        const { sectionTitle, id, content } = value;

        setTitle(sectionTitle);
        setId(id);
        setContent(content);
    }

    const productsSection = useSection(title, content, id);

    return (
        <div className='section-columns section-products' key={id}>
            { productsSection }
        </div>
    )
}

export default ProductsSection;