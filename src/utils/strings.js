export const randomId = (length) => {
  let id = ''
  for (let i = 0; i < length; i++) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const char = characters[Math.floor(Math.random() * characters.length)];
    id += char;
  }

  return id
}