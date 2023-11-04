
import React from "react"

import MainLayout from "app/layouts/mainLayout";

import {HeaderRow} from 'app/components/common'
import { MainContainer,MainContainerBody,
    HeadAction, ServiceTitle,
   FormContainer,Row,HalfRow
} from './demo-setup.elements'
import { Caption } from "#components";

import Button from "app/components/button/button.component";
export default class ArticleListingTemplate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [] // this is a good place to set Initial value
    };
  }

  render(){
    return(
      <MainLayout>
        <MainContainer>
          <MainContainerBody>
              <HeaderRow>
                <ServiceTitle>Demo Serivesaaa: <label>Setup</label></ServiceTitle>
                <HeadAction>
                  <Button
                    caption="Back"
                    href="./"
                    buttonType="default"
                  />
                </HeadAction>
              </HeaderRow>
             <FormContainer>
              <Row direction="row">
                <HalfRow>
                  <Caption>xxxxx</Caption>
                </HalfRow>
                <HalfRow>
                  <input type="text" />
                </HalfRow>
                </Row>
              <Row>tes2</Row>
              <Row>tes3</Row>
              <Row>tes4</Row>
              <Row>tes5</Row>
             </FormContainer>
          </MainContainerBody>
        </MainContainer>
      </MainLayout>
    )
  }
}