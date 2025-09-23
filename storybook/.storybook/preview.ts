import '../public/fonts/pretendard-1.3.9/pretendard.css';
import '../public/fonts/linotype-didot-std/didot.css';
import '@/styles/globals.scss';
import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    options: {
      storySort: {
        order: [
          'CommonStyle',
            ['Typography', 'BarGroup'],
          'Atomic',
            ['Title', 'Stext', 'GoodsGroup', 'Badge', 'Tag', 'Button', 'TextButton', 'EtcButton', 'Form', 'Box', 'BubbleBox', 'Thumb'],
          'Molecule',
            ['InfoTextList', 'TitleWrap', 'FlexInfoWrap', 'BtnWrap',
              'NoData', 'InfoGuide', 'Form', 'OverflowWrap',
              'ProdItem', 'StoreItem', 'SelectItem', 'AboutGugusItem', 'DisplayBanner',
              'Table'],
          'Organism',
            ['FoldList'],
          'Templates',
          'Layouts',
        ],
      },
    },
  },
};

export default preview;