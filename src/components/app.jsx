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
    this.search("walt disney");
  }

  search = (query) => {
    giphy().search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data,
      });
    });
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
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
