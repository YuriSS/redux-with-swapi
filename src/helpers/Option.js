
import { taggedSum } from 'daggy'

const Option = taggedSum('Option', {
    None: [],
    Some: ['value']
})

export default Option

export const None = Option.None

export const Some = Option.Some

export const fromNull = x =>
    (x === null || x === undefined) ? None : Some(x)