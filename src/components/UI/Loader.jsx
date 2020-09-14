import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  margin: 1em 0 0 0;
  text-align: center;
  width: 100%;
`;

const Loader = () => {
  return <LoaderContainer>Trwa ładowanie...</LoaderContainer>
}

export default Loader;