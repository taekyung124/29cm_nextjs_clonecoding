import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {WingBanner} from "@/components/organism/wingBanner/WingBanner";

const meta = {
	title: 'Organism/WingBanner',
	component: WingBanner,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		recentProd: {
			control: 'boolean'
		},
		prodImg: {
			control: 'text'
		},
		prodUrl: {
			control: 'text'
		}
	}
} satisfies Meta<typeof WingBanner>;

export default meta;
type Story = StoryObj<typeof WingBanner>;

export const WingBannerDefault: StoryFn = () => (
	<div style={{position: 'relative', width: '500px', margin: '0 auto'}}>
		<div style={{width: '100%', height: '300px', background: 'lightgray'}}>임시 div</div>
		<div style={{width: '100%', height: '300px', background: 'lightcoral'}}>임시 div</div>
		<div style={{width: '100%', height: '300px', background: 'lightgreen'}}>임시 div</div>
		<WingBanner recentProd={true} prodImg={'prod_5by5.png'} prodUrl={'javascript:'} />
	</div>
)

export const WingBannerNoProd: StoryFn = () => (
	<div style={{position: 'relative', width: '500px', margin: '0 auto'}}>
		<div style={{width: '100%', height: '300px', background: 'lightgray'}}>임시 div</div>
		<div style={{width: '100%', height: '300px', background: 'lightcoral'}}>임시 div</div>
		<div style={{width: '100%', height: '300px', background: 'lightgreen'}}>임시 div</div>
		<WingBanner recentProd={false} bottomPos={'20px'} />
	</div>
)