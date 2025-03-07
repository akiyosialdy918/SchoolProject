const generateRandomTsCode = () => {
  let code = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 25; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}
