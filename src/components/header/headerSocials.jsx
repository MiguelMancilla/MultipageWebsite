import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const headerSocials = () => {
  return (
    <div className="headerSocials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default headerSocials