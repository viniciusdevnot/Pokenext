import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Projeto realizado no intuito de demonstrar experiencia em consumos de api e detalhar a desenvoltura em SASS
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}
