import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { throttle } from '../utils/utils'
import './assets/articleArticle.css'

export function Article() {
  const [articleJestTitle, setArticleJestTitle] = useState('Jest 实践指南')
  const [articleJestDetail, setArticleJestDetail] = useState(
    '一款优雅、简洁的 JavaScript 测试框架'
  )
  const [articleJestImg, setArticleJestImg] = useState(
    'src/router/assets/jestPoster.png'
  )
  const [articleNestTitle, setArticleNestTitle] =
    useState('Nest.js 动态调度模块开发实践')
  const [articleNestDetail, setArticleNestDetail] = useState(
    '构建高效且可伸缩的服务端的渐进式 Node.js 框架'
  )
  const [articleNestImg, setArticleNestImg] = useState(
    'https://docs.nestjs.cn/_media/icon.svg'
  )

  return (
    <>
      {/* <Link to={`/article/${articleTitle}`}> */}
      <article className="articleJestArticle">
        <div
          className="profileJestModal"
          onClick={() => {
            window.location.href =
              'https://www.yuque.com/docs/share/f8f48b0b-4408-42f9-8d9b-694c8a74c9b2?# 《Jest Quick Start》'
          }}
        >
          <div className="modalArticle">
            <div className="modalLeft">
              <div className="leftTop" title={articleJestTitle}>
                {articleJestTitle}
              </div>
              <div className="leftBottom" title={articleJestDetail}>
                {articleJestDetail}
              </div>
            </div>
            <div className="modalRight">
              <img src={articleJestImg}></img>
            </div>
          </div>
        </div>
        <div
          className="profileNestModal"
          onClick={() => {
            window.location.href =
              'https://www.yuque.com/docs/share/cc96815b-2d3b-4525-89ac-a929f84d4b2e?# 《Nest.js 动态调度模块开发实践周报机器人》'
          }}
        >
          <div className="modalArticle">
            <div className="modalLeft">
              <div className="leftTop" title={articleNestTitle}>
                {articleNestTitle}
              </div>
              <div className="leftBottom" title={articleNestDetail}>
                {articleNestDetail}
              </div>
            </div>
            <div className="modalRight">
              <img src={articleNestImg}></img>
            </div>
          </div>
        </div>
      </article>
      {/* </Link> */}
    </>
  )
}
