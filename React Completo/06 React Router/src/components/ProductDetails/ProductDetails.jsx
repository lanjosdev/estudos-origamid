// Style:
import './ProductDetails.css';

export const ProductDetails = ({ title, price, description }) => {

    return (
        <div className="ProductDetails">
            <h2 className="title">
                {title}
            </h2>

            <p className="price">
                R$ {price}
            </p>

            <p className="description">
                {description}
            </p>
        </div>
    )
}