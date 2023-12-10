import { render } from '@testing-library/react';

import DefinitionTooltips from './definition-tooltips';

describe('DefinitionTooltips', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefinitionTooltips />);
    expect(baseElement).toBeTruthy();
  });
});
