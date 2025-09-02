import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BubbleBox } from './BubbleBox';

const meta = {
    title: 'Atomic/BubbleBox',
    component: BubbleBox,
    tags: ['autodocs'],
    parameters: {
    	layout: 'padded',
    },
	argTypes: {
		align: {
			control: { type: 'radio' },
			options: [ undefined, 'posBottom']
		},
	},
} satisfies Meta<typeof BubbleBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PositionType: Story = {
  args: {
    bubbleText: '찜하면 가격 인하 시 알림이 와요',
    align: undefined, // 기본값
  },
};