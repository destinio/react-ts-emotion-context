import React, { useEffect } from 'react';
import styled from '@emotion/styled'

import { mappedHands as hands } from './data/hands'

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

  useEffect(() => {
    console.log(cards)
  }, [cards])

  return (
    <StyledApp>
      <button onClick={() => drawCards()}>draw</button>
      <h3>{cards?.rank}</h3>
      <Cards>
        {cards && cards.data.map(c => {
          return (
            <FlexCenterColumnDiv key={`${c.code}${Math.random()}`}>
              <img src={c.image} alt={c.code} />
            </FlexCenterColumnDiv>
          )
        })}
      </Cards>
      <h3>{cards?.hand}</h3>
      {/* {deck && <h3>{deck.remaining}</h3>} */}
    </StyledApp>
  );
}

export default App;
