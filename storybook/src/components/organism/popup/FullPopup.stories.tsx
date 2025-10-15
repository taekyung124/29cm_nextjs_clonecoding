import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {Sub} from "@/components/layouts/templates/Sub";
import type {HeaderProps} from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";
import {FullPopup} from "@/components/organism/popup/FullPopup";
import {Button} from "@/components/atomic/button/Button";

const meta = {
	title: 'Organism/Popup/FullPopup',
	component: FullPopup,
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
		children: {
			control: 'object',
		},
		onClose: { control: false },
	}
} satisfies Meta<typeof FullPopup>;

export default meta;
type Story = StoryObj<typeof FullPopup>;

export const FullPopupDefault: Story = {
	args: {
		hasHeader: true,
		popTitle: 'Full Popup Title',
		hasFooter: true,
	},
	render: (args) => {
		const [isPopupOpen, setPopupOpen] = React.useState(false);

		const handleOpen = () => setPopupOpen(true);
		const handleClose = () => setPopupOpen(false);

		const subHeaderProps: HeaderProps = {
			type: "sub",
			title: "Full Popup",
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
							text="full popup 열기"
							onClick={handleOpen}
						/>
					</ContentBox>
				</Sub>
				<FullPopup {...args}
					isShow={isPopupOpen} onClose={handleClose}
					btnSlot={<>
						<Button color="green" size="md" tag="button" text="확인" onClick={handleClose} />
						<Button color="lineGreen" size="md" tag="button" text="닫기" onClick={handleClose} />
					</>}
				>
					<ContentBox size={'zero'} pb={'Sm'}>
						<div style={{width: '100%', height: '800px', background: 'floralwhite'}}>
							full popup 내용 ~~
						</div>
					</ContentBox>
				</FullPopup>
			</>
		)
	}
}