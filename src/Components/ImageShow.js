const ImageShow = ({ imgSrc, altText }) => {
    return (
        <div className="col-lg-3 col-md-12 col-sm-12">
            <img src={imgSrc} alt={altText} />
        </div>
    )
}

export default ImageShow;