import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"
import Img from "../images/holding-flower.jpg"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import "./work.scss"

export default function Works() {
  const dispatch = React.useContext(GlobalDispatchContext)

  React.useEffect(() => {
    dispatch({ type: "PAGE_NAME", page: "works" })
  }, [])

  return (
    <Layout>
      <Head title="Work" />
      <section>
        <div className="work-inner-container">
          <aside className="categories">
            <h3>Category</h3>
            <p>LOGO設計</p>
            <p>插畫設計</p>
            <p>名片設計</p>
          </aside>
          <main className="works">
            {[1, 2, 3, 4, 5].map(val => (
              <div className="work" key={val}>
                <h2 className="work-title">Keeping cooking simple</h2>
                <p className="work-info">July 19 2019 | 3 comments</p>
                <div className="img">
                  <img src={Img} alt="image" className="work-image" />
                </div>
                <p className="work-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, vel maxime? Laboriosam molestias, natus repellat eius
                  quisquam exercitationem dolore sint quidem velit iste
                  accusantium, autem debitis eos. Eos, maiores voluptatibus.
                </p>
                <a href="#" className="work-read-more">
                  Continue Reading
                </a>
              </div>
            ))}
          </main>
        </div>
      </section>
    </Layout>
  )
}
