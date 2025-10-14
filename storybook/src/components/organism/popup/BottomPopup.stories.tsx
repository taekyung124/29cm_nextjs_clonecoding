import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from "@storybook/nextjs-vite";

import {BottomPopup} from "@/components/organism/popup/BottomPopup";
import {Button} from "@/components/atomic/button/Button";

import {Sub} from "@/components/layouts/templates/Sub";
import type {HeaderProps} from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";

const meta = {
	title: 'Organism/Popup/BottomPopup',
	component: BottomPopup,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		hasHeader: {
			control: 'boolean',
		},
		popTitle: {
			control: 'text',
		},
		hasFooter: {
			control: 'boolean',
		},
		btnSlot: {
			control: 'object',
		},
		dimClose: {
			control: 'boolean',
		},
		children: {
			control: 'object',
		},
		onClose: { control: false },
	}
} satisfies Meta<typeof BottomPopup>;

export default meta;
type Story = StoryObj<typeof BottomPopup>;

export const BottomPopupDefault: Story = {
	args: {
		hasHeader: true,
		popTitle: 'Bottom Popup Title',
		hasFooter: true,
	},
	render: (args) => {
		const [isPopupOpen, setPopupOpen] = React.useState(false);

		const handleOpen = () => setPopupOpen(true);
		const handleClose = () => setPopupOpen(false);

		const subHeaderProps: HeaderProps = {
			type: "sub",
			title: "Bottom Popup",
			hasGnb: false,
			headerButtonOrder: [
				{ btnHomeUrl: "javascript:" },
				{ btnSearchUrl: "javascript:" },
				{ btnShareUrl: "javascript:" },
				{ btnFindIdUrl: "javascript:" },
			],
		};

		return (
			<>
				<Sub headerProps={subHeaderProps}>
					<ContentBox size={'Md'}>
						<Button
							color="green"
							rounded
							size="md"
							tag="button"
							text="bottom popup 열기"
							onClick={handleOpen}
						/>
					</ContentBox>
				</Sub>
				<BottomPopup  {...args} isShow={isPopupOpen} onClose={handleClose}
					btnSlot={<>
						<Button color="green" size="md" tag="button" text="확인" onClick={handleClose} />
						<Button color="lineGreen" size="md" tag="button" text="닫기" onClick={handleClose} />
					</>}
				>
					<div style={{ width: '100%', height: '600px', background: 'floralwhite'}}>bottom popup 내용 ~~</div>
				</BottomPopup>
			</>
		)
	}
}