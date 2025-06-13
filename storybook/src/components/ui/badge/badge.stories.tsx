import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
	title: 'UI/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'secondary', 'destructive', 'outline'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		children: 'Badge',
		variant: 'default',
	},
};