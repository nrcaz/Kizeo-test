import React from 'react';

const style = {
  list: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  resto : {
    marginTop : 16,
    backgroundColor: 'white',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10
  },
  img: {
    width: '30%',
    height: '100%',
    objectFit: 'contain',
    marginRight: 10
  },
  desc : {
    width: '60%'
  }
}

export default function RestoList(props) {
  const restoList = props.data;

  const restoListRender = [...restoList].map((resto, id) => {
    if ( resto.logo && resto.description){
      return(
        <figure key={id} style={style.resto}>
          <img style={style.img} src={resto.logo} alt=""/>
          <p style={style.desc}>{resto.description.slice(0,50)}</p>
        </figure>
      )
    }
  });

  return(
    <div style={style.list}>
      {restoListRender}
    </div>
  )
}