import React, { useState } from "react"
import MainLayoutTemplate from "./mainLayout.template";
export default class MainLayout extends MainLayoutTemplate {
  constructor(props) {
    super(props);
    this.state = {
      isShowNoti: false // this is a good place to set Initial value
    };
    this.notificationClick = this.notificationClick.bind(this);
  }
  notificationClick() {
    this.setState({ isShowNoti: !this.state.isShowNoti })
  }
}