
import React from "react"

import MainLayout from "app/layouts/mainLayout";

import { MainContainer,MainContainerBody,
   HeadRow, ATab, ServiceTitle,
  Table
} from './articleListing.elements'


export default class ArticleListingTemplate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [] // this is a good place to set Initial value
    };
  }

  render(){

    const rows = this.state.data.map(x=>{
      return (
        <tr key={'tr'+x.id}>
          <td>{x.id}</td>
          <td>{x.name}</td>
          <td>{x.categories}</td>
          <td>{x.created_at}</td>
          <td>{x.updated_at}</td>
          <td>action</td>
        </tr>
      )
    })

    return(
      <MainLayout>
        <MainContainer>
          <MainContainerBody>
              <HeadRow>
                <ServiceTitle>Demo Serive : <label>Listing</label></ServiceTitle>
                <ATab href='article/new'> New  </ATab>
              </HeadRow>
              <Table>
                <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Categories</th>
                      <th>Created At</th>
                      <th>Updated At</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
              </Table>
          </MainContainerBody>
        </MainContainer>
      </MainLayout>
    )
  }
}