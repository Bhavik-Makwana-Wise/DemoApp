import { Alert, Sentiment } from '@transferwise/components';
import { Profile } from '@transferwise/crab/lib/middlewares/profiles';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

export type ExampleAlertProps = {
  selectedProfileId?: Profile['id'];
};

const ExampleAlert: FC<ExampleAlertProps> = ({ selectedProfileId }) => {
  const intl = useIntl();

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ margin: '40px auto', maxWidth: 500 }}>
      <Alert
        message={intl.formatMessage(
          {
            id: 'crab-template.example-alert.message',
            defaultMessage: 'Welcome to Crab! 🦀 Selected profile: {selectedProfileId}',
          },
          {
            selectedProfileId,
          },
        )}
        type={Sentiment.NEUTRAL}
        action={{
          text: intl.formatMessage({
            id: 'crab-template.example-alert.action',
            defaultMessage: 'Learn more',
          }),
          href: 'https://github.com/transferwise/crab/wiki',
        }}
      />
    </div>
  );
};

export default ExampleAlert;
