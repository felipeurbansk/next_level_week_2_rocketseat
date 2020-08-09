import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/23037242?s=460&u=8ed8cb8bbe83e74efe0c8d5ea1a589e2ee6d0eab&v=4" alt="Felipe Urbanski"/>
        <div>
          <strong>Felipe Urbanski</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
      </p>
      <footer>
        <p>
              Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
