//Libraries
import React from 'react';
import { mount } from 'enzyme';

// Components
import Main from '..';
import { List } from '../components/List';
import { SelectInput } from '../components/SelectInput';

describe('Main', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Main />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the inner List component', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.find(List).length).toEqual(1);
  });

  it('renders the inner SelectInput component', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.find(SelectInput).length).toEqual(1);
  });
});
