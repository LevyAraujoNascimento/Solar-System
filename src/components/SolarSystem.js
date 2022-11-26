import React from 'react';
import Title from './Title';
import PlanetCards from './PlanetCards';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetas = planets.map((planeta) => {
      const nome = planeta.name;
      const imagem = planeta.image;
      return (
        <li key={ nome }>
          <PlanetCards planetName={ nome } planetImage={ imagem } />
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
