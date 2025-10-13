import * as React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "@/components/organism/wingBanner/WingBanner.module.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export interface WingBannerProps {
	recentProd?: boolean;
	prodImg?: string;
	prodUrl?: string;
	bottomPos?: string;
}

export const WingBanner: React.FC<WingBannerProps> = ({
	recentProd, prodImg, prodUrl, bottomPos
}) => {
	const bannerRef = React.useRef<HTMLDivElement>(null);
	const iconRef = React.useRef<HTMLSpanElement>(null);
	const [isVisible, setIsVisible] = React.useState(false);

	React.useEffect(() => {
		if (!bannerRef.current) return;

		const offset = 100; // 노출 시작 스크롤 기준
		const banner = bannerRef.current;
		const icon = iconRef.current;

		// 초기 애니메이션
		const tl = gsap.timeline({ paused: true, ease: "expo.out" });

		if (recentProd) {
			tl.fromTo(banner, { height: "44px" }, { height: "88px", duration: 0.2 });
		} else {
			gsap.set(banner, { opacity: 0, display: "none" });
			tl.fromTo(banner, { opacity: 0, display: "none" }, { opacity: 1, display: "block", duration: 0.15 });
		}

		// 아이콘 애니메이션은 항상 실행
		tl.fromTo(
			icon,
			{ opacity: 0, yPercent: 60 },
			{ opacity: 1, yPercent: 0, duration: 0.15 },
			"<"
		);

		// ScrollTrigger 등록
		ScrollTrigger.create({
			start: `${offset} top`,
			onEnter: () => tl.play(),
			onLeaveBack: () => tl.reverse(),
		});

		return () => {
			tl.kill();
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, [recentProd]);

	// 맨 위로 이동
	const handleGoTop = () => {
		gsap.to(window, { scrollTo: 0, duration: 0.5, ease: "power2.out" });
	};

	return (
		<div className={`${styles.wingBanner} ${isVisible ? styles.active : ""}`}
		     ref={bannerRef}
			 style={{
				 bottom: bottomPos ? `calc(${bottomPos} + env(safe-area-inset-bottom))`
					: 'calc(90px + env(safe-area-inset-bottom))'
			 }}
		>
			{recentProd &&
				<a href={prodUrl} className={styles.btnRecentProd}>
					<span className={styles.thumbBox}>
						<img src={`/assets/images/thumb_${prodImg}`} alt="상품 이미지" />
					</span>
				</a>
			}
			<button type='button'
					className={styles.btnGoTop}
					onClick={handleGoTop}
			>
				<span
					ref={iconRef} className={styles.icon}
				></span>
			</button>
		</div>
	)
}
