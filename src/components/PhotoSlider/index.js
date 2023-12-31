import { useState, Fragment } from "react";

import { RightArrow, LeftArrow } from "../ArrowIcons";

const PhotoSlider = ({
  photos,
  setOpenModal,
  setSelectAuto,
  auto,
}) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const previousPhoto = (e) => {
    e.stopPropagation();
    if (currentPhoto === photos.length - 1) {
      setCurrentPhoto(0);
      return;
    }

    setCurrentPhoto(currentPhoto + 1);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (currentPhoto === 0) {
      setCurrentPhoto(photos.length - 1);
      return;
    }

    setCurrentPhoto(currentPhoto - 1);
  };

  return (
    <section
      className="photo-slider"
      onClick={() => {
        if (!setOpenModal) {
          setOpenModal(true);
          setSelectAuto(auto);
        }
      }}
    >
      {photos.map((photo, index) => {
        return (
          <Fragment key={index}>
            {index === currentPhoto && (
              <img
                className="AutoPhoto"
                src={`${process.env.REACT_APP_API_URL}/auto/${photo.name}`}
                alt={`Foto de vehículo`}
                onLoad={() => {
                  setImageLoaded(true);
                }}
              />
            )}
          </Fragment>
        );
      })}

      {photos.length > 1 && imageLoaded && (
        <>
          <button className="previous_photo" onClick={previousPhoto}>
            <LeftArrow />
          </button>
          <button className="next_photo" onClick={nextPhoto}>
            <RightArrow />
          </button>
        </>
      )}
    </section>
  );
};

export default PhotoSlider;
