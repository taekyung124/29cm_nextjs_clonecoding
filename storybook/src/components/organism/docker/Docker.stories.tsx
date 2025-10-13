import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {Docker} from "@/components/organism/docker/Docker";

const meta = {
	title: 'Organism/Docker',
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