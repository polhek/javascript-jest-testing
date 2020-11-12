function mod(n, p) {
  if (n < 0) n = p - (Math.abs(n) % p);

  return n % p;
}

export const ceasarCipher = (string, key) => {
  const inputText = string;

  let encryptedMessage = '';

  for (let i = 0; i < inputText.length; i++) {
    let code = inputText.charCodeAt(i);

    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    } else if (code >= 97 && code <= 122) {
      code -= 97;
      code = mod(code + key, 26);
      code += 97;
    }
    encryptedMessage += String.fromCharCode(code);
  }
  return encryptedMessage;
};
ceasarCipher('defend!!!', 1);
