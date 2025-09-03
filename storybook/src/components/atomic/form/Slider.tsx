import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from '@/components/atomic/form/FormElemnent.module.scss';

import {Input} from "@/components/atomic/form/Input";
import {GoodsGroup} from "@/components/atomic/goodsGroup/GoodsGroup";

export interface SliderProps {
	minValue: number;
	maxValue: number;
	onChange?: (values: [number, number]) => void;
}

export const Slider: React.FC<SliderProps> = ({
	minValue,
	maxValue,
	onChange,
}) => {
	const [min, setMin] = useState(minValue);
	const [max, setMax] = useState(maxValue);
	const [minInput, setMinInput] = useState(minValue);
	const [maxInput, setMaxInput] = useState(maxValue);

	const trackRef = useRef<HTMLSpanElement>(null);

	const getPercent = (val: number) => ((val - minValue) / (maxValue - minValue)) * 100;

	const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

	const updateFromPosition = (e: MouseEvent, isMin: boolean) => {
		if (!trackRef.current) return;
		const rect = trackRef.current.getBoundingClientRect();
		const pos = e.clientX - rect.left;
		const percent = clamp(pos / rect.width, 0, 1);
		const value = Math.round(minValue + (maxValue - minValue) * percent);

		if (isMin) {
			if (value < max) {
				setMin(value);
				setMinInput(value);
			}
		} else {
			if (value > min) {
				setMax(value);
				setMaxInput(value);
			}
		}
	};

	const startDrag = (isMin: boolean) => (e: React.MouseEvent) => {
		const onMouseMove = (event: MouseEvent) => updateFromPosition(event, isMin);
		const onMouseUp = () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
		};
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	};

	useEffect(() => {
		onChange?.([min, max]);
	}, [min, max]);

	const handleInputChange = (type: 'min' | 'max', val: number) => {
		if (type === 'min') {
			const safe = clamp(val, minValue, max - 1);
			setMin(safe);
			setMinInput(safe);
		} else {
			const safe = clamp(val, min + 1, maxValue);
			setMax(safe);
			setMaxInput(safe);
		}
	};

	return (
		<div className={styles.sliderGroup}>
			<div className={styles.sliderBox}>
				<span className={styles.uiSlider} ref={trackRef} data-min={minValue} data-max={maxValue}>
					<div className={styles.uiSliderRange} style={{
						width: `${getPercent(max) - getPercent(min)}%`,
						left: `${getPercent(min)}%`}}></div>
					<span
						className={styles.uiSliderHandle}
						style={{left: `${getPercent(min)}%`}}
						onMouseDown={startDrag(true)}
					>

					</span>
					<span
						className={styles.uiSliderHandle}
						style={{left: `${getPercent(max)}%`}}
						onMouseDown={startDrag(false)}
					>

					</span>
				</span>
			</div>
			<div className={styles.valueTextBox}>
				<GoodsGroup size={'sizeSm'} val={minValue} unit={'만원'}/>
				<GoodsGroup size={'sizeSm'} val={maxValue} unit={'만원'}/>
			</div>
			<div className={styles.inputFlexGroup}>
				<Input
					boxType={undefined}
					type={'number'} title={'slider 최소 금액 값'} placeholder={'slider 최소 금액 값'}
					value={minInput} onChange={(val: string) => handleInputChange('min', Number(val))}
				>
					<span className={styles.sliderUnit}>만원</span>
				</Input>
				<span className={styles.gap}>~</span>
				<Input boxType={undefined}
					   type={'number'} title={'slider 최대 금액 값'} placeholder={'slider 최대 금액 값'}
					   value={maxInput} onChange={(val: string) => handleInputChange('max', Number(val))}
				>
					<span className={styles.sliderUnit}>만원</span>
				</Input>
			</div>
		</div>
	)
}