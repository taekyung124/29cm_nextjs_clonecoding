import * as React from 'react';
import styles from "@/components/molecule/listHeader/ListHeader.module.scss";

import {GoodsGroup} from "@/components/atomic/goodsGroup/GoodsGroup";
import {Toggle} from "@/components/atomic/form/Toggle";
import {SelectMenu, SelectMenuProps, SelectOption} from "@/components/atomic/form/SelectMenu";

type SelectSlotProps = Partial<Pick<SelectMenuProps, 'placeholder' | 'value' | 'onChange'>>;

interface ListHeaderProps extends SelectSlotProps{
	countNum?: string;
	toggle?: string[];
	btnSlots?: React.ReactNode;
	selectSlots?: SelectOption[];
	isSticky?: boolean; // todo : stickyWrap 작업 후 적용 필요
	hasFilter?: boolean;
	onClick?: () => void;
}

export const ListHeader: React.FC<ListHeaderProps> = ({
	countNum, toggle, btnSlots, selectSlots,
	isSticky, hasFilter, onClick,
	placeholder, value, onChange,
}) => {
	const [isListViewActive, setIsListViewActive] = React.useState(false);

	const handleListViewToggle = () => {
		setIsListViewActive(prev => !prev);
		onClick?.();
	};

	return (
		<div className={styles.listHeader}>
			<>
				{toggle && (
					<div className={styles.gridFilterWrap}>
						{/* TODO : swiper 컴포넌트 작업 후 구조 변경 필요 */}
						<div className={styles.toggleWrap}>
							{toggle.map((t, idx) => (
								<Toggle
									key={idx}
									idx={`toggle-${idx}`}
									size="Md"
									text={t}
								/>
							))}
						</div>
						<div className={styles.rightArea}>
							<button type={'button'}
									className={[
										styles.btnListView,
										isListViewActive ? styles.isActive: ''
									].join(' ')}
									onClick={handleListViewToggle}>
								<span className="offscreen">`리스트 ${isListViewActive ? '가로형' : '세로형'} 보기`</span>
							</button>
						</div>
					</div>
				)}
				{countNum && (
					<div className={styles.countWrap}>
						<div className={styles.count}>
							<GoodsGroup size={'sizeMd'} label={'총 '} val={countNum} unit={'건'} valClass={'fwMd'} />
						</div>
						<div className={styles.rightArea}>
							{(btnSlots && !selectSlots) && (
								<div className={styles.btnWrap}>
									{btnSlots}
								</div>
							)}
							{(selectSlots && !btnSlots) && (
								<SelectMenu
									type={'text'}
									title={'상품 정렬'}
									placeholder={placeholder}
									value={value ?? ''}
									options={selectSlots}
									onChange={onChange ?? (() => {})}
								/>
							)}
							{hasFilter && (
								<button type={'button'} className={styles.btnFilter} onClick={() => {}}>
									<span className="offscreen">상세필터</span>
								</button>
							)}
						</div>
					</div>
				)}
			</>
		</div>
	)
}