import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../../../components/Title"
import ContainerComponent from "./ContainerComponent"
const cx = classnames.bind(css);

const moduleName = "ActivityComponent";

class ActivityComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      nextData: [],
      prevData: []
    };
  }
  componentDidMount () {
    var locationArray = window.location.href.split('/');
    var idOfData = Number(locationArray[locationArray.length-1]);
    axios.get('/activity/'+idOfData)
      .then(res => {
        const data = res.data;
        this.setState({data})
      })
    axios.get('/activity/'+(idOfData+1))
      .then(res => {
        const nextData = res.data;
        this.setState({nextData})
      })
    axios.get('/activity/'+(idOfData-1))
      .then(res => {
        const prevData = res.data;
        this.setState({prevData})
      }) 
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Title 
          title="활동사진"
          url1="communication"
          url2="activity"
          urlName1="소통 공간"
          urlName2="활동사진"/>
        <div className={cx(`${moduleName}-content`)}>
          <ContainerComponent 
            data={this.state.data} 
            nextData={this.state.nextData}
            prevData={this.state.prevData}/>
          <div className={cx(`${moduleName}-content-button`)}>
            <Link to="/communication/activity">
              <button>목록보기</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default ActivityComponent;