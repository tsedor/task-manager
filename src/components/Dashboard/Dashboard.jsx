import React from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const DashboardContainer = styled.main`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(3, 1fr);
  padding: 2em;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <ProjectCard tasks={10} completedTasks={5} id={1}>Karta</ProjectCard>
      <ProjectCard tasks={43} completedTasks={8} id={2}>Karta</ProjectCard>
      <ProjectCard tasks={27} completedTasks={25} id={3}>Karta</ProjectCard>
    </DashboardContainer>
  )
}

export default Dashboard;