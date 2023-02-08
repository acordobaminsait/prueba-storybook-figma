import { createCard } from './cards';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
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
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nisi, maximus eget est ut, vestibulum varius felis. In eget nibh a felis mollis semper eget ac ligula. Nulla vehicula, dui vitae maximus finibus, metus diam cursus libero, at vehicula odio turpis sed dui. Phasellus eu laoreet risus. Cras nec nisi finibus, auctor lacus quis, mattis neque. In sapien velit, lacinia vel egestas in, gravida eget est. Quisque vitae diam a diam malesuada porta in id libero. Duis lacinia magna at dui commodo ultricies. Aliquam lobortis sit amet mi vitae rhoncus. Nam nulla magna, mollis at ligula aliquet, mattis volutpat turpis. Vivamus placerat scelerisque dolor, a feugiat ligula faucibus id. Maecenas in tristique dolor. Nullam iaculis tellus eu enim aliquet bibendum et sit amet elit. Phasellus at libero in turpis placerat venenatis. Ut convallis tempor commodo. Nulla erat velit, convallis quis feugiat et, iaculis vitae risus. Vestibulum ligula tortor, dapibus vitae diam eu, fermentum lobortis neque. Suspendisse egestas nulla a nisl viverra consectetur. Donec faucibus dapibus dui. Donec egestas tincidunt felis eget bibendum. Ut enim libero, mattis at pretium eu, interdum a sem. Duis nec accumsan massa.',
  backgroundColor: 'grey',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nisi, maximus eget est ut, vestibulum varius felis. In eget nibh a felis mollis semper eget ac ligula. Nulla vehicula, dui vitae maximus finibus, metus diam cursus libero, at vehicula odio turpis sed dui. Phasellus eu laoreet risus. Cras nec nisi finibus, auctor lacus quis, mattis neque. In sapien velit, lacinia vel egestas in, gravida eget est. Quisque vitae diam a diam malesuada porta in id libero. Duis lacinia magna at dui commodo ultricies. Aliquam lobortis sit amet mi vitae rhoncus. Nam nulla magna, mollis at ligula aliquet, mattis volutpat turpis. Vivamus placerat scelerisque dolor, a feugiat ligula faucibus id. Maecenas in tristique dolor. Nullam iaculis tellus eu enim aliquet bibendum et sit amet elit. Phasellus at libero in turpis placerat venenatis. Ut convallis tempor commodo. Nulla erat velit, convallis quis feugiat et, iaculis vitae risus. Vestibulum ligula tortor, dapibus vitae diam eu, fermentum lobortis neque. Suspendisse egestas nulla a nisl viverra consectetur. Donec faucibus dapibus dui. Donec egestas tincidunt felis eget bibendum. Ut enim libero, mattis at pretium eu, interdum a sem. Duis nec accumsan massa.',
  backgroundColor: 'grey',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nisi, maximus eget est ut, vestibulum varius felis. In eget nibh a felis mollis semper eget ac ligula. Nulla vehicula, dui vitae maximus finibus, metus diam cursus libero, at vehicula odio turpis sed dui. Phasellus eu laoreet risus. Cras nec nisi finibus, auctor lacus quis, mattis neque. In sapien velit, lacinia vel egestas in, gravida eget est. Quisque vitae diam a diam malesuada porta in id libero. Duis lacinia magna at dui commodo ultricies. Aliquam lobortis sit amet mi vitae rhoncus. Nam nulla magna, mollis at ligula aliquet, mattis volutpat turpis. Vivamus placerat scelerisque dolor, a feugiat ligula faucibus id. Maecenas in tristique dolor. Nullam iaculis tellus eu enim aliquet bibendum et sit amet elit. Phasellus at libero in turpis placerat venenatis. Ut convallis tempor commodo. Nulla erat velit, convallis quis feugiat et, iaculis vitae risus. Vestibulum ligula tortor, dapibus vitae diam eu, fermentum lobortis neque. Suspendisse egestas nulla a nisl viverra consectetur. Donec faucibus dapibus dui. Donec egestas tincidunt felis eget bibendum. Ut enim libero, mattis at pretium eu, interdum a sem. Duis nec accumsan massa.',
  backgroundColor: 'grey',
  size: 'small',
};
