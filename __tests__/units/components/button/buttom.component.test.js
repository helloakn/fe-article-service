import { fireEvent, render, screen } from "@testing-library/react";

import 'jest-styled-components'
import renderer from 'react-test-renderer'
import Button from 'app/components/button/button.component'

describe('button.elements', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
}); 
  test('TEST "MainContainer" component SHOULD include color red', async()=>{
    // GIVEN
    const isShow = true
    const backgroundColor = 'primary'
    // WHEN
    const tree = renderer.create(
      <Button 
        isShow={isShow}
        backgroundColor={backgroundColor}
        onClick={()=>{}}
        caption='hello'
      />
    ).toJSON()
    // THEN
    expect(tree).toHaveStyleRule('background-color', '#0dcaf0')
  })
})