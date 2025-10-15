// DESC :: popup 열었을 때 body 클릭, 스크롤 제어를 위한 공통 hook
import { useEffect, useRef } from "react";

const bodyLockSet = new Set<string>();
let uidCounter = 0;

export function useBodyLock(isActive: boolean) {
	const idRef = useRef<string | null>(null);
	if (idRef.current === null) {
		uidCounter += 1;
		idRef.current = `body-lock-${uidCounter}`;
	}

	useEffect(() => {
		const id = idRef.current!;
		const addLock = () => {
			bodyLockSet.add(id);
			document.body.classList.add("popup-open");
		};
		const removeLock = () => {
			bodyLockSet.delete(id);
			if (bodyLockSet.size === 0) {
				document.body.classList.remove("popup-open");
			}
		};

		if (isActive) {
			addLock();
		}

		// cleanup: 항상 해당 id를 제거(컴포넌트 언마운트 / deps 변경 시)
		return () => {
			removeLock();
		};
	}, [isActive]);
}