function manufacture (gifts: string[], materials: string): string[] {
  const craftedWrds: string[] = []
  const mStr: string[] = materials.split('')

  for (const gift of gifts) {
    if (gift.split('').every((e: string) => mStr.includes(e))) {
      craftedWrds.push(gift)
    }
  }

  return craftedWrds
}

export default manufacture