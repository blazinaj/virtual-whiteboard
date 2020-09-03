export const colors = [
  '#D50000',
  '#AA00FF',
  '#2962FF',
  '#18FFFF',
  '#00C853',
  '#FFD600',
  '#FF6D00',
  '#000000'
];

export const getRandomColor = () => {
  return colors[~~(colors.length * Math.random())];
};