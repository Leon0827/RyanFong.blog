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
                  <div className="text">支付中台 | Joyy</div>
                </div>
                <div className="school">
                  <div className="icon"></div>
                  <div className="text">WYU University</div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalRight">
            <div className="profileModal">
              <div className="modalContent">
                <div className="modalText"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
