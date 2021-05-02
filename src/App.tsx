import React from 'react';
import styled from '@emotion/styled'
import { useAuth } from './hooks/useAuth'

import { FlexCenterColumnDiv } from './components/styled'

const StyledApp = styled(FlexCenterColumnDiv)`
  background-color: #333;
  color: white;
  height: 100vh;
`

function App() {
  const { name } = useAuth()

  return (
    <StyledApp>
      <h1>{name}</h1>
    </StyledApp>
  );
}

export default App;
