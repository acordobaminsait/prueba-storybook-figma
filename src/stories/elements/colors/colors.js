import './colors.css';

export const createColor = ({
  backgroundColor,
  text,
}) => {

  const clr = document.createElement('color');
  clr.innerText = text;
  clr.className = 'storybook-color';
  clr.style.backgroundColor = backgroundColor;

  return clr;
};
