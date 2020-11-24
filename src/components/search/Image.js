import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component{
    imageBoxStyle = {
        display: 'inline-flex',
        border: '3px solid grey',
        backgroundColor: 'white',
        height: '200px',
        marginBottom: '20px'
    }

    imageStyle = {
        height: '100%'
    }

    // Add/Remove the selected image from the gallery.
    onClick = (e) => {
        if(e.target.className.includes('selected')){
            e.target.parentElement.style.border = '3px solid grey';
            e.target.style.transform = 'scale(1.0)';
            e.target.classList.remove('selected');
            this.props.removeFromGallery(e.target.src);
        } else {
            e.target.parentElement.style.border = '3px solid #92bfce';
            e.target.style.transform = 'scale(0.8)';
            e.target.classList.add('selected');
            this.props.addToGallery(e.target.src);
        }
    }

    render() {
        return (
            <div className='image-box' style={this.imageBoxStyle}>
                <img onClick={this.onClick} style={this.imageStyle} src={this.props.srcUrl} alt={this.props.title}/>
            </div>
        )
    }
}

Image.propTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    srcUrl: PropTypes.string.isRequired,
    addToGallery: PropTypes.func.isRequired,
    removeFromGallery: PropTypes.func.isRequired
}

export default Image;