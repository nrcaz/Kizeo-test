import React from 'react';

const style= {
  loading : {
    color: 'black',
    height: '100%',
    display : 'flex',
    justifyContent : 'center',
    alignItems: 'center'
  }
}
export default function Loading() {
  return(
    <div style={style.loading}>
      <h2>Loading ...</h2>
    </div>
  )
}