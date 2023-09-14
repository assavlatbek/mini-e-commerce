import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

function Product({ product, addToCart, toggleFavorite }) {
    const { id, name, description, price, image, discount } = product;

    return (
        <div className="product-item text-center">
            <LazyLoadImage effect="blur" src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            {discount && <p>Discount: {discount}%</p>}
            <div className="d-flex justify-content-between gap-3 align-items-center">
                <button onClick={() => addToCart(id)}>Add to Cart</button>
                <button onClick={() => toggleFavorite(id)}>Toggle Favorite</button>
            </div>
        </div>
    );
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
};

export default Product;
