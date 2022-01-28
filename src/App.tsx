import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import videoSource from './assets/backgroundVideo.mp4'
import { Article } from './router/articleArticle'
import { Links } from './router/articleLinks'
import { Profile } from './router/articleProfile'
import { Project } from './router/articleProject'
import { animateSwitch } from './utils/utils'

function Home() {
  return (
    <>
      <article className="articlePoster">
        <div className="background">
          <video
            autoPlay
            muted
            loop
            className="backgroundVideo"
            poster="src/assets/backgroundMask.png"
          >
            <source src={videoSource} type="video/mp4"></source>
          </video>
          <div className="textContent">
            <h2>Enjoy Web Trip.</h2>
            <p>永远保持一颗学徒的心.</p>
          </div>
        </div>
      </article>
    </>
  )
}

function App() {
  return (
    <>
      <div id="blog-body" className="blogBody">
        <header id="blogHeader">
          <div className="title">
            <span>
              <Link to={'/'} onClick={animateSwitch}>
                RyanFong's Blog
              </Link>
            </span>
            <span className="icon"></span>
          </div>
          <div className="list">
            <ul>
              <li onClick={animateSwitch}>
                <Link to={'/profile'}>
                  个人简介
                </Link>
              </li>
              <li onClick={animateSwitch}>
                <Link to={'/article'}>
                  技术文章
                </Link>
              </li>
              <li onClick={animateSwitch}>
                <Link to={'/project'}>
                  项目展示
                </Link>
              </li>
              <li onClick={animateSwitch}>
                <Link to={'/links'}>
                  友情链接
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <article id="blogArticle">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/article" element={<Article />} />
            <Route path="/project" element={<Project />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </article>
      </div>
    </>
  )
}

export default App
