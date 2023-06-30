import { useRecoilValue } from "recoil";
import { searchResultsAtom } from '../Utilities/atoms';
import ImageShow from "./ImageShow";
import './styles.css';

const ImageList = () => {
    const imagesFetched = useRecoilValue(searchResultsAtom);
    const firstCol = imagesFetched.slice(0, 5);
    const secondCol = imagesFetched.slice(5);
    const firstColRendering = firstCol.map((image) => (
        <ImageShow 
            imgSrc={image.urls.regular}
            altText={image.alt_description}
            author={image.user.name}
        />
    ));
    const secondColRendering = secondCol.map((image) => (
        <ImageShow 
            imgSrc={image.urls.regular}
            altText={image.alt_description}
            author={image.user.name}
        />
    ));
    const imagesRenderingFunc = () => {
        return (
            <>
                <div className="col-6 d-flex flex-column align-items-end gap-3">{firstColRendering}</div>
                <div className="col-6 d-flex flex-column align-items-start gap-3">{secondColRendering}</div>
            </>
        )
    }
    const imagesRendering = imagesRenderingFunc();
    return (
        <div className="col-sm-12 col-md-12 col-lg-8 d-flex flex-row gap-3 justify-content-center imagesContainer">
           {imagesRendering}
        </div>
    )
}

export default ImageList;