import { createContext, useContext, ReactNode, useEffect, useState } from 'react'

interface DeckTypes {
  drawCards: () => any,
  deck?: DeckType
  cards?: CardType[]
}

const DeckContext = createContext<DeckTypes>(null!)

export const useDeck = () => useContext(DeckContext)

interface DeckProps {
  children: ReactNode
}

export function DeckProvider({children}:DeckProps) {
  const [deck, setDeck] = useState<DeckType>()
  const [cards, setCards] = useState<CardType[]>()

  useEffect(() => {
    async function getDeck() {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
      const data = await response.json() as DeckType
      setDeck(data)
    }

    getDeck()
  }, [])

  async function drawCards() {
    await fetch(`https://deckofcardsapi.com/api/deck/${deck?.deck_id}/shuffle/`)
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deck?.deck_id}/draw/?count=2`)
    const data = await response.json()
    setDeck(data)

    const {cards} = data

    setCards([cards[0], cards[1]])
  }

  const value = {
    deck,
    cards,
    drawCards
  }

  return <DeckContext.Provider value={value}>
    {children}
  </DeckContext.Provider>
}

export interface CardType {
  code: string,
  image: string,
  images: {
    png: string,
    svg: string
  },
  suit: string,
  value: string
}

export interface DeckType {
  success: boolean
  deck_id: string
  shuffled: boolean
  remaining: number
}