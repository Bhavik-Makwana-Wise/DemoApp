import React from 'react';
import { Provider as NeptuneProvider } from '@transferwise/components';

import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/icons/lib/styles/main.min.css';

// Required if you use flags from Neptune, such as in MoneyInput and Select
import 'currency-flags/dist/currency-flags.css';

import i18n from '../src/i18n';

export const decorators = [
  (Story, context) => {
    const { locale } = context.globals;
    
    const messages = i18n(locale);

    return (
      <NeptuneProvider i18n={{ locale, messages }}>
        <Story />
      </NeptuneProvider>
    );
  },
];

export const parameters = { layout: 'centered', actions: { argTypesRegex: '^on.*' } };

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Wise locale',
    defaultValue: 'en-GB',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'de', right: '🇩🇪', title: 'German' },
        { value: 'en-GB', right: '🇬🇧', title: 'English' },
        { value: 'en-US', right: '🇺🇸', title: 'English, American' },
        { value: 'es', right: '🇪🇸', title: 'Spanish' },
        { value: 'fr', right: '🇫🇷', title: 'French' },
        { value: 'hu', right: '🇭🇺', title: 'Hungarian' },
        { value: 'id', right: '🇮🇩', title: 'Indonesian' },
        { value: 'it', right: '🇮🇹', title: 'Italian' },
        { value: 'ja', right: '🇯🇵', title: 'Japanese' },
        { value: 'pl', right: '🇵🇱', title: 'Polish' },
        { value: 'pt', right: '🇧🇷', title: 'Portuguese, Brazilian' },
        { value: 'ro', right: '🇷🇴', title: 'Romanian' },
        { value: 'ru', right: '🇷🇺', title: 'Russian' },
        { value: 'tr', right: '🇹🇷', title: 'Turkish' },
        { value: 'zh-HK', right: '🇭🇰', title: 'Chinese Traditional, Hong Kong' },
      ],
    },
  },
};