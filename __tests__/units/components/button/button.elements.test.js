import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { MainContainer } from 'app/components/button/button.elements'

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
      <MainContainer 
        isShow={isShow}
        backgroundColor={backgroundColor}
        onClick={()=>{}}
      />
    ).toJSON()
    // THEN
    expect(tree).toHaveStyleRule('background-color', 'var(--primary-bg-color)')
  })
})