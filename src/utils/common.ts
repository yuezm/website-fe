export function isURL(str: string) {
  return str.startsWith('http://') || str.startsWith('https://') || str.startsWith('//') || str.startsWith('www.');
}
