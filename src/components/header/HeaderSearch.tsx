import './HeaderSearch.scss'

import { createPortal } from 'react-dom'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from 'antd'
import { useClickAway, useLocalStorageState } from 'ahooks'
import { useSetRecoilState } from 'recoil'

import { isEmpty } from '~/utils'
import { lyricStatusStore } from '~/store'
import { GLOBAL_SEARCH_HOT_KEY } from '~/utils/constant'
import { getSearchHot } from '~/api/search'

export default function HeaderSearch() {
  const navigate = useNavigate()
  const setLyricStatus = useSetRecoilState(lyricStatusStore)

  /**
   * "useClickAway" 监听元素外的点击事件
   */
  const [search, setSearch] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const refInput = useRef(null)
  const refSearch = useRef(null)
  useClickAway(() => {
    setIsSearch(false)
  }, [refInput, refSearch])

  /**
   * 1、关闭搜索弹窗
   * 2、跳转到搜索页
   * 3、如果歌词打开关闭歌词
   * 4、存储历史记录最新的记录排到最前
   */
  const [hots, setHots] = useState<string[]>([])
  const [storage, setStorage] = useLocalStorageState<string[]>(GLOBAL_SEARCH_HOT_KEY, {
    defaultValue: [],
  })
  const goSearch = (keyword: string, history = false) => {
    if (isEmpty(keyword)) {
      return false
    }

    setIsSearch(false)
    navigate(`/search/${keyword}`)
    setLyricStatus(false)

    if (history) {
      setStorage([...new Set([keyword, ...storage])])
    }
  }
  useEffect(() => {
    getSearchHot().then((res) => {
      setHots(res)
    })
  }, [])

  return (
    <>
      <div ref={refInput}>
        <Input
          placeholder="搜索"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsSearch(true)}
          onPressEnter={() => goSearch(search, true)}
        />
      </div>

      {createPortal(
        <div className="search" ref={refSearch} style={{ display: isSearch ? 'block' : 'none' }}>
          <p className="search__title">热门搜索</p>
          <div className="search__tags">
            {hots.map((hot) => (
              <span key={hot} className="search__tag" onClick={() => goSearch(hot, true)}>
                {hot}
              </span>
            ))}
          </div>
          <p className="search__title">搜索历史</p>
          <div className="search__tags">
            {storage.map((hot) => (
              <span key={hot} className="search__tag" onClick={() => goSearch(hot)}>
                {hot}
              </span>
            ))}
          </div>
        </div>,
        document.querySelector('body')!
      )}
    </>
  )
}
