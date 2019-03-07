import React from 'react';
import { shallow } from 'enzyme';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  const props = {
    label: 'Label',
    value: 'Value',
    name: 'Name',
    onChange: jest.fn()
  };
  const component = shallow(<TextInput {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call onChange when value is changed', () => {
    component
      .find('input')
      .simulate('change', { target: { name: 'Name', value: 'Changed value' } });
    expect(props.onChange).toBeCalledTimes(1);
    expect(props.onChange).toBeCalledWith('Name', 'Changed value');
  });
});
