export function isURL(str: string) {
  return str.startsWith('http://') || str.startsWith('https://') || str.startsWith('//') || str.startsWith('www.');
}

export function cutMindName(name: string, ext = '.xmind') {
  return name.replace(ext, '');
}

export function completeMindName(name: string, ext = '.xmind') {
  if (name.includes(ext)) {
    return name;
  }
  return name + ext;
}
