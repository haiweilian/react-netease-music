import './MenuUser.scss'
import { Input, Button, Modal } from 'antd'
import { useState, useEffect } from 'react'
import { useLocalStorageState } from 'ahooks'
import { store, SET_USER } from '~/store'
import { GLOBAL_UID_KEY } from '~/utils/constant'
import { getUserDetail } from '~/api/user'
import type { IUser } from '~/types'

export default function MenuUser() {
  /**
   * 用户登录，这里还不是真正的账号登录
   */
  const [user, setUser] = useState<Partial<IUser>>({})
  const [loginVisible, setLoginVisible] = useState(false)
  const [uid, setUid] = useLocalStorageState(GLOBAL_UID_KEY)
  const login = async () => {
    const data = await getUserDetail({ uid })
    setUser(data)
    setLoginVisible(false)
    store.dispatch({
      type: SET_USER,
      value: data,
    })
  }
  useEffect(() => {
    uid && login()
  }, [])

  /**
   * 退出登录
   */
  const logout = async () => {
    Modal.confirm({
      title: '提示',
      content: '确定退出登录',
      onOk() {
        setUid('')
        setUser({})
        store.dispatch({
          type: SET_USER,
          value: {},
        })
      },
    })
  }

  return (
    <div className="menu-user">
      {user.userId ? (
        /* <!-- 登录后 --> */
        <div className="menu-user__user" onClick={logout}>
          <img className="menu-user__avatar" src={user.avatarUrl} alt="" />
          <p className="menu-user__name">{user.nickname}</p>
        </div>
      ) : (
        /* <!-- 登录前 --> */
        <div className="menu-user__user" onClick={() => setLoginVisible(true)}>
          <img
            className="menu-user__avatar"
            src="http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg"
          />
          <p className="menu-user__name">未登录</p>
        </div>
      )}

      {/* <!-- UID登录 --> */}
      <Modal title="登录" width="500px" footer={null} visible={loginVisible} onCancel={() => setLoginVisible(false)}>
        <div className="">
          <Input placeholder="请输入您的网易云uid" onChange={(e) => setUid(e.target.value)} />
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
            <Button type="primary" className="menu-user__login" onClick={login}>
              登录
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
