import React from 'react';

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

export default Image;