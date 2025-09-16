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
		items: ([
			{
				title: 'form title',
				required: true,
				rightArea: (
					<Button
						color="lineLightGray"
						rounded
						size="sm"
						tag="button"
						text="button"
					/>
				),
				formCont: (
					<Input
						inputGuide="inputGuide"
						placeholder="placeholder"
						title="input"
						type="text"
						validDesc="validDesc"
					/>
				)
			},
			{
				title: 'form title',
				required: true,
				formCont: (
					<Input
						inputGuide="inputGuide"
						placeholder="placeholder"
						title="input"
						type="text"
						validDesc="validDesc"
						isValidCheck="success"
					/>
				)
			},
			{
				title: 'form title',
				required: true,
				formCont: (
					<Input
						inputGuide="inputGuide"
						placeholder="placeholder"
						title="input"
						type="text"
						validDesc="validDesc"
						isValidCheck="fail"
					/>
				)
			},
			{
				title: 'password',
				required: true,
				formCont: (
					<>
						<Input type={'password'} title={'input 일반형 password'} placeholder={'input 일반형 password'} />
						<Input boxType={'line'} type={'password'} title={'input 라인형 password'} placeholder={'input 라인형 password'} />

					</>
				)
			},
			{
				title: 'select',
				required: true,
				formCont: (
					<>
						<SelectMenu
							onChange={() => {}}
							options={[
								{
									label: 'option 01',
									value: 'option 01'
								},
								{
									label: 'option 02',
									value: 'option 02'
								},
								{
									label: 'option 03',
									value: 'option 03'
								},
								{
									label: 'option 04',
									value: 'option 04'
								}
							]}
							placeholder="Select an option"
							title="기본 SelectMenu"
							value=""
						/>
						<SelectMenu
							onChange={() => {}}
							options={[
								{
									label: 'option 01',
									value: 'option 01'
								},
								{
									label: 'option 02',
									value: 'option 02'
								},
								{
									label: 'option 03',
									value: 'option 03'
								},
								{
									label: 'option 04',
									value: 'option 04'
								}
							]}
							placeholder="Select an option"
							title="라인형 셀렉트"
							type="line"
							value=""
						/>
					</>
				)
			},
			{
				title: 'select + input',
				required: false,
				formCont: (
					<>
						<SelectMenu
							onChange={() => {}}
							options={[
								{
									label: 'option 01',
									value: 'option 01'
								},
								{
									label: 'option 02',
									value: 'option 02'
								},
								{
									label: 'option 03',
									value: 'option 03'
								},
								{
									label: 'option 04',
									value: 'option 04'
								}
							]}
							placeholder="Select an option"
							title="기본 SelectMenu"
							value=""
						/>
						<Input
							inputGuide="inputGuide"
							placeholder="placeholder"
							title="input"
							type="text"
							validDesc="validDesc"
						/>
					</>
				)
			},
			{
				title: '휴대폰 번호',
				required: true,
				formCont: (
					<InputFlexGroup
						formContents={<><SelectMenu onChange={() => {}} options={[{label: '010', value: '010'}, {label: '011', value: '011'}, {label: '016', value: '016'}, {label: '017', value: '017'}, {label: '018', value: '018'}, {label: '019', value: '019'}]} placeholder="010" title="휴대폰 번호" value=""/><Input hideGuide title="휴대폰 번호 앞자리 입력" type="number"/><Input hideGuide title="휴대폰 번호 뒷자리 입력" type="number"/></>}
						gap="Md"
						inputGuide="guide text 입니다."
						validDesc="valid check text 입니다."
					/>
				)
			},
			{
				title: '인증번호',
				required: true,
				formCont: (
					<InputFlexGroup
						formContents={<>
							<Input
								type={'text'}
								title={'input 기본형'}
								placeholder={'input 기본형'}
								timeCount={'02:59'}
								value={'123456'}
								slotBtn={
									<Button
										color="lineGray"
										rounded
										size="sm"
										tag="button"
										text="인증완료"
									/>
								}
							/>
							<Button
								color="lineGreen"
								size="lg"
								tag="button"
								text="인증확인"
							/>
						</>}
						gap="Md"
						isValidCheck="fail"
						inputGuide="guide text 입니다."
						validDesc="valid check text 입니다."
					/>
				)
			},
			{
				title: '이메일',
				required: true,
				formCont: (
					<>
						<InputFlexGroup
							gap="Lg"
							leftArea={<Input title="이메일 입력" type="text" placeholder='example'/>}
							midText="@"
							rightArea={<SelectMenu onChange={() => {}} options={[{label: '직접입력', value: '직접입력'}, {label: 'option01', value: 'option01'}, {label: 'option02', value: 'option02'}, {label: 'option03', value: 'option03'}, {label: 'option04', value: 'option04'}, {label: 'option05', value: 'option05'}]} placeholder="직접입력" title="도메인" value=""/>}
						/>
						<Input
							inputGuide="inputGuide"
							placeholder="직접입력"
							title="input"
							type="text"
							validDesc="validDesc"
						/>
					</>
				)
			},
			{
				title: '주소입력',
				required: true,
				formCont: (
					<>
						<InputFlexGroup
							formContents={<>
								<Input
									type={'text'}
									title={'우편번호 입력'}
									placeholder={'우편번호 입력'}
									disabled={true}
									readonly={true}
								/>
								<Button
									color="lineGreen"
									size="lg"
									tag="button"
									text="우편번호"
								/>
							</>}
							gap="Md"
						/>
						<Input
							type={'text'}
							title={'기본주소가 등록됩니다.'}
							placeholder={'기본주소가 등록됩니다.'}
							disabled={true}
							readonly={true}
						/>
						<Input
							type={'text'}
							title={'상세주소를 입력해 주세요.'}
							placeholder={'상세주소를 입력해 주세요.'}
						/>
					</>
				)
			},
			{
				title: '문의 내용',
				required: true,
				formCont: (
					<>
						<Input
							type={'text'}
							title={'문의 제목을 입력해 주세요.'}
							placeholder={'문의 제목을 입력해 주세요.'}
						/>
						<Textarea
							max={1000}
							placeholder="문의 내용을 입력해 주세요."
							title="문의 내용을 입력해 주세요."
						/>
					</>
				)
			},
			{
				title: '파일첨부',
				required: true,
				formCont: (
					<div style={{
						width: '100%',
						height: '30px',
						background: 'rgba(255,0,0,.2)'
					}}>//file attach box 컴포넌트 작업 이후 추가 예정</div>
				)
			},
		])
	},
	render: (args) => <FormList {...args} />
}