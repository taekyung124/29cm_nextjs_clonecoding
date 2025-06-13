import type { Meta, StoryObj } from '@storybook/nextjs';
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from './tabs';

const meta: Meta<typeof Tabs> = {
	title: 'UI/Tabs',
	component: Tabs,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="account" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
			</TabsList>
			<TabsContent value="account">Account settings</TabsContent>
			<TabsContent value="password">Change your password</TabsContent>
		</Tabs>
	),
};