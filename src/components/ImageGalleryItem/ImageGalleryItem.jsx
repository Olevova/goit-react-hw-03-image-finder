export const ImageGalleryItem = ({ item}) => {
    console.log(item.title, item.src);
    return (<li key={ item.title} className = "" >
           <img src={item.src} alt={item.title} />
            </li>)
}