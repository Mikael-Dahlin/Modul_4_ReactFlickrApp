import React from 'react';
import GalleryControls from './GalleryControls';
import GalleryImages from './GalleryImages';

class Gallery extends React.Component{
    state = {
        index: 0,
    }

    switchImage = (dir) => {
        if (!this.props.gallery) return;
        const newIndex = this.state.index + dir;
        if(newIndex === this.props.gallery.length) {this.setState({ index: 0 })
        }else if(newIndex < 0) {this.setState({ index: this.props.gallery.length - 1 })
        } else {this.setState({ index: newIndex })}
    }

    galleryContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'silver',
        width: '70%',
        height: '500px',
        position: 'absolute',
        top: '70px',
        alignSelf: 'center',
        zIndex: '200',
        padding: '20px',
        boxShadow: '26px 31px 46px 0 rgba(0,0,0,0.75)',
    }

    galleryStyle = () => {
        const style = {
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            minHeight: '700px',
            top: '0px',
            left: '0px',
            zIndex: 100,
            display: (this.props.showGallery) ? 'flex' : 'none',
        }
        return style;
    }

    onClick = (e) => {
        if(e.target.className === 'gallery') {
            this.props.toggleGallery();
        }
    }

    render() {
        return (
            <div onClick={this.onClick} className='gallery' style={this.galleryStyle()}>
                <div className='gallery-content' style={this.galleryContentStyle}>
                    <GalleryControls switchImage={this.switchImage}/>
                    <GalleryImages gallery={this.props.gallery} index={this.state.index} removeFromGallery={this.props.removeFromGallery} switchImage={this.switchImage}/>
                </div>
            </div>
        )
    }
}

export default Gallery;