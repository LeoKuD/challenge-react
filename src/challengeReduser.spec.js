import { challengeReducer, createChallenge, toggleDay } from "./challengeReducer"

describe('challengeReducer', () => {
    describe('CREATE_CHALLENGE', () => {
        it('adds new challenge to the state', () => {
            expect(challengeReducer({}, createChallenge('test'))).toEqual({

                "0": {
                    "name": "test",
                    "days": {
                        "0": "▢",
                        "1": "▢",
                        "10": "▢",
                        "11": "▢",
                        "12": "▢",
                        "13": "▢",
                        "14": "▢",
                        "15": "▢",
                        "16": "▢",
                        "17": "▢",
                        "18": "▢",
                        "19": "▢",
                        "2": "▢",
                        "20": "▢",
                        "21": "▢",
                        "22": "▢",
                        "23": "▢",
                        "24": "▢",
                        "25": "▢",
                        "26": "▢",
                        "27": "▢",
                        "28": "▢",
                        "29": "▢",
                        "3": "▢",
                        "4": "▢",
                        "5": "▢",
                        "6": "▢",
                        "7": "▢",
                        "8": "▢",
                        "9": "▢",
                    }
                }

            })
        })
    })
    describe('TOGGLE_DAY', () => {
        it('sets the day of the specified challenge to ENABLED state', () => {
            const initialState = challengeReducer({}, createChallenge('test'))
            expect(challengeReducer(initialState, toggleDay(0, 0))[0].days[0]).toEqual('▣')
        })
    })
})






