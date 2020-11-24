import React from 'react';
import Header from './components/layout/Header';
import Message from './components/search/Message';
import Gallery from './components/gallery/Gallery';
import SearchResults from './components/search/SearchResults';
import './App.css';

class App extends React.Component {
  state = {
    images: [],
    api: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b54580f369a7eeebecb2004dc429d08f&format=json&nojsoncallback=1',
    message: '',
    showMessage: false,
    gallery: [],
    showGallery: false,
  }

  // Fetch images from the api with provided search text.
  fetchImages = (searchText) => {
    if(searchText === '') {
      this.setState({ images: [], message: 'You need to search for something...', showMessage: true });
    } else {
      fetch(`${this.state.api}&text=${searchText}`)
        .then(res => res.json())
        .then(data => {
          if(data.photos.photo.length === 0) {
            this.setState({ images: data.photos.photo, message: 'No search results found...', showMessage: true })
        } else {
          this.setState({ images: data.photos.photo, message: '', showMessage: false });
        }}).catch(error => {
          console.log('Oops! Something went wrong...');
          console.log(error);
      });
    }
  }

  // Adds an image to the gallery array. 
  addToGallery = (url) => {
    const newGallery = [...this.state.gallery, url];
    this.setState({ gallery: newGallery});
  }

  // Removes an image from the gallery array. 
  removeFromGallery = (url) => {
    this.setState({ gallery: this.state.gallery.filter(imgUrl => (imgUrl !== url))})
  }

  // toggles hide/show gallery.
  toggleGallery = () => {
    this.setState({ showGallery: !this.state.showGallery })
  }

  // toggles hide/show message.
  hideMessage = () => {
    this.setState({ showMessage: !this.state.showMessage })
  }

  render() {
    return (
      <div className="App">
        <Header fetchImages={this.fetchImages} toggleGallery={this.toggleGallery}/>
        <Message message={this.state.message} showMessage={this.state.showMessage} hideMessage={this.hideMessage}/>
        <SearchResults images={this.state.images} addToGallery={this.addToGallery} removeFromGallery={this.removeFromGallery}/>
        <Gallery showGallery={this.state.showGallery} toggleGallery={this.toggleGallery} gallery={this.state.gallery} removeFromGallery={this.removeFromGallery}/>
      </div>
    )
  };
}

export default App;
