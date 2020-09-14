import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ProjectCardContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 2px 1px rgba(0,0,0,.1);
  cursor: pointer;
  margin: 0 auto;
  max-width: 400px;
  padding: 2em;
  transition: all .2s ease-in-out;
  &:hover {
    box-shadow: 0 0 6px 4px rgba(0,0,0,.1);
    transform: scale(1.03);
  }
`;
const ProjectCardTitle = styled.h2`
  margin: 0;
`;
const ProjectCardDescription = styled.p`
  color: #333;
`;
const ProjectCardTasksNumber = styled.p`
  color: #777;
`;
const ProjectCardProgress = styled.div`
  /* background-color: #ccc; */
  border-radius: 1px;
  box-shadow: 0 0 2px 1px rgba(0,0,0,.2);
  height: 4px;
  position: relative;
  width: 100%;
  &::before {
    background-color: #FF3800;
    border-radius: 1px;
    content: '';
    height: 4px;
    position: absolute;
    width: ${props => props.progress}%;
  }
`;

const ProjectCard = ({ tasks, completedTasks, id, name, description }) => {
  const history = useHistory();
  return (
    <ProjectCardContainer onClick={() => history.push(`/project/${id}`)}>
      <ProjectCardTitle>{name}</ProjectCardTitle>
      <ProjectCardDescription>{description}</ProjectCardDescription>
      <ProjectCardTasksNumber>{completedTasks} / {tasks}</ProjectCardTasksNumber>
      <ProjectCardProgress progress={completedTasks / tasks * 100}></ProjectCardProgress>
    </ProjectCardContainer>
  )
}

export default ProjectCard;