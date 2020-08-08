import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

function Header () {
  return (
    <div className="page-teacher-list">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logo} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>Estes são os proffys disponiveis.</strong>
        </div>
      </header>
    </div>
  )
}

export default Header
