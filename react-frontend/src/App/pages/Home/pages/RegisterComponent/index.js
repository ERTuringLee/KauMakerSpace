import React, { Component } from "react";
import { Link } from "react-router-dom"

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../components/Title"

const cx = classnames.bind(css);
const moduleName = "RegisterComponent";

class RegisterComponent extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount () {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
            <div className={cx(`${moduleName}`)}>
                <Title 
                title="회원가입"
                url1="register"
                url2=""
                urlName1="회원가입"
                urlName2=""/>
                <div className={cx(`${moduleName}-content`)}>
                    <div className={cx(`${moduleName}-human`)}>
                        <div className={cx(`${moduleName}-human-content`)}>
                            <div className={cx(`${moduleName}-detail`)}>
                                {/* <img src={cx(`${nameIcon}`)} className={cx(`${moduleName}-pictogram`)}/> */}
                                아이디<br />
                                <input type="text" />
                                <input type="button" value="중복 확인" />
                            </div>
                            <div className={cx(`${moduleName}-detail`)}>
                                {/* <img src={cx(`${nameIcon}`)} className={cx(`${moduleName}-pictogram`)}/> */}
                                비밀번호<br />
                                <input type="password" />
                            </div>
                            <div className={cx(`${moduleName}-detail`)}>
                                {/* <img src={cx(`${nameIcon}`)} className={cx(`${moduleName}-pictogram`)}/> */}
                                비밀번호 확인<br />
                                <input type="password" />
                            </div>
                            <div className={cx(`${moduleName}-detail`)}>
                                {/* <img src={cx(`${nameIcon}`)} className={cx(`${moduleName}-pictogram`)}/> */}
                                닉네임<br />
                                <input type="text" />
                                <input type="button" value="중복 확인" />
                            </div>
                            <div className={cx(`${moduleName}-detail`)}>
                                {/* <img src={cx(`${nameIcon}`)} className={cx(`${moduleName}-pictogram`)}/> */}
                                이름<br />
                                <input type="text" />
                            </div>
                            <div className={cx(`${moduleName}-detail`)}>
                                성별<br/>
                                <input type="radio" name="gender" value="female"/>여성&nbsp;
                                <input type="radio" name="gender" value="male"/>남성
                            </div>
                            <div className={cx(`${moduleName}-detail`)}>
                                전화번호<br />
                                <input type="text" />
                            </div>
                            <div className={cx(`${moduleName}-detail`)}>
                                이메일<br />
                                <input type="text" />
                            </div>
                            <div className={cx(`${moduleName}-detail`)}>
                                주소<br />
                                <input type="text" />
                            </div>
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
                <input type="checkbox" name="agree" value="동의"/>개인정보 수집 및 이용에 동의합니다.
              </div>
            </div>
          </div>
        <div className={cx(`${moduleName}-button`)}>
            <button className={cx(`${moduleName}-button-register`)}>가입하기</button>
            <Link to="/"><button className={cx(`${moduleName}-button-return`)}>돌아가기</button></Link>
        </div>
    </div>
        )
    }
}
export default RegisterComponent;


