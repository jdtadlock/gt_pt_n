import React from 'react';

const Header = props => (
    <header>
      {props.show_title ? 
        <h2>{props.title}</h2>
      : ''}
      <button onClick={props.increase}>Increase</button>
    </header>
);

export default Header;


// var header = document.createElement('header');
// var logo = document.createElement('h2');

// logo.innerText = 'Logo';

// header.appendChild(logo);