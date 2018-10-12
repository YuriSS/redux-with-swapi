
const genNum = (n, min) => ({
    next: () => ++n,
    prev: () => n === min ? n : --n,
    n: () => n,
    setN: x => n = x
})

const stack = (actionMap) => {
    let gen = genNum(0, 1)
    return (state=gen.n(), action) => {
        switch (action.type) {
            case (actionMap.NEXT):
                return gen.next()
            case (actionMap.PREV):
                return gen.prev()
            case (actionMap.SELECT):
                return gen.setN(action.n)
            default:
                return state
        }
    }
}

export default stack
