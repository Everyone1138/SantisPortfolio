import React from 'react';
import coverImage from '../../assets/images/beachSunset.jpg';

function Header(heaDer) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Santiago Campos</h1>
      <img src={coverImage} alt="sunset"></img>
      {heaDer.children}
    </header>
  );
}

export default Header;
