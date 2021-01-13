import SimpleButton from './../components/SimpleButton.vue';

export default {
  title: 'Example/Button',
  component: SimpleButton,
  argTypes: {
   
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SimpleButton },
  template: '<simple-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Another Button',
};

