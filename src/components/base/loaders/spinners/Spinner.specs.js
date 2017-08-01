/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('../../../../../public/images/spinner.svg', () => ({}));

import Spinner from './Spinner';

describe('spinner component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Spinner className="foo bar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
