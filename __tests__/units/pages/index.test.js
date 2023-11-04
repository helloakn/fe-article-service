import { fireEvent, render, screen } from "@testing-library/react";

import MainLayout from 'app/layouts/mainLayout';
import DemoListing from 'app/pages'

describe('DemoListing', ()=>{
  test('', async ()=>{
    expect(DemoListing).toBeDefined()
  })

  test('TEST "DemoListing" component, SHOULD logo defined WHEN render', async()=>{
    // GIVEN
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .map(x => ({
          id: x, name: 'name',
          categories: 'categories',
          created_at: (new Date()).toDateString(),
          updated_at: (new Date()).toDateString(),
          action: 'aaa'
        })
      )

    // WHEN
    render(<DemoListing data={data} />)
   
    const LoGO = screen.getByRole('img', {name: 'LoGO',})
    // console.error('demoListing',demoListing)
    // console.error('heading',heading)
    // THEN
    

    expect(LoGO).toBeInTheDocument()
    expect(LoGO).toBeDefined()
  })
})