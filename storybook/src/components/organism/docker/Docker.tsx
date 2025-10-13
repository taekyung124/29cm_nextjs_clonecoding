import * as React from 'react';
import styles from "@/components/organism/docker/Docker.module.scss";

interface DockerProps {
	id?: string;
}

export const Docker:React.FC<DockerProps> = ({id}) => {
	const DockerMenu = [
		{href: 'javascript:', icon: 'home', text: '홈', isActive: true},
		{href: 'javascript:', icon: 'search', text: '검색', isActive: false},
		{href: 'javascript:', icon: 'wish', text: '찜', isActive: false},
		{href: 'javascript:', icon: 'sell', text: '내명품팔기', isActive: false},
		{href: 'javascript:', icon: 'my', text: '마이포켓', isActive: false},
	];
	return (
		<div className={styles.dockerWrapper} id={id}>
			<ul className={styles.dockerList}>
				{DockerMenu.map((item, index) => (
					<li key={index} className={[styles.dockerItem, item.isActive ? styles.isActive : ''].join(' ')}>
						<a href={item.href} className={styles.dockerLink}>
							<span className={[styles.icon, styles[item.icon]].join(' ')}></span>
							<span className={styles.text}>{item.text}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}