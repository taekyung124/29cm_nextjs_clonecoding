import type { Meta, StoryObj } from '@storybook/nextjs';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Info } from 'lucide-react';

const meta: Meta<typeof Alert> = {
	title: 'UI/Alert',
	component: Alert,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
	render: () => (
		<Alert>
			<Info className="h-4 w-4" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>This is an alert message.</AlertDescription>
		</Alert>
	),
};