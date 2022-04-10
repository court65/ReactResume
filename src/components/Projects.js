import React from 'react'
import Penguin from "../images/Penguin-post-login.png"
import code from "../images/Ben.jpg"
import password from "../images/Ben.jpg"

const Projects = () => {
  return (
    <section id="projects">
  <div className="project-container">
    <div className="project-header">Projects</div>
    <div className="projects">
      <div className="project-item">
        <div className="penguin-post">
          <img src={Penguin} alt="Penguin Project"/>
          <div className="text-container">
            <h2 className="name">Penguin-Post</h2>
            <div className="content">
              <p>
                PenguinPost is a social media website that allows a user to 'Squawk' (share up to 281 characters of information to your friends), favorite Squawks and grow your group of friends to stay engaged with your community.
              </p>
            </div>
            <button className="button">
              
              <h3><a href="https://github.com/court65/penguin-post" target="_blank" rel="noreferrer">Click Here To View This Project</a></h3>
              
            </button>
          </div>
        </div>
      </div>
      <div className="project-item">
        <div className="code-refractor">
        <img src={code} alt="Code Refractor"/>
          <div className="text-container">
            <h2 className="name">Code Refractor</h2>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam debitis, veniam iure ipsam voluptates quae.
              </p>
            </div>
            <button className="button">
              <h3><a href="https://github.com/court65/Challenge_1" target="_blank" rel="noreferrer">Click Here To View This Project</a></h3>
            </button>
          </div>
        </div>
      </div>
      <div className="project-item">
        <div className="password-generator">
        <img src={password} alt="Password Genertor"/>
          <div className="text-container">
            <h2 className="name">Password Generator</h2>
            <div className="content">
              <p>
                This app allows the user to create an application that one can use to generate a random password based on criteria the user has selected..
              </p>
            </div>
            <button className="button">
              <h3><a href="https://github.com/court65/password_generator" target="_blank" rel="noreferrer">Click Here To View This Project</a></h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Projects