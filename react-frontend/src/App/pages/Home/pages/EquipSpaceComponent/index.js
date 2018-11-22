import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios'

import classnames from "classnames/bind";
import Title from "../../components/Title"

// import nameIcon from "src/App/pages/Home/assets/name.png"
import css from "./index.scss";
import { EventEmitter } from "events";
const cx = classnames.bind(css);

const moduleName = "EquipSpaceComponent";

class EquipSpaceComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      agreeValue: false,
      purpose: '',
      space1: false,
      space2: false,
      equip1: false,
      equip2: false,
      equip3: false,
      equip4: false,
      equip5: false,
      equip6: false,
      equip7: false,
      equip8: false,
      address: '',
      email: '',
      phone: '',
      gender1: true,
      gender2: false,
      name: '',
      date: ''
    };
    this.buttonClick = this.buttonClick.bind(this)
    this.agreeCheck = this.agreeCheck.bind(this)
    this.genderCheck = this.genderCheck.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.phoneChange = this.phoneChange.bind(this)
    this.addressChange = this.addressChange.bind(this)
    this.purposeChange = this.purposeChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.equip1Check = this.equip1Check.bind(this)
    this.equip2Check = this.equip2Check.bind(this)
    this.equip3Check = this.equip3Check.bind(this)
    this.equip4Check = this.equip4Check.bind(this)
    this.equip5Check = this.equip5Check.bind(this)
    this.equip6Check = this.equip6Check.bind(this)
    this.equip7Check = this.equip7Check.bind(this)
    this.equip8Check = this.equip8Check.bind(this)
    this.space1Check = this.space1Check.bind(this)
    this.space2Check = this.space2Check.bind(this)
    this.dateChange = this.dateChange.bind(this)
  }
  componentDidMount () {
    document.documentElement.scrollTop = 0;
  }
  buttonClick (event) {
    if (!this.state.agreeValue) {
      alert("개인정보 수집 및 이용에 동의해주십시오")
    } else if (this.state.name===""||this.state.phone===""||this.state.email===""||this.state.address===""){
      alert("인적사항을 작성해주세요")
      document.documentElement.scrollTop = 0;
    } 
    else {
      const user = {
        name: this.state.name,
        gender1: this.state.gender1,
        gender2: this.state.gender2,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
        purpose: this.state.purpose,
        space1: this.state.space1,
        space2: this.state.space1,
        equip1: this.state.equip1,
        equip2: this.state.equip2,
        equip3: this.state.equip3,
        equip4: this.state.equip4,
        equip5: this.state.equip5,
        equip6: this.state.equip6,
        equip7: this.state.equip7,
        equip8: this.state.equip8,
        date: this.state.date
        
      }
      axios.post("/equip_space", {user}).then(
        res => {
          console.log(res)
        }
      )
      alert("신청이 완료되었습니다. 연락처로 연락드리겠습니다.")
    }
  }
  dateChange (event) {
    this.setState({date:event.target.value})
  }
  purposeChange (event) {
    this.setState({purpose:event.target.value})
  }
  addressChange (event) {
    this.setState({address:event.target.value})
  }
  emailChange (event) {
    this.setState({email:event.target.value})
  }
  phoneChange (event) {
    this.setState({phone: event.target.value})
  }
  nameChange (event) {
    this.setState({name: event.target.value})
  }
  genderCheck () {
    this.setState({gender1: !this.state.gender1, gender2: !this.state.gender2})
  }
  agreeCheck () {
    this.setState({agreeValue: !this.state.agreeValue})
  }
  equip1Check () {
    this.setState({equip1: !this.state.equip1})
  }
  equip2Check () {
    this.setState({equip2: !this.state.equip2})
  }
  equip3Check () {
    this.setState({equip3: !this.state.equip3})
  }
  equip4Check () {
    this.setState({equip4: !this.state.equip4})
  }
  equip5Check () {
    this.setState({equip5: !this.state.equip5})
  }
  equip6Check () {
    this.setState({equip6: !this.state.equip6})
  }
  equip7Check () {
    this.setState({equip7: !this.state.equip7})
  }
  equip8Check () {
    this.setState({equip8: !this.state.equip8})
  }
  space1Check () {
    this.setState({space1: !this.state.space1})
  }
  space2Check () {
    this.setState({space2: !this.state.space2})
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Title 
          title="장비&공간 신청"
          url1="equip_space"
          url2=""
          urlName1="장비&공간 신청"
          urlName2=""/>
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-human`)}>
            <div className={cx(`${moduleName}-human-title`)}>
              인적사항
            </div>
            <div className={cx(`${moduleName}-human-content`)}>
              <div className={cx(`${moduleName}-detail`)}>
                {/* <img src={cx(`${nameIcon}`)} className={cx(`${moduleName}-pictogram`)}/> */}
                이름<br />
                <input type="text" value={this.state.name} onChange={this.nameChange}/>
              </div>
              <div className={cx(`${moduleName}-detail`)}>
                성별<br/>
                <input type="radio" name="gender" onChange={this.genderCheck} checked={this.state.gender1}/>여성&nbsp;
                <input type="radio" name="gender" onChange={this.genderCheck} checked={this.state.gender2}/>남성
              </div>
              <div className={cx(`${moduleName}-detail`)}>
                전화번호<br />
                <input type="text" value={this.state.phone} onChange={this.phoneChange}/>
              </div>
              <div className={cx(`${moduleName}-detail`)}>
                이메일<br />
                <input type="text" value={this.state.email} onChange={this.emailChange}/>
              </div>
              <div className={cx(`${moduleName}-detail`)}>
                주소<br />
                <input type="text" value={this.state.address} onChange={this.addressChange}/>
              </div>
            </div>
          </div>
          <div className={cx(`${moduleName}-use`)}>
            <div className={cx(`${moduleName}-use-title`)}>
              사용내역
            </div>
            <div className={cx(`${moduleName}-use-content`)}>
              <div className={cx(`${moduleName}-detail`)}>
                사용할 장비
                <br/>
                <input type="checkbox" name="equip" onChange={this.equip1Check} checked={this.state.equip1}/>아두이노&nbsp;
                <input type="checkbox" name="equip" onChange={this.equip2Check} checked={this.state.equip2}/>메이크블록&nbsp;
                <input type="checkbox" name="equip" onChange={this.equip3Check} checked={this.state.equip3}/>마인드스톰<br />
                <input type="checkbox" name="equip" onChange={this.equip4Check} checked={this.state.equip4}/>레이저커터&nbsp;
                <input type="checkbox" name="equip" onChange={this.equip5Check} checked={this.state.equip5}/>3D프린터&nbsp;
                <input type="checkbox" name="equip" onChange={this.equip6Check} checked={this.state.equip6}/>액자일드론<br />
                <input type="checkbox" name="equip" onChange={this.equip7Check} checked={this.state.equip7}/>스트라이커 드론&nbsp;
                <input type="checkbox" name="equip" onChange={this.equip8Check} checked={this.state.equip8}/>라즈베리 파이&nbsp;

              </div>
              <div className={cx(`${moduleName}-detail`)}>
                사용할 공간
                <br/>
                <input type="checkbox" name="space" onChange={this.space1Check} checked={this.state.space1}/>전자관 108호
                <input type="checkbox" name="space" onChange={this.space2Check} checked={this.state.space2}/>전자관 109호
              </div>
              <div className={cx(`${moduleName}-detail`)}>
                사용 일자 및 시간
                <br/>
                <input type="text" value={this.state.date} onChange={this.dateChange}/>
              </div>
              <div className={cx(`${moduleName}-detail`)}>
                사용할 목적<br/>
                <textarea onChange={this.purposeChange}>{this.state.purpose}</textarea>
              </div>
            </div>
          </div>
          <div className={cx(`${moduleName}-agree`)}>
            <div className={cx(`${moduleName}-agree-title`)}>
              개인정보 수집 동의
            </div>
            <div className={cx(`${moduleName}-agree-content`)}>
              <div className={cx(`${moduleName}-content-detail`)}>
              ‘KAU 드론 & 공예 메이커 스페이스’(이하 센터)는 사용자의 개인정보를 중요시하며, “정보통신망 이용촉진 및 정보보호에 관한 법률”을 준수하고 있습니다. 
              <br />「개인정보보호법」 에 따라 장비 및 공간 관리를 위해 사용자의  개인정보를 수집·이용하는 경우에는 사용자 본인 동의를 얻어야 합니다.
              <br />이에 사용자 본인은 아래의 내용과 같이 센터가 본인의 개인정보를 각각 수집 .이용하는 것을 동의합니다.
              </div>
              <div className={cx(`${moduleName}-content-detail`)}>
              [개인정보 수집 항목]<br />
              가. 개인식별정보(이름, 성별, 전화번호, 이메일, 주소 등)
              </div>
              <div className={cx(`${moduleName}-content-detail`)}>
              [개인정보 이용목적]<br />
              장비 및 공관 관리를 위해 개인정보 수집.이용합니다.<br />
              위 개인정보 수집·이용에 관한 동의는장비 및 공간 사용을 위하여 필수적이므로, 위 사항에 동의하셔야 장비 및 공간을 사용할 수 있습니다.<br />
              </div>
              <div className={cx(`${moduleName}-content-detail`)}>
                <input type="checkbox" name="agree" onChange={this.agreeCheck} checked={this.state.agreeValue}/>개인정보 수집 및 이용에 동의합니다.
              </div>
              <div className={cx(`${moduleName}-content-submit`)}>
                <button onClick={this.buttonClick} type="button" className={cx(`${moduleName}-submit-button`)}>신청하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EquipSpaceComponent;