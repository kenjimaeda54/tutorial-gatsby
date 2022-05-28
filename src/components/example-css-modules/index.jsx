import React from "react"
import { container, title, name } from "./styles.module.css"

export default function ComponentCssModule() {
  return (
    <div className={container}>
      <section className={title}>
        <p>Este container estilizado por css modules</p>
      </section>
      <article className={name}>Pedro</article>
    </div>
  )
}
