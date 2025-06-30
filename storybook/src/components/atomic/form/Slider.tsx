import * as React from 'react';
import styles from '@/styles/components.module.scss';
import {Input} from "@/components/atomic/form/Input";
import {GoodsGroup} from "@/components/atomic/goodsGroup/GoodsGroup";

export interface SliderProps {
	minValue?: number;
	maxValue?: number;
	onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
	minValue,
	maxValue,
	// onChange,
}) => {
	return (
		<div className={styles.sliderGroup}>
			<div className={styles.sliderBox}>
				<span className={styles.uiSlider} data-min={minValue} data-max={maxValue}>
					<div className={styles.uiSliderRange} style={{width: '100%', left: '0'}}></div>
					<span className={styles.uiSliderHandle} style={{left: '0'}}></span>
					<span className={styles.uiSliderHandle} style={{left: '100%'}}></span>
				</span>
			</div>
			<div className={styles.valueTextBox}>
				<GoodsGroup GoodsGroupSize={'sizeSm'} val={minValue} unit={'만원'}/>
				<GoodsGroup GoodsGroupSize={'sizeSm'} val={maxValue} unit={'만원'}/>
			</div>
			<div className={styles.inputFlexGroup}>
				<Input boxType={undefined} type={'number'} title={'slider 최소 금액 값'} placeholder={'slider 최소 금액 값'} value={minValue}>
					<span className={styles.sliderUnit}>만원</span>
				</Input>
				<span className={styles.gap}>~</span>
				<Input boxType={undefined} type={'number'} title={'slider 최대 금액 값'} placeholder={'slider 최대 금액 값'} value={maxValue}>
					<span className={styles.sliderUnit}>만원</span>
				</Input>
			</div>
		</div>
	)
}