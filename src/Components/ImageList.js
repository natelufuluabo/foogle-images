import { useRecoilValue } from "recoil";
import { searchResultsAtom } from '../Utilities/atoms';
import ImageShow from "./ImageShow";
import './styles.css';

const ImageList = () => {
    const imagesFetched = useRecoilValue(searchResultsAtom);
    const imagesRendering = imagesFetched.map((image) => (
        <ImageShow 
            imgSrc={image.urls.regular}
            altText={image.alt_description}
        />
    ))
    return (
        <div className="col-sm-12 col-md-12 col-lg-8 d-flex flex-lg-row flex-md-column flex-sm-column flex-wrap gap-3 justify-content-center imagesContainer">
           {imagesRendering}
        </div>
    )
}

export default ImageList;