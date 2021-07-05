import React, { useEffect, useReducer } from 'react'
import { challengeReducer, createChallenge, toggleDay } from './challengeReducer'

export const ChallengesContext = React.createContext()

export const ChallengesProvider = ({ children }) => {
    const [challenges, dispatch] = useReducer(challengeReducer, JSON.parse(localStorage.getItem('challenges') || '{}'))

    useEffect(() => {
        localStorage.setItem('challenges', JSON.stringify(challenges))
    }, [challenges])

    const createNewChallenge = (name) => {
        dispatch(createChallenge(name)
        )
    }

    const toggleDayForChallenge = (challengeId, day) => {
        dispatch(toggleDay(challengeId, day))
    }
    return (
        <ChallengesContext.Provider value={{ createNewChallenge, toggleDayForChallenge, challenges }}>
            {children}
        </ChallengesContext.Provider>
    )
}