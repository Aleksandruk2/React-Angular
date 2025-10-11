const Picture = ({picturePath, pictureTitle}) => {
  return (
      <>
        <div className={'col-md-5 my-box-hei m-2 border-dark border p-1'}>
            <div className={'d-flex justify-content-center '}>
                <img src={picturePath} alt="..."/>
            </div>
            <div>
                <h6>
                    {pictureTitle}
                </h6>
            </div>
        </div>
      </>
  );
}
export default Picture;