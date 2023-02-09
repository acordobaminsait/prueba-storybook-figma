import { createCard } from './cards';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    date: { control: 'text' },
    title: { control: 'text' },
    text: { control: 'text' },
    link: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ text, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${text}</div>`;
  return createCard({ text, ...args });
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Large.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nisi, maximus eget est ut, vestibulum varius felis.',
  backgroundColor: '#F7C92E',
  size: 'large',
  date: '04/02/2023',
  title: 'Titular de la noticia',
  link: 'Leer toda la noticia'
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nisi, maximus eget est ut, vestibulum varius felis.',
  backgroundColor: '#AC7EF4',
  size: 'medium',
  date: '04/02/2023',
  title: 'Titular de la noticia',
  link: 'Leer toda la noticia'
};

// export const Small = Template.bind({});
// Small.args = {
//   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nisi, maximus eget est ut, vestibulum varius felis. In eget nibh a felis mollis semper eget ac ligula. Nulla vehicula, dui vitae maximus finibus, metus diam cursus libero, at vehicula odio turpis sed dui.',
//   backgroundColor: 'lightgrey',
//   size: 'small',
// };

Large.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/d91rGVVI3tNAdsJk9QQoJ1/storybook-con-figma?node-id=114%3A4648&t=c9WOxucjKTlXFCTi-0",
  },
};
Medium.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/d91rGVVI3tNAdsJk9QQoJ1/storybook-con-figma?node-id=73%3A4528&t=3DzAWzrFQrQfalUs-0",
  },
};
