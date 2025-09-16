import * as React from 'react';
import styles from '@/components/molecule/form/FormGroupList.module.scss';

interface FormItem {
	title?: string;
	required?: boolean;
	rightArea?: React.ReactNode;
	formCont?: React.ReactNode;
}

interface FormListProps {
	gap: 'Md' | 'Lg';
	items: FormItem[];
}

export const FormList: React.FC<FormListProps> = ({
	gap = 'md', items
}) => {
	return (
		<ul className={[styles.formList, styles[`gap${gap}`]].join(' ')}>
			{items.map((item, index) => (
				<li className={styles.formItem}>
					<div className={styles.formTitle}>
						<div className={styles.title}>
							{item.title}
							{item.required && <span className={styles.required}>
								<span className="offscreen">필수입력</span>
							</span>}
						</div>
						{item.rightArea && (
							<div className={styles.rightArea}>{item.rightArea}</div>
						)}
					</div>
					<div className={styles.formCont}>
						{item.formCont}
					</div>
				</li>
			))}
		</ul>
	)
}