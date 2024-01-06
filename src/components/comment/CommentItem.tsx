import './CommentItem.scss'
import dayjs from 'dayjs'
import LazyLoad from 'react-lazyload'
import Icon from '~/components/base/Icon'
import type { IComment } from '~/types'
import { thumbnail } from '~/utils'

interface Props {
  comment: IComment
}

export default function CommentItem({ comment }: Props) {
  return (
    <div className="comment">
      <div className="comment__avatar">
        <LazyLoad height={40} scrollContainer=".layout">
          <img src={thumbnail(comment.avatarUrl, 40)} />
        </LazyLoad>
      </div>
      <div className="comment__content is-border">
        <div className="comment__text">
          <span className="username">{comment.nickname}:</span>
          <span className="text">{comment.content}</span>
        </div>
        {comment.repliedNickname ? (
          <div className="comment__replied">
            <div className="comment__text">
              <span className="username">{comment.repliedNickname}:</span>
              <span className="text">{comment.repliedContent}</span>
            </div>
          </div>
        ) : null}
        <div className="comment__info">
          <span className="date">{dayjs(comment.time).format('YYYY-MM-DD HH:mm')}</span>
          <div className="actions">
            <Icon name="thumb" />
            <span>{comment.likedCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
