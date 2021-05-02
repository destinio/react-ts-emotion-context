import React from 'react';
import styled from '@emotion/styled'

import { FlexCenterColumnDiv, FlexCenterDiv } from './components/styled'
import { useDeck } from './hooks/useDeck';

const StyledApp = styled(FlexCenterColumnDiv)`
  background-color: #333;
  color: white;
  height: 100vh;
`

const Cards = styled(FlexCenterDiv)``

function App() {
  const {drawCards, cards} = useDeck()

  return (
    <StyledApp>
      <button onClick={() => drawCards()}>draw</button>
      <Cards>
        {cards?.map(c => {
          return <img src={c.image} alt={c.code} key={c.code} />
        })}
      </Cards>
      {/* {deck && <h3>{deck.remaining}</h3>} */}
    </StyledApp>
  );
}

export default App;
