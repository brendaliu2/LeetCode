const isBad = (s, i) => Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32
const makeGood = (s) => {
    for (let i = 0; i < s.length - 1; ++i)
        if (isBad(s, i))
            return makeGood(s.slice(0, i) + s.slice(i + 2))
    return s
}