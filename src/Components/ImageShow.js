import './styles.css';

const ImageShow = ({ imgSrc, altText, author }) => {
    return (
        <div 
            className="col-lg-12 col-md-12 col-sm-12 imageBox"
        >
            <img width="100%" height="100%" src={imgSrc} alt={altText} />
            <div 
                className='d-flex flex-row justify-content-between align-items-end autorDownloadContainer'
            >
                <div className='d-flex flex-column authorContainer'>
                    <p>Photo By</p>
                    <p>{author}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageShow;