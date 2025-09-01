import * as React from 'react';
import styles from '@/styles/components.module.scss';

type CommonProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'lineGray' | 'lineLightGray' | 'lineGreen' | 'lineSell' | 'lineConsign' | 'linePurchase' | 'lineWhite'
        | 'lightGray' | 'gray' | 'green' | 'gold' | 'sell' | 'consign' | 'purchase' | 'loan' | 'band' | 'white';
    rounded?: boolean;
    ico?: string | React.ReactNode;
    icoLocated?: 'before' | 'after';
    text?: string | React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
};

type ButtonAsButton = {
    tag?: 'button';
    type?: 'button' | 'submit' | 'reset';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchor = {
    tag: 'a';
    href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = CommonProps & (ButtonAsButton | ButtonAsAnchor);

export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  color = 'lineGray',
  rounded = false,
  ico,
  icoLocated = 'after',
  text,
  disabled = false,
  onClick,
  tag = 'button',
  ...rest
}) => {
    const isRounded = rounded ? 'Round' : '';

    const renderIcon = typeof ico === 'string' ? (<span className={styles.ico} style={{backgroundImage: `url("/assets/icons/comm_ico_${ico}.svg")`,}}></span>) : (ico);

    const baseClass = [
        styles[`btn${isRounded}`],
        styles[`${color}`],
        styles[`${size}`],
    ];

    if (tag === 'a') {
        const {href, ...anchorProps} = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <a
                aria-disabled={disabled}
                className={[...baseClass, disabled ? styles.isDisabled : ''].join(' ')}
                href={disabled ? undefined : href}
                {...anchorProps}
            >
                {icoLocated === 'before' && renderIcon}
                {text && <span className={styles.text}>{text}</span>}
                {icoLocated === 'after' && renderIcon}
            </a>
        );
    }

    const {type = 'button', ...buttonProps} = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button
            className={[...baseClass, disabled ? styles.isDisabled : ''].join(' ')}
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...buttonProps}
        >
            {icoLocated === 'before' && renderIcon}
            {text && <span className={styles.text}>{text}</span>}
            {icoLocated === 'after' && renderIcon}
        </button>
    )
}