import './Player.scss'
import { useRef, useState } from 'react'
import { useMediaControls } from '~/hooks'
import { store } from '~/store'
import type { ISong } from '~/types'
import PlayerLyric from './PlayerLyric'
import PlayerProgress from './PlayerProgress'
import PlayerContent from './PlayerContent'
import PlayerControl from './PlayerControl'
import PlayerVolume from './PlayerVolume'

/**
 * @知识 此组件相关的逻辑包含常见的性能优化
 * https://juejin.cn/post/6844904000043614222
 */
export default function Player() {
  /**
   * 获取到播放地址
   */
  const [currentSong, setCurrentSong] = useState<ISong>({} as ISong)
  const [currentSongSrc, setCurrentSongSrc] = useState('')
  store.subscribe(() => {
    const song = store.getState().player.currentSong
    if (song) {
      setCurrentSong(song)
      setCurrentSongSrc(`https://music.163.com/song/media/outer/url?id=${song.id}.mp3`)
    }
  })

  /**
   * @var playing  是否播放
   * @var currentTime 播放时间
   * @var duration 总时间
   * @var volume 音量
   */
  const audio = useRef<HTMLAudioElement>(null)
  const { playing, currentTime, duration, volume, togglePlaying, changeCurrentTime, changeVolume } = useMediaControls(
    audio,
    currentSongSrc
  )

  return (
    <div className="player">
      {/* <!-- 播放标签 --> */}
      <audio ref={audio} loop={true} autoPlay={true}></audio>

      {/* <!-- 歌词封面 --> */}
      <PlayerLyric playing={playing} currentTime={currentTime} currentSong={currentSong} />

      {/* <!-- 播放进度 --> */}
      <PlayerProgress currentTime={currentTime} duration={duration} changeCurrentTime={changeCurrentTime} />

      {/* <!-- 播放内容 --> */}
      <div className="player__left">
        {currentSong.id ? (
          <PlayerContent currentSong={currentSong} currentTime={currentTime} duration={duration} />
        ) : null}
      </div>

      {/* <!-- 控制器 --> */}
      <div className="player__center">
        <PlayerControl playing={playing} togglePlaying={togglePlaying} />
      </div>

      {/* <!-- 音量控制 --> */}
      <div className="player__right">
        <PlayerVolume volume={volume} changeVolume={changeVolume} />
      </div>
    </div>
  )
}
