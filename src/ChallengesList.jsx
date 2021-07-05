import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChallengesContext } from './ChallengesContext'

export const ChallengesList = (props) => {
    const { challenges } = useContext(ChallengesContext)
    return (
        <main>
            <section>
                <aside>
                    <h2>Challenges</h2>
                    <ul>
                        {
                            Object.keys(challenges).map((id) => (
                                <li li key={id}>
                                    <Link to={`/challenge/${id}`}>{challenges[id].name}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <Link to='newchallenge'>
                        <b>Create New Challenge</b>
                    </Link>
                </aside>
            </section>
        </main >
    )
}