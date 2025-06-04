// Style:
import './productphotos.css';


export const ProductPhotos = ({ photos }) => {

    return (
        <div className="ProductPhotos">
            {photos.map((item, idx) => (
                <img 
                key={idx+item.titulo} 
                className='photo' 
                src={item.src} 
                alt={item.titulo} 
                />
            ))}
        </div>
    )
}
