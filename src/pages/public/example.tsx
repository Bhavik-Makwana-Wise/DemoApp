import { Provider as NeptuneProvider } from '@transferwise/components';
import { Profile } from '@transferwise/crab/lib/middlewares/profiles';
import React, { FC } from 'react';

import ExampleAlert from '../../components/ExampleAlert';
import { CrabGetServerSideProps } from '../../crab-types';
import i18n from '../../i18n';

export type ExamplePageProps = {
  selectedProfile: Profile | null;
  locale: string;
  messages: Record<string, string>;
};

const ExamplePage: FC<ExamplePageProps> = ({ locale, messages, selectedProfile }) => {
  return (
    <NeptuneProvider i18n={{ locale, messages }}>
      <ExampleAlert selectedProfileId={selectedProfile?.id} />
    </NeptuneProvider>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: CrabGetServerSideProps<ExamplePageProps> = async (context) => {
  const { selectedProfile, locale } = context.res.locals;

  return {
    props: {
      locale,
      selectedProfile: selectedProfile || null,
      messages: i18n(locale),
    },
  };
};

export default ExamplePage;
