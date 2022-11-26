import React from 'react';
import Title from './Title';
import PlanetCards from './PlanetCards';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetas = planets.map((planeta) => {
      return (
        <li key={ planeta.name }>
          <PlanetCards planetName={ planeta.name } planetImage={ planeta.image } />
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
