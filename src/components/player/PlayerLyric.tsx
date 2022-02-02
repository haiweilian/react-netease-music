// {/* <template>
//   <teleport to="#app">
//     <!-- 歌词封面 -->
//     <div :class="{'is-hide': !lyricPageStatus }" class="player-lyric">
//       <div class="player-lyric__content">
//         <div class="player-lyric__song">
//           <!-- 播放状态 -->
//           <div class="player-cover">
//             <img :src="PlayBarSupport" class="player-cover__support">
//             <img :src="PlayBar" class="player-cover__bar" :class="{'is-playing': playing}">
//             <div class="player-cover__cover">
//               <div class="player-cover__inner" :class="{'is-paused' : !playing}">
//                 <img :src="thumbnail(currentSong.picUrl, 400)" class="player-cover__image">
//               </div>
//             </div>
//           </div>
//           <!-- 歌词信息 -->
//           <div class="lyric">
//             <div class="lyric__name">
//               {{ currentSong.name }}
//             </div>
//             <div class="lyric__desc">
//               <span class="label">歌手：</span>
//               <div class="value">
//                 {{ currentSong.artists }}
//               </div>
//             </div>
//             <div ref="scroller" class="scroller lyric__wrap">
//               <div
//                 v-for="(line, index) of lines"
//                 :ref="setItemRef"
//                 :key="line.timestamp"
//                 class="lyric__item"
//                 :class="{'is-active': lineActive === index}"
//               >
//                 <p class="lyric__text">
//                   {{ line.content }}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <!-- 歌曲评论 -->
//         <div class="player-lyric__comment">
//           <Comment
//             v-if="currentSong.id && lyricPageStatus"
//             :id="currentSong.id"
//             :type="CommentType.song"
//           />
//         </div>
//       </div>
//     </div>
//   </teleport>
// </template>

// <script setup lang="ts">
// import { computed, ref, toRef, watch } from 'vue'
// import { useStore } from 'vuex'
// import { Lrc, Runner } from 'lrc-kit'
// import type { PropType } from 'vue'
// import type { Lyric } from 'lrc-kit'

// import PlayBar from '~/assets/image/play-bar.png'
// import PlayBarSupport from '~/assets/image/play-bar-support.png'
// import Comment from '~/components/comment/Comment.vue'

// import { getLyric } from '~/api/player'
// import { thumbnail } from '~/utils'
// import { CommentType } from '~/utils/constant'
// import type { ISong } from '~/types'

// const props = defineProps({
//   playing: {
//     type: Boolean,
//     required: true,
//   },
//   currentTime: {
//     type: Number,
//     required: true,
//   },
//   currentSong: {
//     type: Object as PropType<ISong>,
//     required: true,
//   },
// })
// const currentSong = toRef(props, 'currentSong')

// const store = useStore()

// /**
//  * 是否展示歌词
//  */
// const lyricPageStatus = computed<boolean>(() => store.state.player.lyricPageStatus)

// /**
//  * 歌词解析并根据播放时间实时获取歌词行数。
//  */
// const lines = ref<Lyric[]>([])
// const lineActive = ref<number>(0)
// const lrcInstance = ref<Runner>()
// const lyricCallback = async() => {
//   lrcInstance.value = undefined
//   const lyric = await getLyric({
//     id: currentSong.value.id,
//   })
//   lrcInstance.value = new Runner(Lrc.parse(lyric.lrc.lyric))
//   lines.value = lrcInstance.value.getLyrics()
// }

// watch(() => props.currentTime, (currentTime) => {
//   if (lrcInstance.value) {
//     lrcInstance.value.timeUpdate(currentTime)
//     lineActive.value = lrcInstance.value.curIndex()
//   }
// })

// /**
//  * 获取歌词列表 ref，在检测到当前行变化的时候，定位歌词到内容中间
//  */
// const scroller = ref()
// const lyricLineRefs = ref<HTMLElement[]>([])
// const setItemRef = (el: HTMLElement): void => {
//   lyricLineRefs.value.push(el)
// }

// watch(lineActive, (num: number) => {
//   const curDom = lyricLineRefs.value[num]
//   scroller.value.scrollTop = curDom.offsetTop - 130 + curDom.offsetHeight / 2
// })

// /**
//  * 歌曲变化时，重新请求歌词并初始化必要状态
//  */
// watch(currentSong, (currentSong) => {
//   if (currentSong.id) {
//     lyricCallback()
//     lyricLineRefs.value = []
//   }
// })
// </script>

// <style lang="scss" scoped>

// </style> */}
