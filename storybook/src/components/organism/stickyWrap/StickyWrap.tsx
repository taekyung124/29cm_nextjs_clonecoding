import * as React from "react";

interface StickyWrapProps {
	top?: number;
	zIndex?: number;
	background?: string;
	paddingX?: number;
	paddingY?: number;
	className?: string;
	children: React.ReactNode;
	onFixedChange?: (isFixed: boolean) => void;
}

export const StickyWrap: React.FC<StickyWrapProps> = ({
	top = 0,
	zIndex = 10,
	background = "#fff",
	paddingX,
	paddingY,
	className,
	children,
	onFixedChange
}) => {
	const ref = React.useRef<HTMLDivElement>(null);
	const offsetTopRef = React.useRef(0); // 원래 위치를 ref로 저장
	const [isFixed, setIsFixed] = React.useState(false);
	const [placeholderHeight, setPlaceholderHeight] = React.useState(0);

	React.useEffect(() => {
		if (!ref.current) return;
		const parent = ref.current.parentElement;
		if (!parent) return;

		// 초기 위치와 높이 기록
		offsetTopRef.current = ref.current.offsetTop;
		setPlaceholderHeight(ref.current.offsetHeight);

		const handleScroll = () => {
			const scrollTop = window.scrollY || window.pageYOffset;
			const shouldFix = scrollTop + top >= offsetTopRef.current;
			setIsFixed(shouldFix);
			onFixedChange?.(shouldFix);
		};

		const handleResize = () => {
			setPlaceholderHeight(ref.current?.offsetHeight || 0);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		handleScroll(); // 초기 체크

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, [top]);

	// fixed 스타일 계산
	const fixedStyle: React.CSSProperties = React.useMemo(() => {
		if (!ref.current || !ref.current.parentElement) return {};
		const parentRect = ref.current.parentElement.getBoundingClientRect();
		return {
			position: "fixed" as const,
			top,
			left: parentRect.left,
			width: parentRect.width,
			zIndex,
			background,
			padding: `${paddingY ?? 0}px ${paddingX ?? 0}px`
		};
	}, [isFixed, top, zIndex, background]);

	return (
		<>
			{/* fixed 시 레이아웃 shift 방지 */}
			<div style={{ height: isFixed ? placeholderHeight : undefined }} />
			<div
				ref={ref}
				className={className}
				style={isFixed ? fixedStyle : { position: "relative", width: "100%" }}
			>
				{children}
			</div>
		</>
	);
};