// Hooks / Libs:
import { Link } from "react-router-dom";

// Style:
import './cardproduct.css';


export const CardProduct = ({ id, fotoSrc, nome }) => {
    
    return (
        <div className="CardProduct">
            <Link to={`/produto/${id}`}>
                <div className="card_photo">
                    <img src={fotoSrc} alt="" />
                </div>
                
                <div className="card_title">
                    <h3>{nome}</h3>
                </div>
            </Link>
        </div>
    )
}