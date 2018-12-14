import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../components/Title";
import AdminBar from "../../../components/AdminBar";

const cx = classnames.bind(css);
const moduleName = 'FestivalManageComponent';

class FestivalManageComponent extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        
      ],
      date:new Date(),
      page:[]
    }
    this.buttonClick = this.buttonClick.bind(this)
    this.monthPrev = this.monthPrev.bind(this)
    this.monthNext = this.monthNext.bind(this)
  }
  buttonClick (event) {
    const filterData = this.state.data.filter((post) => {
      return post.id === Number(event.target.value);
    })
    if (filterData[0].register===filterData[0].original) {
      alert("신청이 마감되었습니다.")
    } else {
      window.location.href = "/festival/register/"+event.target.value
    }
  }
  monthPrev () {
    this.setState({data:[]})
    let dayOfMonth = this.state.date.getMonth();
    this.state.date.setMonth(dayOfMonth-1)
    axios.get('/festival')
        .then(res => {
          const rawData = res.data;
          const data = rawData.filter((post)=>{
            let date1 = post.f_time1.split('.')
            let date2 = post.f_time2.split('.')
            let date3 = post.apply1.split('.')
            let date4 = post.apply2.split('.')
            let nowMonth = this.state.date.getMonth() + 1
            return ((Number(date1[1]) === Number(nowMonth))||(Number(date2[1]) === Number(nowMonth))||(Number(date3[1]) === Number(nowMonth))||(Number(date4[1]) === Number(nowMonth)))
          })
          this.setState({data})
          let lastPage = Math.ceil(data.length / 4)
          console.log(lastPage)
          let page = ""
          for (var i=1; i<=lastPage; i++) {
            if (i!==lastPage){
              page = page + i +","
            }else {
              page = page + i
            }
          }
          page = page.split(',');
          this.setState({page});
        })

  }
  monthNext () {
    this.setState({data:[]});
    let dayOfMonth = this.state.date.getMonth();
    this.state.date.setMonth(dayOfMonth+1);
    axios.get('/festival')
      .then(res => {
        const rawData = res.data;
        const data = rawData.filter((post)=>{
          let date1 = post.f_time1.split('.')
          let date2 = post.f_time2.split('.')
          let date3 = post.apply1.split('.')
          let date4 = post.apply2.split('.')
          let nowMonth = this.state.date.getMonth() + 1
          return ((Number(date1[1]) === Number(nowMonth))||(Number(date2[1]) === Number(nowMonth))||(Number(date3[1]) === Number(nowMonth))||(Number(date4[1]) === Number(nowMonth)))
        })
        this.setState({data})
        let lastPage = Math.ceil(data.length / 4)
        console.log(lastPage)
        let page = ""
        for (var i=1; i<=lastPage; i++) {
          if (i!==lastPage){
            page = page + i +","
          } else {
            page = page + i
          }
        }
        page = page.split(',')
        this.setState({page})
      })
  }
  componentDidMount () {
    let date = new Date();
    this.setState({date: date});
    let self = this;
    async function sessionCheck () {
      if (self.state.sessionData[0] ==='admin') {
        await axios.get('/festival')
        .then(res => {
          const rawData = res.data;
          const data = rawData.filter((post)=>{
            let date1 = post.f_time1.split('.')
            let date2 = post.f_time2.split('.')
            let date3 = post.apply1.split('.')
            let date4 = post.apply2.split('.')
            let nowMonth = date.getMonth() + 1
            return ((Number(date1[1]) === Number(nowMonth))||(Number(date2[1]) === Number(nowMonth))||(Number(date3[1]) === Number(nowMonth))||(Number(date4[1]) === Number(nowMonth)))
          })
          this.setState({data})
          let lastPage = Math.ceil(data.length / 4)
          console.log(lastPage)
          let page = ""
          for (var i=1; i<=lastPage; i++) {
            if (i!==lastPage){
              page = page + i +","
            }else {
              page = page + i
            }
          }
          page = page.split(',')
          this.setState({page})
        })
      } else if(self.state.sessionData[0] !== null) {
        window.location.href = '/'
      } else {
        window.location.href = '/login'
      }
    }
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <AdminBar />
        <Title
          title="교육 관리"
          url1="admin/education"
          url2=""
          urlName1="교육 관리"
          urlName2=""/>
       <div className={cx(`${moduleName}-month`)}>
          <div className={cx(`${moduleName}-month-container`)}>
            <div className={cx(`${moduleName}-month-prev-next`)} onClick={this.monthPrev}>
              &lt;
            </div>
            <div className={cx(`${moduleName}-month-current`)} onClick={this.monthNext}>
            {this.state.date.getFullYear()}년 {this.state.date.getMonth()+1}월
            </div>
            <div className={cx(`${moduleName}-month-prev-next`)} onClick={this.monthNext}>
              &gt;
            </div>
          </div>
        </div>
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
                  <h5>비용: <span className={cx(`${moduleName}-card-description-content-type1`)}>{post.type1}</span><span className={cx(`${moduleName}-card-description-content-type2`)}>{post.type2}</span></h5>
                  <h5>{post.remain}명 남음 ({post.register}/{post.original})</h5>
                </div>
                <div className={cx(`${moduleName}-card-description-button`)}>
                  <Link to={`/festival/detail/${post.id}`}><button className={cx(`${moduleName}-card-description-button-detail`)}>수정하기</button></Link><button onClick={this.buttonClick} className={cx(`${moduleName}-card-description-button-apply`)} value={post.id}>삭제하기</button>
                </div>
              </div>
            </div>)}
          </div>
        </div>
        <div className={cx(`${moduleName}-pagination`)}>
          <div className={cx(`${moduleName}-pagination-container`)}>
          <div className={cx(`${moduleName}-pagination-detail`)}>&lt;</div>
          {this.state.page.map((post)=><div className={cx(`${moduleName}-pagination-detail`)} value={post}>{post}</div>)}
          <div className={cx(`${moduleName}-pagination-detail`)}>&gt;</div>
          </div>
        
        </div>
      </div>
    );
  }
}

export default FestivalManageComponent;