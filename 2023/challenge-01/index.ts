function findFirstRepeated(gifts: number[]): number {
  let n: number = -1
  const arr: number[] = []

  for (let i: number = 0; i < gifts.length; i++) {
    if (arr.includes(gifts[i])) return n = gifts[i]
    arr.push(gifts[i])
  }

  return n
}

export default findFirstRepeated