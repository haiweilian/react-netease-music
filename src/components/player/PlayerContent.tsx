// {/* <template>
//   <div class="player-content__playimg" @click="togglePlayer">
//     <img class="player-content__blur" :src="thumbnail(props.currentSong.picUrl, 40)">
//     <div class="player-content__mask"></div>
//     <Icon :name="iconStatus" class="player-content__control" size="22" />
//   </div>
//   <div class="player-content__playcon" @click="togglePlayer">
//     <div class="player-content__name">
//       <span class="">{{ props.currentSong.name }}</span>
//       <span class="">-</span>
//       <span class="">{{ props.currentSong.artists }}</span>
//     </div>
//     <div class="player-content__time">
//       <span class="">{{ dayjs.duration(props.currentTime, 'seconds').format('mm:ss') }}</span>
//       <span class="">/</span>
//       <span class="">{{ dayjs.duration(props.duration, 'seconds').format('mm:ss') }}</span>
//     </div>
//   </div>
// </template>

// <script setup lang="ts">
// import dayjs from 'dayjs'
// import { computed } from 'vue'
// import { useStore } from 'vuex'
// import type { PropType } from 'vue'

// import Icon from '~/components/base/Icon.vue'
// import { thumbnail } from '~/utils'
// import { SET_LYRIC_PAGE_STATUS } from '~/store/modules/player'
// import type { ISong } from '~/types'

// const props = defineProps({
//   currentSong: {
//     type: Object as PropType<ISong>,
//     required: true,
//   },
//   currentTime: {
//     type: Number,
//     required: true,
//   },
//   duration: {
//     type: Number,
//     required: true,
//   },
// })

// const store = useStore()

// /**
//  * 打开或关闭歌词
//  */
// const iconStatus = computed<string>(() => store.state.player.lyricPageStatus ? 'shrink' : 'expand')
// const togglePlayer = () => {
//   store.commit(SET_LYRIC_PAGE_STATUS)
// }
// </script>

// <style lang="scss" scoped>

// </style> */}
