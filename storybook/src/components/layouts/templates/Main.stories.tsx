import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {Main} from "@/components/layouts/templates/Main";

const meta = {
	title: 'Layouts/Templates/Main',
	component: Main,
	parameters: {
		layout: 'fullscreen',
	}
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof Main>;

export const MainLayout:Story = {
	args: {
		recentProd: true,
		prodImg: 'prod_5by5.png',
		prodUrl: 'javascript:',
		children: (
			<>
				<div style={{height: "600px", background: "#333", color: '#aaa', textAlign: "center"}}>
					스크롤용 컨텐츠 1
				</div>
				<div style={{height: "400px", background: "#bbb", textAlign: "center"}}>
					스크롤용 컨텐츠 2
				</div>
			</>
		)
	},
	render:(args) => <Main {...args} />
}