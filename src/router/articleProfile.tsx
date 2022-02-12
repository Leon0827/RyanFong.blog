import './assets/articleProfile.css'

export function Profile() {
  return (
    <>
      <article className="articleProfile">
        <div className="profileModal">
          <div className="modalLeft">
            <div className="modalIcon"></div>
            <div className="modalContent">
              <div className="modalText">Noob前端选手</div>
              <div className="modalDetail">
                <div className="company">
                  <div className="icon"></div>
                  <div className="text">
                    <a target={'_blank'} href="http://www.huanju.cn/index.html">
                      支付中台 | Joyy
                    </a>
                  </div>
                </div>
                <div className="school">
                  <div className="icon"></div>
                  <div className="text">
                    <a target={'_blank'} href="https://www.wyu.edu.cn/">
                      WYU University
                    </a>
                  </div>
                </div>
              </div>
              <div className="iconList">
                <div className="githubIcon">
                  <a target={'_blank'} href={'https://github.com/Leon0827'}>
                    <div className="icon"></div>
                  </a>
                </div>
                <div className="juejinIcon">
                  <a
                    target={'_blank'}
                    href={'https://juejin.cn/user/1170302947568557'}
                  >
                    <div className="icon"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modalRight">
            <div className="profileModal">
              <div className="modalContent">
                <div className="modalText">
                  <p className="personName">⭐️ Ryan Fong </p>
                  <p>
                    ⚡ An Electronic Information Engineering Undergraduate
                    Student.{' '}
                  </p>
                  <p>🌐 Web Front End Development Noob Learner. </p>
                  <p>🌱 Currently fieldwork in Guangzhou, China. </p>
                  <p>
                    💬 Ask me about tech and my projects on 1875161218@qq.com{' '}.
                  </p>
                  <p>🚀 Fun fact: Web Front End Development. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
