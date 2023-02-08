import './cards.css';

export const createCard = ({
  size = 'medium',
  backgroundColor,
  text,
}) => {

  const crd = document.createElement('card');
  crd.innerHTML = "<div id='container' class='storybook-card'>"+text+"</div>";

  crd.className = ['storybook-card', `storybook-card--${size}`].join(' ');

  crd.style.backgroundColor = backgroundColor;

  return crd;
};
