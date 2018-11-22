import React, { Component } from "react";
import axios from 'axios';

import classnames from "classnames/bind";

import maker_space from "src/App/pages/Home/assets/KAU_DRONE.jpg";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "MainComponent";

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      data1: [
       
      ],
      data2: [
        
      ],
      data3: [
        
      ]

    };
  }
  componentDidMount () {
      let date = new Date();
      axios.get('/festival')
        .then(res => {
          const rawData = res.data.reverse();
          const data = rawData.filter((post)=>{
            let date1 = post.f_time1.split('.')
            let date2 = post.f_time2.split('.')
            let date3 = post.apply1.split('.')
            let date4 = post.apply2.split('.')
            let nowMonth = date.getMonth() + 1
            return ((Number(date1[1]) === Number(nowMonth))||(Number(date2[1]) === Number(nowMonth))||(Number(date3[1]) === Number(nowMonth))||(Number(date4[1]) === Number(nowMonth)))
          })
          let data1 = [];
          if (data.length >3) {
            for(var i=0;i<3; i++) {
              data1.push(data[i])
            }
          }else {
            for(var i=0;i<data.length; i++) {
              data1.push(data[i])
            }
          }
          this.setState({data1})
        })
      axios.get('/goods')
        .then(res => {
          const data = res.data.reverse();
          let data2 = [];
          if (data.length >3) {
            for(var i=0;i<3; i++) {
              data2.push(data[i])
            }
          }else {
            for(var i=0;i<data.length; i++) {
              data2.push(data[i])
            }
          }
          this.setState({data2})
        })
      axios.get('/activity')
      .then(res => {
        const data = res.data.reverse();
        let data3 = [];
        if (data.length >3) {
          for(var i=0;i<3; i++) {
            data3.push(data[i])
          }
        }else {
          for(var i=0;i<data.length; i++) {
            data3.push(data[i])
          }
        }
        this.setState({data3})
      })
      document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-box`)}>
          <div className={cx(`${moduleName}-introduce`)}
          style={{
            backgroundImage: "url("+cx(`${maker_space}`)+")",
          }}
          >
            <div className={cx(`${moduleName}-content-text`)}>
              <h1>KAU 드론&공예</h1>
              <h1>메이커 스페이스</h1>
            </div>
          </div>
        </div>
        <div className={cx(`${moduleName}-container`)}>
          <div className={cx(`${moduleName}-container-title`)}>
            WHERE WE ARE
          </div>
          <div className={cx(`${moduleName}-container-map`)}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.3145616407753!2d126.86430927243846!3d37.60085461240559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9a2b0774ff21%3A0x5e9b0ff824b2ac47!2z6rOg7JaR7IucIO2YhOyynOuPmSDtlZzqta3tla3qs7XrjIDtlZnqtZAg7KCE7J6Q6rSA!5e0!3m2!1sko!2skr!4v1542334646140" width="600" height="450" frameborder="0" style={{width: '70vw', height: '40vw'}} allowfullscreen></iframe>
          </div>
          <div className={cx(`${moduleName}-container-content`)}>
            KAU 드론 & 공예 메이커스페이스
          </div>
        </div>
        {/* <div className={cx(`${moduleName}-box`)}>
          <div className={cx(`${moduleName}-content`)}
          style={{
            backgroundImage: "url("+cx(`${maker_space_in}`)+")",
          }}
          >
            <div className={cx(`${moduleName}-detail-container`)}>
              <div className={cx(`${moduleName}-detail-title`)}>
                <h1>이달의 행사</h1>
                <div className={cx(`${moduleName}-more`)}>
                  <h6><Link to="/festival">+더보기</Link></h6>
                </div>
              </div>
              <div className={cx(`${moduleName}-detail-content`)}>
                {this.state.data1.map((post) =><Link to={`/festival/detail/${post.id}`}><div className={cx(`${moduleName}-detail-content-card`)}>
                  <div className={cx(`${moduleName}-detail-content-card-image`)}>
                    <img src={post.src} alt="이미지"></img>
                  </div>
                  <div className={cx(`${moduleName}-detail-content-card-image-content`)}>
                    <h5>
                      <span className={cx(`${moduleName}-detail-content-card-image-content-type1`)}>{post.type1}</span>
                      <span className={cx(`${moduleName}-detail-content-card-image-content-type2`)}>{post.type2}</span>
                      <span className={cx(`${moduleName}-detail-content-card-image-content-time1`)}>{post.f_time1}</span>
                      <span>~</span>
                      <span className={cx(`${moduleName}-detail-content-card-image-content-time2`)}>{post.f_time2}</span>
                    </h5>
                    <h5>{post.title}</h5>
                  </div>
                </div></Link>)}
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className={cx(`${moduleName}-box`)}>
          <div className={cx(`${moduleName}-content`)}
            style={{
              backgroundColor: 'white',
            }}
          >
            <div className={cx(`${moduleName}-detail-container`)}>
              <div className={cx(`${moduleName}-detail-title`)}>
                <h1>이달의 교육</h1>
                <div className={cx(`${moduleName}-more`)}>
                  <h6><Link to="/goods">+더보기</Link></h6>
                </div>
              </div>
              <div className={cx(`${moduleName}-detail-content`)}>
                {this.state.data2.map((post) =><Link to={`/goods/${post.id}`}><div className={cx(`${moduleName}-detail-content-card`)}>
                  <div className={cx(`${moduleName}-detail-content-card-image`)}>
                    <img src={post.url} alt="이미지"></img>
                  </div>
                  <div className={cx(`${moduleName}-detail-content-card-image-content`)}>
                    <h5>{post.title}</h5>
                    <h5>메이커: {post.writer}</h5>
                  </div>
                </div></Link>)}
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className={cx(`${moduleName}-box`)}>
          <div className={cx(`${moduleName}-content`)} style={{ backgroundColor: 'rgb(240,240,240)'}}>
            <div className={cx(`${moduleName}-detail-container`)}>
              <div className={cx(`${moduleName}-detail-title`)}>
                <h1>활동 사진</h1>
                <div className={cx(`${moduleName}-more`)}>
                  <h6><Link to="/communication/activity">+더보기</Link></h6>
                </div>
              </div>
              <div className={cx(`${moduleName}-detail-content`)}>
                {this.state.data3.map((post) =><Link to={`/communication/activity/${post.id}`}><div className={cx(`${moduleName}-detail-content-card`)}>
                  <div className={cx(`${moduleName}-detail-content-card-image`)}>
                    <img src={post.url} alt="이미지"></img>
                  </div>
                  <div className={cx(`${moduleName}-detail-content-card-image-content`)}>
                    <h5>{post.title}</h5>
                  </div>
                </div></Link>)}
              </div>
            </div>
          </div>
        </div> */}
      </div>  
    );
  }
}

export default MainComponent;
