import PropTypes from 'prop-types';

function Favorites({ favoriteProducts, products, toggleFavorite }) {
    const favoriteItems = products.filter((product) => favoriteProducts.includes(product.id));

    return (
        <div className="favorites">
            <h2>Favorites</h2>
            {favoriteItems.map((item) => (
                <div key={item.id} className="favorite-item">
                    <p>{item.name}</p>
                    <button onClick={() => toggleFavorite(item.id)}>Remove from Favorites</button>
                </div>
            ))}
        </div>
    );
}

Favorites.propTypes = {
    favoriteProducts: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
};

export default Favorites;
