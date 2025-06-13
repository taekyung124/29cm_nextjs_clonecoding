import type { Meta, StoryObj } from '@storybook/nextjs';
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from './tooltip';
import { Button } from '../button/button';

const meta: Meta<typeof Tooltip> = {
	title: 'UI/Tooltip',
	component: Tooltip,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button>Hover me</Button>
			</TooltipTrigger>
			<TooltipContent>
				Tooltip content
			</TooltipContent>
		</Tooltip>
	),
};