import * as React from 'react';
import styles from '@/components/molecule/form/FormGroupList.module.scss';

import { Input } from '@/components/atomic/form/Input';

interface InputFlexGroupProps {
	gap?: 'Md' | 'Lg';
	midText?: string;
	leftArea?: React.ReactNode;
	rightArea?: React.ReactNode;
	formContents?: React.ReactNode;
	btnSlot?: React.ReactNode;
	isValidCheck?: 'fail' | 'success';
	inputGuide?: string;
	validDesc?: string;
}

export const InputFlexGroup: React.FC<InputFlexGroupProps> = ({
	gap = 'Md', midText, leftArea, rightArea, formContents, btnSlot,
	isValidCheck, inputGuide, validDesc,
}) => {

	// 부모에서 항상 Input의 내부 가이드는 숨기고,
	// 부모에 isValidCheck가 전달되면 그 값을 자식에게 강제 전달한다.
	const overrideProps: Partial<React.ComponentProps<typeof Input>> = {
		hideGuide: true,
		...(typeof isValidCheck !== 'undefined' ? { isValidCheck } : {}),
	};

	const renderWithOverride = (node: React.ReactNode): React.ReactNode => {
		if (node == null) return node;

		// 배열(Fragments 포함)은 각각 재귀 처리
		if (Array.isArray(node)) {
			return node.map((n, i) => (
				<React.Fragment key={i}>{renderWithOverride(n)}</React.Fragment>
			));
		}

		// 기본 타입(문자열/숫자/불린)은 그대로 반환
		if (typeof node === "string" || typeof node === "number" || typeof node === "boolean") {
			return node;
		}

		// React element일 경우
		if (React.isValidElement(node)) {
			// 여기서 타입 좁히기
			const element = node as React.ReactElement<any>;
			const { children, ...restProps } = element.props;

			// children 먼저 재귀 처리
			const newChildren = children ? renderWithOverride(children) : children;

			// 특정 컴포넌트만 override
			const isInputComponent =
				element.type === Input ||
				(typeof element.type === "function" &&
					(element.type as any).displayName === "Input");

			if (isInputComponent) {
				return React.cloneElement(element, { ...restProps, ...overrideProps }, newChildren);
			}

			// 그 외 컴포넌트는 children만 재귀적으로 바꿔치기
			return React.cloneElement(element, restProps, newChildren);
		}

		return node;
	};

	return (
		<div className={[styles.inputFlexGroup, styles.validCheck, styles[isValidCheck ?? '']].join(' ')}>
			<div className={[styles.inputFlexBox, gap ? styles[`gap${gap}`] : ''].join(' ')}>
				{midText && (
					<>
						{leftArea}
						<span className={styles.gap}>{midText}</span>
						{rightArea}
					</>
				)}
				{formContents && (
					<>
						{renderWithOverride(formContents)}
						{btnSlot && btnSlot}
					</>
				)}
			</div>
			{(inputGuide && !isValidCheck) && (
				<div className={styles.inputGuide}>{inputGuide}</div>
			)}
			{(validDesc && isValidCheck) && (
				<div className={styles.validDesc}>{validDesc}</div>
			)}
		</div>
	)
}