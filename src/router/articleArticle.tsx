import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { throttle } from '../utils/utils'
import './assets/articleArticle.css'

export function Article() {
  const [articleTitle, setArticleTitle] = useState('Jest 实践指南')
  const [articleDetail, setArticleDetail] = useState(
    '一款优雅、简洁的 JavaScript 测试框架'
  )
  const [articleImg, setArticleImg] = useState(
    'src/router/assets/jestPoster.png'
  )

  return (
    <>
      <Link to={`/article/${articleTitle}`}>
        <article className="articleArticle">
          <div className="profileModal">
            <div className="modalArticle">
              <div className="modalLeft">
                <div className="leftTop" title={articleTitle}>
                  {articleTitle}
                </div>
                <div className="leftBottom" title={articleDetail}>
                  {articleDetail}
                </div>
              </div>
              <div className="modalRight">
                <img src={articleImg}></img>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </>
  )
}
