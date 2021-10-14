import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import '@testing-library/jest-dom/extend-expect';

/**
 * We define a custom render method that can be used to wrap our components in global context
 * providers, such as for translations. This reduces boilerplate in our tests.
 * More information: https://testing-library.com/docs/react-testing-library/setup/#custom-render
 *
 * If you want to import test-utils without using relative imports you can customise your Jest
 * and Typescript config: https://testing-library.com/docs/react-testing-library/setup/#configuring-jest-with-test-utils
 */

const AllTheProviders: FC = ({ children }) => {
  return (
    // <ThemeProvider>
    //   <TranslationProvider messages={defaultStrings}>
    <>{children}</>
    //   </TranslationProvider>
    // </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options: RenderOptions = {}): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
