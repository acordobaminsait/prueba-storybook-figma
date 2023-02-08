import './typography.css';

export const createTypography = ({
  color,
  text,
  fontSize,
  fontWeight
}) => {

  const tpgy = document.createElement('typography');
  tpgy.innerText = text;

  tpgy.style.color = color;
  tpgy.style.fontSize = fontSize;
  tpgy.style.fontWeight = fontWeight;

  return tpgy;
};
