import React, { useState } from "react"

export default class MainLayoutController extends React.Component {
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