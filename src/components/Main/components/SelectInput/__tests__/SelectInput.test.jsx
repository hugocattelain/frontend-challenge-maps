//Libraries
import React from 'react';
import { mount } from 'enzyme';

// Components
import { SelectInput } from '..';

describe('SelectInput', () => {
  const props = {
    options: [
      { text: 'All', value: 'all' },
      { text: 'Pizza', value: 'pizza' },
      { text: 'Burger', value: 'burger' },
      { text: 'Sushi', value: 'sushi' },
    ],
    value: '',
    onChange: jest.fn(value => value),
  };

  it('should render correctly', () => {
    const wrapper = mount(<SelectInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
