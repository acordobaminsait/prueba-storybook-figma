import './colors.css';

export const createColor = ({
  backgroundColor,
  text,
}) => {

  const clr = document.createElement('color');
  clr.innerText = text;

  clr.style.backgroundColor = backgroundColor;

  return clr;
};
