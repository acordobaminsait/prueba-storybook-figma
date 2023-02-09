import './cards.css';

export const createCard = ({
  size = 'medium',
  backgroundColor,
  date,
  title,
  text,
  link,
}) => {

  const crd = document.createElement('card');
  crd.innerHTML = "<div class='storybook-card'>"+
  "<div class='storybook-card-header'></div>"+
  "<div class='storybook-card-content'>"+
    "<div class='storybook-card-text-container'><span class='storybook-card-date'>"+date+"</span>"+
    "<span class='storybook-card-title'>"+title+"</span>"+
    "<span class='storybook-card-text'>"+text+"</span></div>"+
    "<a class='storybook-card-link'>"+link+"</a>"+
  "</div>"+
  "</div>";

  crd.className = ['storybook-card', `storybook-card--${size}`].join(' ');

  crd.style.backgroundColor = backgroundColor;

  return crd;
};
