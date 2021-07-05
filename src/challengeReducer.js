const CREATE_CHALLENGE = 'CREATE_CHALLENGE'
const TOGGLE_DAY = 'TOGGLE_DAY'

// {
//     0: {
//         name: 'отожмись',
//             days: { 0: 'COMPLETED', 1: 'EMPTY', 2: 'EMPTY' }
//     }
//     1: {
//         name: 'приседай',
//             days: { 0: 'COMPLETED', 1: 'EMPTY', 2: 'EMPTY' }
//     },
//     ...
// }


const EMPTY = '▢'
const COMPLETED = '▣'

const days = Object.fromEntries(
    Array.from({ length: 30 }, () => EMPTY).map((e, i) => [i, e])
)

// const initialState = {
//     0: {
//         days: days,
//         name: 'eeeee'

//     }
// }

export const challengeReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CHALLENGE:
            const newChallengeId = Object.keys(state).length
            const { name } = action.payload
            return { ...state, ...{ [newChallengeId]: { name, days } } }
        case TOGGLE_DAY:
            const { challengeId, day } = action.payload
            const challenge = state[challengeId]
            const updateChallenge = { ...challenge, days: { ...challenge.days, ...{ [day]: COMPLETED } } }
            return {
                ...state, ...{ [challengeId]: updateChallenge }
            }
        default:
            return state
    }


}

export const createChallenge = (name) => ({ type: CREATE_CHALLENGE, payload: { name } })

export const toggleDay = (challengeId, day) => ({ type: TOGGLE_DAY, payload: { challengeId, day } })