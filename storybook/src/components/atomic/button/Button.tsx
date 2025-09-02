import * as React from 'react';
import styles from '@/styles/components.module.scss';

type CommonProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'lineGray' | 'lineLightGray' | 'lineGreen' | 'lineSell' | 'lineConsign' | 'linePurchase' | 'lineWhite'
        | 'lightGray' | 'gray' | 'green' | 'gold' | 'sell' | 'consign' | 'purchase' | 'loan' | 'band' | 'white';
    rounded?: boolean;
    beforeIcon?: string | React.ReactNode;
    afterIcon?: string | React.ReactNode;
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
  beforeIcon, afterIcon,
  text,
  disabled = false,
  onClick,
  tag = 'button',
  ...rest
}) => {
    const isRounded = rounded ? 'Round' : '';

    const renderBeforeIcon = (typeof beforeIcon === 'string') ? (<span className={styles.ico} style={{backgroundImage: `url("/assets/icons/comm_ico_${beforeIcon}.svg")`,}}></span>) : (beforeIcon);
    const renderAfterIcon = (typeof afterIcon === 'string') ? (<span className={styles.ico} style={{backgroundImage: `url("/assets/icons/comm_ico_${afterIcon}.svg")`,}}></span>) : (afterIcon);

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
                {beforeIcon === 'before' && renderBeforeIcon}
                {text && <span className={styles.text}>{text}</span>}
                {afterIcon === 'after' && renderAfterIcon}
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
            {beforeIcon === 'before' && renderBeforeIcon}
            {text && <span className={styles.text}>{text}</span>}
            {afterIcon === 'after' && renderAfterIcon}
        </button>
    )
}