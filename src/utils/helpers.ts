export function ellipseText(text = '', maxLength = 9999) {
  if (text.length <= maxLength) {
    return text;
  }
  const _maxLength = maxLength - 3;
  let ellipse = false;
  let currentLength = 0;
  const result =
    text
      .split(' ')
      .filter((word) => {
        currentLength += word.length;
        if (ellipse || currentLength >= _maxLength) {
          ellipse = true;
          return false;
        } else {
          return true;
        }
      })
      .join(' ') + '...';
  return result;
}

export function ellipseAddress(address = '', start = 6, end = 4) {
  return `${address.slice(0, start)}...${address.slice(-end)}`;
}
