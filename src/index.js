import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';


ReactDOM.render(
  <React.Fragment>
  <h1 className="heading_style">List of top 3 netflix series</h1>
  {Sdata.map((val)=>{
    return(
      <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}/>  
    )
  })};
  </React.Fragment>,document.getElementById('root')  
); 