import { Input, Button, Modal } from 'antd'
import './MenuUser.scss'

export default function MenuUser() {
  return (
    <div className="menu-user">
      {/* <!-- 登录后 --> */}
      {/* <div v-if="user.userId" className="menu-user__user">
        <img className="menu-user__avatar" src="user.avatarUrl" alt="" />
        <p className="menu-user__name">
          {{ user.nickname }}
        </p>
      </div> */}

      {/* <!-- 登录前 --> */}
      <div v-else className="menu-user__user">
        <img
          className="menu-user__avatar"
          src="http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg"
        />
        <p className="menu-user__name">未登录</p>
      </div>

      {/* <!-- UID登录 --> */}
      <Modal title="登录" width="500px">
        <div className="">
          <Input v-model="uid" placeholder="请输入您的网易云uid" />
          <div className="menu-user__uid">
            <p>
              1、请点我
              <a href="http://music.163.com" target="_blank" rel="noreferrer">
                (http://music.163.com)
              </a>
              打开网易云音乐官网
            </p>
            <p>2、点击页面右上角的“登录”</p>
            <p>3、点击您的头像，进入我的主页</p>
            <p>4、复制浏览器地址栏 /user/home?id= 后面的数字（网易云 UID）</p>
          </div>
          <div className="menu-user__uid">
            <Button type="primary" className="menu-user__login">
              登录
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
