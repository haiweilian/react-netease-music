import './PlayerLyric.scss'
import { useCallback, useEffect, useRef, useState, memo } from 'react'
import { createPortal } from 'react-dom'
import { Lrc, Runner, Lyric } from 'lrc-kit'
import { useRecoilState } from 'recoil'
import PlayBar from '~/assets/image/play-bar.png'
import PlayBarSupport from '~/assets/image/play-bar-support.png'
import Comment from '~/components/comment/Comment'
import { getLyric } from '~/api/player'
import { thumbnail } from '~/utils'
import { CommentType } from '~/utils/constant'
import { lyricStatusStore } from '~/store'
import type { ISong } from '~/types'

interface Props {
  playing: boolean
  currentTime: number
  currentSong: ISong
}

function PlayerLyric(props: Props) {
  /**
   * 是否展示歌词
   */
  const [lyricPageStatus] = useRecoilState(lyricStatusStore)

  /**
   * 歌词解析并根据播放时间实时获取歌词行数。
   */
  const [lines, setLines] = useState<Lyric[]>([])
  const [lineActive, setLineActive] = useState<number>(0)
  const lrcInstance = useRef<Runner>()

  useEffect(() => {
    if (!props.currentSong.id) return
    lrcInstance.current = undefined
    getLyric({
      id: props.currentSong.id,
    }).then((lyric) => {
      lrcInstance.current = new Runner(Lrc.parse(lyric.lrc.lyric))
      lyricLineRefs.current = []
      setLines(lrcInstance.current.getLyrics())
    })
  }, [props.currentSong.id])

  useEffect(() => {
    if (lrcInstance.current) {
      lrcInstance.current.timeUpdate(props.currentTime)
      setLineActive(lrcInstance.current.curIndex())
    }
  }, [props.currentTime])

  /**
   * 获取歌词列表 ref，在检测到当前行变化的时候，定位歌词到内容中间
   */
  const scroller = useRef<HTMLDivElement>(null)
  const lyricLineRefs = useRef<HTMLDivElement[]>([])
  const setItemRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      lyricLineRefs.current.push(node)
    }
  }, [])

  useEffect(() => {
    if (scroller.current) {
      const curDom = lyricLineRefs.current[lineActive]
      if (curDom) {
        scroller.current.scrollTop = curDom.offsetTop - 130 + curDom.offsetHeight / 2
      }
    }
  }, [lineActive])

  return createPortal(
    <div className={lyricPageStatus ? 'player-lyric' : 'player-lyric is-hide'}>
      <div className="player-lyric__content">
        <div className="player-lyric__song">
          {/* <!-- 播放状态 --> */}
          <div className="player-cover">
            <img src={PlayBarSupport} className="player-cover__support" />
            <img src={PlayBar} className={props.playing ? 'player-cover__bar is-playing' : 'player-cover__bar'} />
            <div className="player-cover__cover">
              <div className={!props.playing ? 'player-cover__inner is-paused' : 'player-cover__inner'}>
                <img src={thumbnail(props.currentSong.picUrl, 400)} className="player-cover__image" />
              </div>
            </div>
          </div>
          {/* <!-- 歌词信息 --> */}
          <div className="lyric">
            <div className="lyric__name">{props.currentSong.name}</div>
            <div className="lyric__desc">
              <span className="label">歌手：</span>
              <div className="value">{props.currentSong.artists}</div>
            </div>
            <div ref={scroller} className="scroller lyric__wrap">
              {lines.map((line, index) => (
                <div
                  ref={setItemRef}
                  key={line.timestamp}
                  className={lineActive === index ? 'lyric__item is-active' : 'lyric__item'}
                >
                  <p className="lyric__text">{line.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- 歌曲评论 --> */}
        <div className="player-lyric__comment">
          {props.currentSong.id && lyricPageStatus ? (
            <Comment id={props.currentSong.id} type={CommentType.song} />
          ) : null}
        </div>
      </div>
    </div>,
    document.querySelector('body')!
  )
}

export default memo(PlayerLyric)
