import PropTypes from 'prop-types';
import Product from './Product';

function ProductList({ products, addToCart, toggleFavorite }) {
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4 col-12 col-sm-6" key={product.id}>
                    <Product
                        product={product}
                        addToCart={addToCart}
                        toggleFavorite={toggleFavorite}
                    />
                </div>
            ))}
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
};

export default ProductList;
