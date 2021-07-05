import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ChallengesContext } from './ChallengesContext'

export const NewChallenge = (props) => {
    const { createNewChallenge } = useContext(ChallengesContext)
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const name = e.target.challenge.value
        createNewChallenge(name)
        history.push('/')
    }
    return (
        <main>
            <section>
                <form onSubmit={onSubmit}>
                    <p>
                        <Link to='/'> Back to challenges list </Link>
                    </p>
                    <label htmlFor="challenge">Challenge title:</label>
                    <input type="text" required name='challenge' />
                    <button>Create challenge</button>
                </form>
            </section>
        </main>
    )
}