import * as React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Cities
  from '../Cities';


describe('Cities Component', () => {

  beforeEach(() => {});

  test('snapshot loading pagination', () => {

    const component = shallow(
      <Cities/>
    );
    expect(toJSON(component)).toMatchSnapshot();
  });
});
