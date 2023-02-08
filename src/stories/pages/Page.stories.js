import { within, userEvent } from '@storybook/testing-library';
import { createPage } from './main-page/Page';

export default {
  title: 'Example/Page',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/d91rGVVI3tNAdsJk9QQoJ1/storybook-con-figma?node-id=70%3A471&t=F6m9x97f97x4Vuww-11'
   }
  },
};

const Template = () => createPage();

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/html/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
