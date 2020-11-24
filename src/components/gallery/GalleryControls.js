import React from 'react';

class GalleryControls extends React.Component{
    galleryControlsStyle = {
        alignSelf: 'center',
    }

    controlButtonStyle = {
        minWidth: '60px',
        height: '40px',
        fontSize: '24px',
        lineHeight: '24px',
        padding: '3px',
        borderRadius: '10px',
        border: '2px solid #616161',
        backgroundColor: 'white',
        margin: '0 2px'
    }

    onClick = (e) => {
        if(e.target.className==="gallery-control-left") this.props.switchImage(-1);
        if(e.target.className==="gallery-control-right") this.props.switchImage(1);
    }

    render() {
        return (
            <div onClick={this.onClick} className='gallery-controls' style={this.galleryControlsStyle}>
                <button className="gallery-control-left" style={this.controlButtonStyle}>&lt;</button>
                <button className="gallery-control-right" style={this.controlButtonStyle}>&gt;</button>
            </div>
        )
    }
}

export default GalleryControls;