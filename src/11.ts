async function getRandomNumber(min: number, max: number): Promise<number> {
  const randomNumber = await crypto.getRandomValues(new Uint32Array(1))[0];
  return Math.floor(randomNumber * (max - min + 1) + min);
}
