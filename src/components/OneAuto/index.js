import PhotoSlider from "../PhotoSlider";

const Auto = ({ auto, setOpenModal, setSelectAuto }) => {
  const { photos, idAuto } = auto;

  return (
    <>
      {photos.length > 0 && (
        <PhotoSlider
          idAuto={idAuto}
          photos={photos}
          setOpenModal={setOpenModal}
          setSelectAuto={setSelectAuto}
        />
      )}
    </>
  );
};

export default Auto;
