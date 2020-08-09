import React, { ReactChildren, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface HeaderProps{
  title: string,
  children: React.ReactChild
}

const Header = (props:HeaderProps) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logo} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>

        {props.children}
      </div>
    </header>
  )
}

export default Header
