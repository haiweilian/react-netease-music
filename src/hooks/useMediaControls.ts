import { useEffect, useState, MutableRefObject } from 'react'
import { useEventListener, useMemoizedFn } from 'ahooks'

export function useMediaControls(target: MutableRefObject<HTMLMediaElement | null>, src: string) {
  const el = target.current
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.75)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (el && src) {
      el.setAttribute('src', src)
    }
  }, [el, src])

  useEventListener('play', () => setPlaying(true), { target: el })
  useEventListener('pause', () => setPlaying(false), { target: el })
  useEventListener('timeupdate', () => setCurrentTime(el!.currentTime), { target: el })
  useEventListener('volumechange', () => setVolume(el!.volume), { target: el })
  useEventListener('durationchange', () => setDuration(el!.duration), { target: el })

  const togglePlaying = () => {
    if (!el) return
    playing ? el.pause() : el.play()
  }
  const changeCurrentTime = (time: number) => {
    if (!el) return
    el.currentTime = time
  }
  const changeVolume = (volume: number) => {
    if (!el) return
    el.volume = volume
  }

  return {
    playing,
    currentTime,
    volume,
    duration,
    // useMemoizedFn 替代 useCallback 持久缓存
    togglePlaying: useMemoizedFn(togglePlaying),
    changeCurrentTime: useMemoizedFn(changeCurrentTime),
    changeVolume: useMemoizedFn(changeVolume),
  }
}
