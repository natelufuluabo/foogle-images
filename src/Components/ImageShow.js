import './styles.css';

const ImageShow = ({ imgSrc, altText }) => {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 imageBox">
            <img width="100%" height="auto" src={imgSrc} alt={altText} />
        </div>
    )
}

export default ImageShow;