import React from 'react';

const style = {
  button: {
    backgroundColor: 'green',
    color: 'white',
    padding: 18,
    border: 'none'
  },
  searchBar: {
    padding: 16,
  },
}
export default function Search (props) {
  return(
    <button style={style.button} onClick={props.handleSearch}>Chercher un resto aux alentours</button>
  )
}
