import { Component } from "react";


export class ImageGalleryItem extends Component {
    bigPicture =(e)=> {
        this.props.onLargePicture(e.currentTarget.dataset.large);
    }

    render() {
        const { id, webformatURL,largeImageURL } = this.props.item
        return <li key={id} >
            <img src={webformatURL} alt={ 1} data-large={largeImageURL} onClick={this.bigPicture} />
        </li>
    }
}