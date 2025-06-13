import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './button';
import { fn } from 'storybook/test';

const meta: Meta<typeof Button> = {
	title: 'UI/Button', // Storybook 사이드바 경로
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
		},
		size: {
			control: { type: 'select' },
			options: ['default', 'sm', 'lg', 'icon'],
		},
		onClick: { action: 'clicked' }, // 또는 fn()
	},
	args: {
		onClick: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Click me',
		variant: 'default',
		size: 'default',
	},
};

export const Destructive: Story = {
	args: {
		children: 'Delete',
		variant: 'destructive',
	},
};

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
	},
};

export const Small: Story = {
	args: {
		children: 'Small',
		size: 'sm',
	},
};

export const Large: Story = {
	args: {
		children: 'Large',
		size: 'lg',
	},
};

export const WithIcon: Story = {
	args: {
		children: '🔔',
		size: 'icon',
		variant: 'ghost',
	},
};