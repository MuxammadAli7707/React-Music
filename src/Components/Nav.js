import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Nav({libraryStatus, setLibraryStatus}) {
  return (
    <nav>
      <img src="https://play-lh.googleusercontent.com/ITmuqn79beY-JsnLv7BQEWRMtWyZiXmifxIWjpEtCtgns_T8NHy-qAjglcsdbLrIu20K" alt="img" />

      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} className="music" />
      </button>
    </nav>
  );
}

export default Nav;