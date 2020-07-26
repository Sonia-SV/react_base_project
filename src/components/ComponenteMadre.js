import React from 'react';
import ComponenteHija from './ComponenteHija';
import '../stylesheets/ComponenteMadre.scss';

class ComponenteMadre extends React.Component {
  render() {
    return (
      <div>
        <ComponenteHija />
      </div>
    );
  }
}

export default ComponenteMadre;
