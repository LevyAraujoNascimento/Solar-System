import React from 'react';
import Title from './Title';
import PlanetCards from './PlanetCards';
import planets from '../data/planets';
import { element } from 'prop-types';

class SolarSystem extends React.Component {
  render() {
    const planetas = planets.map((element) => {
      return (
        <li key={ element.name }>
          <PlanetCards planetName={ element.name } planetImage={ element.image } />
        </li>
      );
    });
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          { planetas }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
