// PLUGINS IMPORTS //
import React, {useState} from 'react';

// COMPONENTS IMPORTS //
import PhotoScreen from './PhotoScreen/PhotoScreen';
import ResultScreen from './ResultScreen/ResultScreen';
import SuccessScreen from './SuccessScreen/SuccessScreen';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const ScreenPhotoScreen = () => {
  const [verticalImageURI, setVerticalImageURI] = useState(
    null as string | null,
  );
  const [verticalImageBlob, setVerticalImageBlob] = useState(
    null as null | Blob,
  );
  //
  const [horizontalImageURI, setHorizontalImageURI] = useState(
    null as string | null,
  );
  const [horizontalImageBlob, setHorizontalImageBlob] = useState(
    null as null | Blob,
  );

  const [isSuccess, setIsSuccess] = useState(false as boolean);
  const [isVertical, setIsVertical] = useState(true as boolean);

  console.log(isVertical);
  console.log(horizontalImageURI);

  if (isSuccess) {
    return (
      <SuccessScreen
        setIsVertical={setIsVertical}
        setIsSuccess={setIsSuccess}
      />
    );
  } else {
    if (isVertical ? verticalImageURI : horizontalImageURI) {
      return (
        <ResultScreen
          imageURI={isVertical ? verticalImageURI : horizontalImageURI}
          imageBlob={isVertical ? verticalImageBlob : horizontalImageBlob}
          setImageURI={isVertical ? setVerticalImageURI : setHorizontalImageURI}
          setImageBlob={
            isVertical ? setVerticalImageBlob : setHorizontalImageBlob
          }
          setIsSuccess={setIsSuccess}
          isDone={verticalImageURI && horizontalImageURI ? true : false}
        />
      );
    } else {
      return (
        <PhotoScreen
          setImageURI={isVertical ? setVerticalImageURI : setHorizontalImageURI}
          setImageBlob={
            isVertical ? setVerticalImageBlob : setHorizontalImageBlob
          }
        />
      );
    }
  }
};

export default React.memo(ScreenPhotoScreen);
