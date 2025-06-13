import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from './input';

const meta: Meta<typeof Input> = {
	title: 'UI/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'text',
		},
		placeholder: {
			control: 'text',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		type: 'text',
		placeholder: 'Enter text here...',
	},
};