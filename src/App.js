import React from 'react';
import './App.css';
import Acceuil from './App/Acceuil';
import RestoList from './App/RestoList';
import Loading from './App/Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadData : false,
      errorMessage: '',
      restoList: [],
    }
  }
  render() {
    if (this.state.loadData ) return <Loading/>;
    if (this.state.restoList.length > 0) return <RestoList data={this.state.restoList}/>;
    return (
      <div className="App">
        <Acceuil coords={this.props.coords} errorMessage={this.state.errorMessage} handleSearch={this.handleSearch}/>
      </div>
    );
  }
  
  handleSearch = async (e) => {
    e.preventDefault();

    this.setState({loadData : true});

    navigator.geolocation.getCurrentPosition(
      position => {
        const coords = position.coords;

        fetch(`https://xlmd94l53b.execute-api.eu-west-2.amazonaws.com/api?lat=${coords.latitude}&long=${coords.longitude}`)
        .then(data=> data.json())
        .then(data => {
          if ( data.statusCode === 500) return this.setState({errorMessage : data.errorMessage, loadData: false});
          else return this.setState({restoList: data.restaurants, loadData : false});
        })
        .catch(err => this.setState({errorMessage: err, loadData : false}))
      }, 
      (err) => this.setState({errorMessage: err})
    );
  }
}

export default App;


