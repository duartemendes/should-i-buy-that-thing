// @flow

import React, { Fragment } from "react"
import style from "./Main.st.css"
import Button from "../Components/Button"
import Title from "../Components/Title"
import Subtitle from "../Components/Subtitle"

type Props = {
  history: {
    push: Function
  }
}

const Home = (props: Props) => (
  // $FlowFixMe
  <main {...style("root", {}, props)}>
    <Fragment>
      <Title>
        Should I <span className={style.blue}>buy</span> that{" "}
        <span className={style.yellow}>thing</span>?
      </Title>
      <Title>Play to find out</Title>
      <Subtitle>Step {"#"}1 to get rich!</Subtitle>
      <Button onClick={() => props.history.push("/app")}>Start</Button>
    </Fragment>
  </main>
)

export default Home
