import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	children?: React.ReactNode;
	displayShadow?: boolean;
	color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const Button = ({
	label,
	displayShadow = false,
	color = 'primary',
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			className={clsx(styles.button, displayShadow && styles.withShadow)}
			data-theme={color}
			{...props}
		>
			{label}
			{children}
		</button>
	);
};
