export const isHexColor = (hex) => hex?.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)

export const lightenColor = function(color, percent) {
  var num = parseInt(color.replace('#', ''), 16),
  amt = Math.round(2.55 * percent),
  R = (num >> 16) + amt,
  B = (num >> 8 & 0x00FF) + amt,
  G = (num & 0x0000FF) + amt;

  return '#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}

export const darkenColor = function(color, percent) {
  return lightenColor(color, -percent)
}

export const randomColor = function() {
  const letters = 'ABCDEF'
  let color = '#'
  Array(3).fill().forEach(i => color += letters[Math.floor(Math.random() * 6)])
  Array(3).fill().forEach(i => color += Math.floor(Math.random() * 10))
  return color
}

