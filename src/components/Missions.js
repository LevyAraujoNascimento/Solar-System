import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missoes = missions.map((missao) => {
      const n = missao.name;
      const y = missao.year;
      const c = missao.country;
      const d = missao.destination;
      return (
        <li key={ n }>
          <MissionCard name={ n } year={ y } country={ c } destination={ d } /> 
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
