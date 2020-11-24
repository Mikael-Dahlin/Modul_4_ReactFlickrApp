import React from 'react';
import PropTypes from 'prop-types';

class GalleryImages extends React.Component{
    galleryListStyle = {
        listStyleType: 'none',
        alignSelf: 'center',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        flexGrow: '1',
    }

    galleryImageStyle = {
        border: '10px solid black',
        borderRadius: '10px',
        maxHeight: '400px',
    }

    removeImageButtonStyle = {
        display: 'flex',
        width: '30px',
        height: '30px',
        position: 'relative',
        marginLeft: '-40px',
        top: '-15px',
        right: '-15px',
        border: '5px solid black',
        borderRadius: '30px',
        fontSize: '30px',
        fontWeight: '900',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }

    // Set the selected image as visible.
    shownImage = (index) => {
        return { display: (index===this.props.index) ? 'flex' : 'none'}
    }

    // Removes the image from the gallery and switches to the prev image.
    onClick = (e) => {
        if(this.props.index !== 0) this.props.switchImage(-1);
        this.props.removeFromGallery(e.target.previousSibling.name);
    }

    render() {
        return (
            <ul className='gallery-list' style={this.galleryListStyle}>
                {this.props.gallery.map((url, index) => {
                    return (
                        <li key={index} style={this.shownImage(index)}>
                            <img 
                                style={this.galleryImageStyle} 
                                name={url}
                                src={url.replace(/(_m\.jpg$)/, '.jpg')} 
                                alt={`gallery ${index}`}
                            />
                            <div 
                                onClick={this.onClick}
                                style={this.removeImageButtonStyle} 
                                className="gallery-X"
                                >X
                            </div>
                        </li>
                    )
                })}
                {(this.props.gallery.length===0) && <div>No images in gallery! Try searching for some...</div>}
            </ul>
        )
    }
}

GalleryImages.propTypes = {
    index: PropTypes.number.isRequired, 
    gallery: PropTypes.array.isRequired, 
    switchImage: PropTypes.func.isRequired,
    removeFromGallery: PropTypes.func.isRequired
}

export default GalleryImages;