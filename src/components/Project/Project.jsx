import React from 'react';
import styled from 'styled-components';

import { colors, css } from '../../cfg';

const ProjectContainer = styled.main`
  background-color: ${colors.white};
  border-radius: ${css.borderRadius};
  box-shadow: ${css.boxShadow};
  margin: ${css.padding.big};
  padding: ${css.padding.big};
`;
const ProjectTitle = styled.h2`
  font-size: 32px;
  margin: 0;
`;
const ProjectDescription = styled.p`
  color: #333;
`;

const Project = (props) => {
  const { id } = props.match.params;
  console.log(id)
  return (
    <ProjectContainer>
      <ProjectTitle>Arraio</ProjectTitle>
      <ProjectDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum, reiciendis reprehenderit inventore earum sequi repellat iste consectetur vel exercitationem eos aut. Beatae et perferendis accusantium quas consequatur doloribus laboriosam impedit voluptate inventore labore! Aut nam tempora excepturi accusamus voluptatem.</ProjectDescription>
    </ProjectContainer>
  );
}

export default Project;