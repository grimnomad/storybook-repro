import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Button',
  component: Button
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};