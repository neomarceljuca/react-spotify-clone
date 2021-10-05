import React from 'react'
import styles from "./styles.module.scss"

export function Song(props) {
  return (
    <div className={styles.container}>
        <h1>titulo: {props.nome}</h1>
        <h1>autor: {props.autor}</h1>
      <audio controls>
          <source src = {props.arquivo} type = "audio/mpeg"/>
      </audio>
    </div>
  )
}
export default Song;