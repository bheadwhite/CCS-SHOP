import React from 'react'

export default function Search(props){
    let up= props.search? "searchContainer" : "searchContainer up"
    return (
    <div className={up}>
      <div className="left">
        <img
          src="https://cdn.ccs.com/skin/frontend/enterprise/mobile/images/bkg_search.1529467876.png"
          alt="search logo"
        />
      </div>
      <input type="text" placeholder="Search" />
      <div className="right">
        <img onClick={()=>{props.onClick(!props.search)}}
          src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button-close.1529467876.png"
          alt="exit"
        />
      </div>
    </div>
  );
}