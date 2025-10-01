import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {Docker} from "@/components/layouts/docker/Docker";

const meta = {
	title: 'Layouts/Docker',
	component: Docker,
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof Docker>;

export default meta;
type Story = StoryObj<typeof Docker>;

export const DockerMenu: StoryFn = () => (
	<Docker />
)