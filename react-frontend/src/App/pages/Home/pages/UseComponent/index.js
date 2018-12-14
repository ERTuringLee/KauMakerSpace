import React, { Component } from "react";
// import { Link } from "react-router-dom"

import classnames from "classnames/bind";

import css from "./index.scss";
import Bar from "../../components/Bar"
import Title from "../../components/Title"
import Content from "./ContentComponent"
import Instrument from "./InstrumentComponent"

const cx = classnames.bind(css);
const moduleName = "UseComponent";

class UseComponent extends Component {
  constructor() {
    super();
    this.state = {
      
      instrumentData:[

      ]
    }
  }
  componentDidMount () {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Bar/>
        <Title 
          title="이용 안내"
          url1="use"
          url2=""
          urlName1="이용 안내"
          urlName2=""/>
        <Content 
          individualTitle="메이커스페이스 공간"
          background="rgb(190, 179, 179)"/>
        <Content individualTitle="구비 장비"
          background="rgb(255,255,255)"/>
        <Instrument
          individualTitle="이용 방법"
          background="rgb(190, 179, 179)"
          weekTime1="09:00"
          weekTime2="22:00"
          weekendTime1="10:00"
          weekendTime2="17:00"
          breakTime1="12:00"
          breakTime2="13:00"
          methodImage1="/assets/check.png"
          methodTitle1="장비/공간 확인"
          methodContent1="장비 안내/공간 안내 페이지에 들어가서 사용할 장비 및 공간을 확인합니다."
          methodImage2="/assets/use_register.png"
          methodTitle2="이용 예약"
          methodContent2="사용할 장비 및 공간에 오른쪽에 있는 예약버튼을 클릭합니다."
          methodImage3="/assets/visit_use.png"
          methodTitle3="방문 사용"
          methodContent3="예약한 시간에 맞추어서 방문해 사용합니다."
          /> 
      </div>
    )
  }
}
export default UseComponent

