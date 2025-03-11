function getRandomInt(max: number) {
  const randomNumber = Math.floor(Math.random() * max);
  console.log(`Generated random integer: ${randomNumber}`);
  return randomNumber;
}

getRandomInt(10);
