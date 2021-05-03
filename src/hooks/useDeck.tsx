import { createContext, useContext, ReactNode, useEffect, useState } from 'react'
import { cardOrder, mappedHands } from 'src/data/hands'

interface DeckTypes {
  drawCards: () => any,
  deck?: DeckType
  cards?: FinalHand
}

const DeckContext = createContext<DeckTypes>(null!)

export const useDeck = () => useContext(DeckContext)

interface DeckProps {
  children: ReactNode
}

interface FinalHand {
  data: CardType[]
  hand: string
  rank: any
}

export function DeckProvider({children}:DeckProps) {
  const [deck, setDeck] = useState<DeckType>()
  const [cards, setCards] = useState<FinalHand>()

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

    const cards = data.cards.map((c:CardType) => {
        return { ...c, code: c.code.split('').shift() }
      }).sort((a:CardType, b:CardType) => {
        const c1 = cardOrder.indexOf(a.code) + 1
        const c2 = cardOrder.indexOf(b.code) + 1
        return c1 - c2
      }) as CardType[]

    const suited = cards[0].suit === cards[1].suit
    const hand = `${cards[0].code}${cards[1].code}${suited ? "s" : "o"}`

    const newCards = {
      data: [...cards],
      hand,
      rank: mappedHands.find(h => {
        return h.hand === hand
      })?.rank
    }

    setCards(newCards)
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