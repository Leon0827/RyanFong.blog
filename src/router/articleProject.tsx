import './assets/articleProject.css'

export function Project() {
  return (
    <>
      <article className="articleProject">
        <div className="background">
          <div className="container">
            <div
              className="card"
              onClick={() => {
                window.open(
                  'https://github.com/Leon0827/ColdIce-Music-Player-By-Vue-2.x'
                )
              }}
            >
              <div className="imgBx">
                <img src="src/assets/MusicPlayer.png" alt="" />
              </div>
              <div className="content">
                <h2>MusicPlayer</h2>
                <p>基于 Vue.2x 开发的简易网页版音乐播放器.</p>
                <p>接口来自网易云音乐 NodeJS 版 API.</p>
                <p>Axios 基于 Promise 的 HTTP 客户端.</p>
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                window.open('https://github.com/Leon0827/Electron-ResumeMook')
              }}
            >
              <div className="imgBx">
                <img src="src/assets/ResumeMook.png" alt="" />
              </div>
              <div className="content">
                <h2>ResumeMook</h2>
                <p>Electron + React Hooks + Typescript.</p>
                <p>实现的一个简易轻巧的简历平台桌面应用.</p>
                <p>Chromium + NodeJS + Native APIs = Electron.</p>
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                window.open(
                  'https://github.com/Leon0827/Javascript-ES6-Webpack-Kankan-News'
                )
              }}
            >
              <div className="imgBx">
                <img src="src/assets/KankanNews.png" alt="" />
              </div>
              <div className="content">
                <h2>KankanNews</h2>
                <p>Javascript + Webpack 构建的新闻头条项目.</p>
                <p>原生 JS 功能模块化与组件化开发 ( 🐶 高内聚 低耦合)</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
