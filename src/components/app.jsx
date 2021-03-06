 import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "13Ad2mtKsGukPC"
    };
  }

  search = (query) => {
    giphy().search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data,
      });
    });
  }

  selectedGif = (id) => {
    this.setState({
      selectedGifId: id,
    })
  }

  render(){
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction = {this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} selectedGif={this.selectedGif}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
