import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CircleBlink from '../src/circleBlink.js';

describe('CircleBlink Test Cases', function() {
  it('Should render the component', function() {
    let wrapper = shallow(<CircleBlink/>);
    expect(wrapper.length).toBe(1);
  });
});
