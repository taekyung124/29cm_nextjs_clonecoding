import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/nextjs-vite';

import {FormList} from "@/components/molecule/form/FormList";
import {Button} from "@/components/atomic/button/Button";
import {InputFlexGroup} from "@/components/molecule/form/InputFlexGroup";
import {Input} from "@/components/atomic/form/Input";
import {SelectMenu} from '@/components/atomic/form/SelectMenu';
import {Textarea} from '@/components/atomic/form/Textarea';

const meta = {
	title: 'Molecule/Form/FormList',
	component: FormList,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		gap: {
			control: 'inline-radio',
			options: ['Md', 'Lg'],
		},
		items: {
			control: 'object',
		}
	}
} satisfies Meta<typeof FormList>;

export default meta;
type Story = StoryObj<typeof FormList>;

export const FormListDefault: Story = {
	args: {
		gap: 'Md',
		items: [],
	},
	render: (args) => {
		const [select1, setSelect1] = React.useState('');
		const [select2, setSelect2] = React.useState('');
		const [phonePrefix, setPhonePrefix] = React.useState('');
		const [emailDomain, setEmailDomain] = React.useState('');

		const items = [
			{
				title: 'select',
				required: true,
				formCont: (
					<>
						<SelectMenu
							options={[
								{ label: 'option 01', value: 'option 01' },
								{ label: 'option 02', value: 'option 02' },
								{ label: 'option 03', value: 'option 03' },
								{ label: 'option 04', value: 'option 04' }
							]}
							placeholder="Select an option"
							title="기본 SelectMenu"
							value={select1}
							onChange={(val) => setSelect1(val)}
						/>
						<SelectMenu
							type="line"
							options={[
								{ label: 'option 01', value: 'option 01' },
								{ label: 'option 02', value: 'option 02' },
								{ label: 'option 03', value: 'option 03' },
								{ label: 'option 04', value: 'option 04' }
							]}
							placeholder="Select an option"
							title="라인형 셀렉트"
							value={select2}
							onChange={(val) => setSelect2(val)}
						/>
					</>
				)
			},
			{
				title: '휴대폰 번호',
				required: true,
				formCont: (
					<InputFlexGroup
						formContents={
							<>
								<SelectMenu
									options={[
										{ label: '010', value: '010' },
										{ label: '011', value: '011' },
										{ label: '016', value: '016' },
										{ label: '017', value: '017' },
										{ label: '018', value: '018' },
										{ label: '019', value: '019' }
									]}
									placeholder="010"
									title="휴대폰 번호"
									value={phonePrefix}
									onChange={(val) => setPhonePrefix(val)}
								/>
								<Input hideGuide title="앞자리 입력" type="number" />
								<Input hideGuide title="뒷자리 입력" type="number" />
							</>
						}
						gap="Md"
						inputGuide="guide text 입니다."
						validDesc="valid check text 입니다."
					/>
				)
			},
			{
				title: '이메일',
				required: true,
				formCont: (
					<InputFlexGroup
						gap="Lg"
						leftArea={<Input title="이메일 입력" type="text" placeholder="example" />}
						midText="@"
						rightArea={
							<SelectMenu
								options={[
									{ label: '직접입력', value: '직접입력' },
									{ label: 'option01', value: 'option01' },
									{ label: 'option02', value: 'option02' },
									{ label: 'option03', value: 'option03' },
									{ label: 'option04', value: 'option04' },
									{ label: 'option05', value: 'option05' }
								]}
								placeholder="직접입력"
								title="도메인"
								value={emailDomain}
								onChange={(val) => setEmailDomain(val)}
							/>
						}
					/>
				)
			}
		];

		return <FormList {...args} items={items} />;
	}
};