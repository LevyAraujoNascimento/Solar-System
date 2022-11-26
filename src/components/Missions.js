import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missoes = missions.map((missao) => {
      const { name, year, country, destination } = missao;
      return (
        <li key={ name }>
          <MissionCard name={ name } year={ year } country={ country } destination={ destination } />      
        </li>  
      );    
    });
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          { missoes }    
        </ul>
      </div>
    );
  }
}

export default Missions;
