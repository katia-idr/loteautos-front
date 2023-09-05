
import autoImgDefault from "../../assets/images/autoImgDefault.png";


const DefPhotoAuto = ({ auto_photo }) => {
  return (
    <>
      {!auto_photo && (
        <img
          width={150}
          className="defaultPhoto"
          src={autoImgDefault}
          alt="Imagen por defecto"
        />
      )}
    </>
  );
};

export default DefPhotoAuto;

