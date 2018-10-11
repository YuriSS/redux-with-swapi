
const genNum = (n, min) => ({
    next: () => ++n,
    prev: () => n === min ? n : --n,
    n: () => n
})

const stack = (actionMap) => {
    let gen = genNum(0, 1)
    return (state=gen.n(), action) => {
        switch (action.type) {
            case (actionMap.NEXT):
                return gen.next()
            case (actionMap.PREV):
                return gen.prev()
            default:
                return state
        }
    }
}

export default stack