import { useRecoilValue } from "recoil";
import { searchResultsAtom } from '../Utilities/atoms';
import ImageShow from "./ImageShow";

const ImageList = () => {
    const imagesFetched = useRecoilValue(searchResultsAtom);
    const imagesRendering = imagesFetched.map((image) => (
        <ImageShow 
            imgSrc={image.urls.regular}
            altText={image.alt_description}
        />
    ))
    return (
        <div className="grid gap-3">
           {imagesRendering}
        </div>
    )
}

export default ImageList;