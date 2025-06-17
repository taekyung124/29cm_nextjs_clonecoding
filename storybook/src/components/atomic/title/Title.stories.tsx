import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import styles from '@/styles/components.module.scss';

const meta = {
  title: 'Atomic/Title',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const CtitleOptions: Story = {
  render: () => (
    <div>
      <div className={styles.ctitleSm}>ctitle-sm 15px</div>
      <div className={styles.ctitle}>ctitle(default) 16px</div>
      <div className={styles.ctitleLg}>ctitle-lg 18px</div>
      <div className={styles.ctitleXl}>ctitle-xl 22px</div>
    </div>
  )
}

export const CtitleEngOptions: Story = {
  render: () => (
    <div>
      <div className={styles.ctitleEngSm}>ctitle-eng-sm 26px</div>
      <div className={styles.ctitleEng}>ctitle-eng(default) 28px</div>
      <div className={styles.ctitleEngLg}>ctitle-eng-lg 32px</div>
    </div>
  )
}

export const StitleOptions: Story = {
  render: () => (
    <div>
      <div className={styles.stitle}>stitle 입니다. font-size: 14px / margin-bottom 10px</div>
      <div className={styles.stitleSm}>stitle-sm 입니다. font-size: 13px / margin-bottom 10px</div>
      <div className={styles.stitleLg}>stitle-lg 입니다. font-size: 16px / margin-bottom 12px</div>
      <div className={styles.stitleXl}>stitle-xl 입니다. font-size: 18px / margin-bottom 0</div>
    </div>
  )
}