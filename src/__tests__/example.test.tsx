import React from 'react';

import { localMessages } from '../i18n';
import ExamplePage from '../pages/public/example';
import { render } from '../test-utils';

describe('/example page', () => {
  it('renders 🦀', () => {
    const { container } = render(
      <ExamplePage selectedProfile={null} locale="en" messages={localMessages.en} />,
    );
    expect(container).toHaveTextContent('Welcome to Crab! 🦀');
  });
});
