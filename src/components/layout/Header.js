import React from 'react';

class Header extends React.Component {
    state = {
        searchText: ''
    }

    onChange = (e) => {this.setState({ searchText: e.target.value })}

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchImages(this.state.searchText);
    }

    headerStyle = {
        display: 'flex',
        backgroundColor: '#92bfce',
        padding: '10px 0',
        justifyContent: 'space-around',
        boxShadow: '0 40px 60px 0 rgba(18, 64, 86, 0.75)'
    }

    formStyle = {
        display: 'flex',
        height: '40px',
        justifyContent: 'center'
    }

    inputStyle = {
        width: '400px',
        fontSize: '20px',
        padding: '10px',
        border: '1px solid grey', 
        borderRadius: '4px'
    }

    buttonStyle = {
        border: '2px solid #616161', 
        borderRadius: '10px',
        minWidth: '60px',
        fontSize: '14px',
        lineHeight: '24px',
        padding: '3px',
        backgroundColor: 'white',
        marginLeft: '10px'
    }

    render() {
        return (
            <header style={this.headerStyle}>
                <form onSubmit={this.onSubmit} style={this.formStyle} className='searchfield'>
                    <input 
                        type='text'
                        style={this.inputStyle} 
                        placeholder='Search flickr for photos...' 
                        className='searchfield-input'
                        value={this.state.searchText}
                        onChange={this.onChange}    
                    />
                    <input 
                        type='submit'
                        style={this.buttonStyle} 
                        value='Search'
                        className='searchfield-button'
                    />
                </form>
                <button onClick={this.props.toggleGallery} style={this.buttonStyle}>Show Gallery</button>
            </header>
        )
    }
}

export default Header;