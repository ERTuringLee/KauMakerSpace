import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from 'axios';

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../components/Title"
const cx = classnames.bind(css);

const moduleName = "FestivalComponent";

class FestivalComponent extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        
      ],
      address: '',
      email: '',
      phone: '',
      name: '',
      gender1: true,
      gender2: false,
      agreeValue: false
    };
    this.agreeCheck = this.agreeCheck.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
    this.genderCheck = this.genderCheck.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.phoneChange = this.phoneChange.bind(this)
    this.addressChange = this.addressChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
  }
  buttonClick (event) {
    
    if (this.state.name!==""&&this.state.phone!==""&&this.state.email!==""&&this.state.address!=="") {
      let locationArray = window.location.href.split('/')

      const user = {
        id: locationArray[locationArray.length-1],
        gender1: this.state.gender1,
        gender2: this.state.gender2,
        name: this.state.name,
        phone: this.state.phone,
        address: this.state.address,
        email: this.state.email
      }
      axios.post("/festival_register", {user}).then(
        res => {
          console.log(res)
        }
      )
      alert("신청이 완료되었습니다.")
      window.location.href = "/festival"
    } else {
      alert("올바르게 작성해주세요")
    }
  }
  agreeCheck () {
    this.setState({agreeValue: !this.state.agreeValue})
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
  componentDidMount () {
    var locationArray = window.location.href.split('/')

    axios.get('/festival/'+locationArray[locationArray.length-1])
        .then(res => {
          const data = res.data
          this.setState({data})
        })
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Title 
          title="행사 안내"
          url1="festival"
          url2=""
          urlName1="행사 안내"
          urlName2=""/>
        
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-content-container`)}>
          {this.state.data.map((post) =>
            <div className={cx(`${moduleName}-content-card`)}>
              <div className={cx(`${moduleName}-card-image`)}>
                <img src={post.src} alt="카드이미지"/>
              </div>
              <div className={cx(`${moduleName}-card-description`)}>
                <div className={cx(`${moduleName}-card-description-title`)}>
                  <h1>{post.title}</h1>
                </div>
                <div className={cx(`${moduleName}-card-description-content`)}>
                  <h5>신청기간: {post.apply1} ~ {post.apply2}</h5>
                  <h5>행사기간: {post.f_time1} ~ {post.f_time2}</h5>
                  <h5>유형: <span className={cx(`${moduleName}-card-description-content-type1`)}>{post.type1}</span><span className={cx(`${moduleName}-card-description-content-type2`)}>{post.type2}</span></h5>
                  <h5>{post.remain}명 남음 ({post.register}/{post.original})</h5>
                </div>
              </div>
            </div>)}
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
          <div className={cx(`${moduleName}-human`)}>
            <div className={cx(`${moduleName}-human-title`)}>
              결제 정보
            </div>
            <div className={cx(`${moduleName}-human-content`)}>
              <div className={cx(`${moduleName}-detail`)}>
                결제 가격<br />
                {this.state.data.map((post) =>post.cost)}원
              </div>
            </div>
             <div className={cx(`${moduleName}-human-content`)}>
             <div className={cx(`${moduleName}-detail`)}>
               결제 정보<br />
               무통장 입금: 우리은행 1234-456-789012
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
              <div className={cx(`${moduleName}-button`)}>
                <button className={cx(`${moduleName}-button-register`)} onClick={this.buttonClick}>신청하기</button>
                <Link to="/festival"><button className={cx(`${moduleName}-button-return`)}>돌아가기</button></Link>
            </div>
            </div>
          </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default FestivalComponent;