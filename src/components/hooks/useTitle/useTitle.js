const useTitle = (title) => {
    let Title = '';

    if(title == 'products') {
        Title = 'PRODUCTS RANGE';
    } else if(title == 'offices') {
        Title = 'OUR OFFICES'
    } else {
        Title = title.toUpperCase();
    }
    
    return (
        <h3 className="section-title">
            { 
                Title
            }
        </h3>
    )
}

export default useTitle;