import { defaultConfig } from '@formkit/vue';
import {
  createAutoAnimatePlugin,
  createMultiStepPlugin,
} from '@formkit/addons';
import {
  applicationIcons,
  telephone,
  radio,
  download,
  date,
  month,
  week,
} from '@formkit/icons';
import { generateClasses } from '@formkit/themes';
import theme from './assets/theme/paktum.js';

export default defaultConfig({
  // theme: 'genesis',
  plugins: [createAutoAnimatePlugin(), createMultiStepPlugin()],
  config: {
    classes: generateClasses(theme),
  },
  icons: {
    ...applicationIcons,
    telephone,
    radio,
    download,
    date,
    month,
    week,
  },
  inputs: {
    appText: {
      component: 'InputText',
      type: 'text',
    },
  },
});
