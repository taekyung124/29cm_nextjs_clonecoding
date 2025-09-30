import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {Footer} from "@/components/layouts/footer/Footer";

const meta = {
	title: 'Layouts/Footer',
	component: Footer,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto'}}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: StoryFn = () => <Footer />