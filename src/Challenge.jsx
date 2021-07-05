import React, { useContext } from 'react'
import { Link, useHistory, useParams, Redirect } from 'react-router-dom'
import { ChallengesContext, toggleDayForChallenge } from './ChallengesContext'

export const Challenge = (props) => {

    const chunk = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size))
    }

    const { challenges, toggleDayForChallenge } = useContext(ChallengesContext)
    const { challengeId } = useParams()

    const challenge = challenges[challengeId]

    if (!challenges || !challenges[challengeId]) {
        return <Redirect to={'/'} />
    }
    const { days } = challenge

    return (
        <main>
            <section>
                <header>
                    <h1>Challenge</h1>
                    <p>{challenge.name}</p>
                    <p>
                        <Link to={'/'}>Back to challenge list</Link>
                    </p>
                </header>
                <table>
                    <tbody>
                        {
                            chunk(Object.keys(days), 5).map((row) => (
                                <tr key={row}>
                                    {row.map((day) => (
                                        <td key={day}
                                            onClick={() => { toggleDayForChallenge(challengeId, day) }}
                                            style={{ cursor: 'pointer' }}>
                                            {days[day]}
                                        </td>
                                    ))}

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}