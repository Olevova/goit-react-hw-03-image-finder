import { Component } from "react";
import PropTypes from "prop-types";


export class ImageGalleryItem extends Component {
    bigPicture =(e)=> {
        this.props.onLargePicture(e.currentTarget.dataset.large);
    }

    render() {
        const {id, webformatURL,largeImageURL } = this.props.item;
        return <li key={id} >
            <img src={webformatURL} alt={1} data-large={largeImageURL} onClick={this.bigPicture} />
        </li>
    }
}

ImageGalleryItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })
}