
import React, { useEffect, useState } from "react";

import MainLayout from "app/layouts/mainLayout";

import { HeaderRow, ServiceTitle, Row } from 'app/components/common'
import {
  MainContainer, MainContainerBody,
  HeadAction
} from './demo-setup.elements'


import { ImagePicker, Button, FormControl } from 'app/components';



export default class ArticleListingTemplate extends React.Component {
  constructor(props) {
    super(props)

    
    this.state = {
      data: [],
      category_image:'',
      categoryImageFile:''

    };

    this.setCategoryImage = this.setCategoryImage.bind(this)
    this.setCategoryImageFile = this.setCategoryImageFile.bind(this)

  }
// state management
  setCategoryImage(value) {
    this.setState({ count: value });
  }

  setCategoryImageFile(value) {
    this.setState({ categoryImageFile: value });
  }
// end state management

  render() {
    
    return (
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

            <FormControl.Container>

              <Row direction="column" justifyContent='center' alignItems="center">
                <Row className='halfWidth'>
                  <FormControl.Group>
                    <FormControl.Caption>* Title</FormControl.Caption>
                    <FormControl.Input $type='text' />
                  </FormControl.Group>
                </Row>
                <Row className='halfWidth'>
                  <FormControl.Group>
                    <FormControl.Caption>* Cover Image</FormControl.Caption>
                    <Row>
                      <ImagePicker  
                          setCategoryImage={this.setCategoryImage}
                          setImageFile={this.setCategoryImageFile}
                      />
                    </Row>

                  </FormControl.Group>
                </Row>
              </Row>

              <Row direction="column" justifyContent='center' alignItems="center">
                <Row className='halfWidth'>
                  <FormControl.Group>
                    <FormControl.Caption>* Intro Description</FormControl.Caption>
                    <FormControl.Input $type='text' />
                  </FormControl.Group>
                </Row>
                <Row className='halfWidth'>
                  <FormControl.Group>
                    <FormControl.Caption>* Detail</FormControl.Caption>
                    <FormControl.TextArea />
                  </FormControl.Group>
                </Row>
              </Row>

              <Row direction="column" justifyContent='center' alignItems="center">
                <Row className='halfWidth'>
                  <FormControl.Group className='alignRight'>
                    <Button
                      caption="Save"
                      href="./"
                      buttonType="default"
                    />
                  </FormControl.Group>
                </Row>
              </Row>


            </FormControl.Container>

          </MainContainerBody>
        </MainContainer>
      </MainLayout>
    )
  }
}
