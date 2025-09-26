import * as React from 'react';
import styles from "@/components/organism/boardDetail/BoardDetail.module.scss";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";
import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";
import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {ContentBox} from "@/components/layouts/contentBox/ContentBox";
import {NoData} from "@/components/molecule/noData/NoData";
import {Button} from "@/components/atomic/button/Button";

interface BoardDetailProps {
	title?: string;
	date?: string;
	status?: string;
	contents?: string | React.ReactNode;
	replyContents?:  string | React.ReactNode;
}

export const BoardDetail: React.FC<BoardDetailProps> = ({
	title, date, status, contents, replyContents,
}) => {
	return (
		<div className={styles.boardDetail}>
			<div className={styles.boardDetailHeader}>
				<div className={styles.qnaType}>Q</div>
				<div className={styles.boardInfo}>
					<div className={styles.title}>{title}</div>
					<FlexInfoWrap
						leftArea={
							<div className="barGroup">
								<span className="barTextSm">{date}</span>
								<span className="barTextSm fwMd">{status}</span>
							</div>
						}
						rightArea={
							<BtnWrap align={'auto'} buttons={
								<>
									<EtcButton name={'icon'} offscreen="수정" icon={'edit'} iconSize={18} />
									<EtcButton name={'icon'} offscreen="삭제" icon={'delete'} iconSize={18} />
								</>
							} />
						}
					/>
				</div>
			</div>
			<div className={styles.boardDetailBody}>
				{typeof contents === "string" ? (
					<ContentBox type="default" hasInner={true} size="Md">
						{contents}
					</ContentBox>
				) : (
					contents
				)}

				<ContentBox type={'divider'} size={'Md'} hasInner={true} children={
					replyContents ? (
						<div className={styles.replyInfo}>
							<div className={styles.qnaType}>Q</div>
							<div className={styles.qnaReply}>{replyContents}</div>
						</div>
					) : (
						<NoData
							type="wrap"
							desc="아직 답변이 등록되지 않았습니다."
							pt="lg"
							subDesc="빠른 시일 내로 처리해드리겠습니다."
							btnWrap={<Button tag={'a'} href={'javascript:'} afterIcon="arw_right_black" rounded text="고객센터"/>}
						/>
					)
				} />
			</div>
		</div>
	)
}