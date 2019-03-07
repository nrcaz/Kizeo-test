import React from 'react';
import LocationBar from './Acceuil/Search';

const style = {
  title: {
    color: 'white',
    fontSize: '300%',
    marginBottom : '3em'
  },
  acceuil: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor : 'rgba(0, 0, 0, 0.6)'
  },
  error: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: '150%'
  }
}
export default function Acceuil(props) {
  
    return (
      <div style={style.acceuil}>
        <h1 style={style.title}>Allo Vegan</h1>
        <p style={style.error}>{props.errorMessage}</p>
        <LocationBar handleSearch={props.handleSearch}/>
      </div>
    )
  
}