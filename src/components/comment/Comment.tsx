import { useEffect, useRef, useState } from 'react'
import { Pagination } from 'antd'
import CommentItem from './CommentItem'
import { getCommentHot, getCommentNew } from '~/api/comment'
import { CommentType } from '~/utils/constant'
import type { IComment } from '~/types'

interface Props {
  id: number | string
  type: CommentType
}

export default function Comment(props: Props) {
  /**
   * 热门评论
   */
  const [commentsHot, setCommentsHot] = useState<IComment[]>([])
  useEffect(() => {
    getCommentHot({
      id: props.id,
      type: props.type,
      limit: 10,
    }).then((res) => {
      setCommentsHot(res.comments)
    })
  }, [props.id, props.type])

  /**
   * 最新评论
   */
  const total = useRef(0)
  const cursor = useRef('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [commentsNew, setcommentsNew] = useState<IComment[]>([])
  useEffect(() => {
    getCommentNew({
      id: props.id,
      type: props.type,
      pageNo: currentPage,
      pageSize: 30,
      sortType: 3,
      cursor: cursor.current,
    }).then((res) => {
      total.current = res.total
      cursor.current = res.cursor
      setcommentsNew(res.comments)
    })
  }, [props.id, props.type, currentPage])

  return (
    <div className="comments">
      {commentsHot.length ? (
        <div className="comments__block">
          <p className="comments__title">精彩评论</p>
          {commentsHot.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      ) : null}
      {commentsNew.length ? (
        <>
          <div className="comments__block">
            <p className="comments__title">最新评论</p>
            {commentsNew.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
          <div className="comments__pagination">
            <Pagination total={total.current} current={currentPage} onChange={setCurrentPage} />
          </div>
        </>
      ) : null}
    </div>
  )
}
