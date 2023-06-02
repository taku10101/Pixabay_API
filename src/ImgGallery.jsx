import "./ImgGallery.css"
const ImgGallery = ({fetchData}) => {
return (
    <>
        <div >
            {fetchData.map ((data) =>(
                //ユニークキーの設定必須
            <div className='images' key={data.id}>
            <img src={data.largeImageURL} alt='photo_img' />
            </div>
            ))}
            </div>
    </>
)};
export default ImgGallery


