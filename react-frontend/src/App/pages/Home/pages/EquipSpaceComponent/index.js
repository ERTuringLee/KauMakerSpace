import React, { Component } from "react";
import {Link} from "react-router-dom";

import classnames from "classnames/bind";

// import nameIcon from "src/App/pages/Home/assets/name.png"
import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "EquipSpaceComponent";

class EquipSpaceComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-title`)}>
          <div className={cx(`${moduleName}-title-text`)}>
            장비&사용 신청
          </div>
          <div className={cx(`${moduleName}-title-category`)}>
            <Link to="/">HOME</Link> > <Link to="/equip_space">장비&공간 신청</Link>
          </div>
        </div>
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-human`)}>
            <div className={cx(`${moduleName}-human-title`)}>
              인적사항
            </div>
            <div className={cx(`${moduleName}-human-content`)}>
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
          <div className={cx(`${moduleName}-use`)}>
            <div className={cx(`${moduleName}-use-title`)}>
              사용내역
            </div>
            <div className={cx(`${moduleName}-use-content`)}>
              <div className={cx(`${moduleName}-detail`)}>
                사용할 장비
                <br/>
                <input type="checkbox" name="equip" value="arduino"/>아두이노
                <input type="checkbox" name="equip" value="makeblock"/>메이크블록
                <input type="checkbox" name="equip" value="mindstorm"/>마인드스톰<br />
                <input type="checkbox" name="equip" value="rasercutter"/>레이저커터
                <input type="checkbox" name="equip" value="3d_printer"/>3D프린터
                <input type="checkbox" name="equip" value="axail_drone"/>액자일드론<br />
                <input type="checkbox" name="equip" value="striker_drone"/>스트라이커 드론
                <input type="checkbox" name="equip" value="raspberry_pi"/>라즈베리 파이

              </div>
              <div className={cx(`${moduleName}-detail`)}>
                사용할 공간
                <br/>
                <input type="checkbox" name="space" value="108"/>전자관 108호
                <input type="checkbox" name="space" value="109"/>전자관 109호
              </div>
              <div className={cx(`${moduleName}-detail`)}>
                사용할 목적<br/>
                <textarea></textarea>
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
              <div className={cx(`${moduleName}-content-submit`)}>
                <button type="button" className={cx(`${moduleName}-submit-button`)}>신청하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EquipSpaceComponent;