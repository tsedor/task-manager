import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../UI/Loader';
import ProjectCard from './ProjectCard';
import { fetchProjects, selectProjects } from '../../reducers/projects/projectsActions';
import { css } from '../../cfg';

const DashboardContainer = styled.main`
  display: grid;
  gap: ${css.padding.big};
  grid-template-columns: repeat(3, 1fr);
  padding: ${css.padding.big};
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const request = useSelector(state => state.projects.request);
  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])
  return (
    <>
      {request ? <Loader /> : <DashboardContainer>
      {projects.map( project => (
        <ProjectCard
          name={project.name}
          description={project.description}
          tasks={project.tasks.total}
          completedTasks={project.tasks.completed}
          id={project.id}
          key={project.id}
        >Karta</ProjectCard>
      ))}
      </DashboardContainer>}
    </>
  )
}

export default Dashboard;