import React from 'react';
import Image from './Image';

class SearchResult extends React.Component{
    getImageUrl = (farmId, serverId, id, secret) => {
        return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_m.jpg`;
    }

    searchresultsStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '0 40px',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        paddingInlineStart: '40px'
    }

    render() {
        return (
            <div className='searchresults' style={this.searchresultsStyle}>{
            this.props.images.map(image => {
                const srcUrl = this.getImageUrl(image.farm, image.server, image.id, image.secret);
                    return (
                        <Image 
                            key={image.id} 
                            srcUrl={srcUrl} 
                            title={image.title} 
                            addToGallery={this.props.addToGallery} 
                            removeFromGallery={this.props.removeFromGallery}
                        />
                    )
                })
            }
            </div>
        )
    }
}

export default SearchResult;