// @flow

import React, { Fragment } from "react"
import { Twitter } from "react-social-sharing"
import style from "./Main.st.css"
import Title from "../Components/Title"
import Button from "../Components/Button"

const Done = () => (
  // $FlowFixMe
  <main {...style("root", {})}>
    <Fragment>
      <Title>
        No one cares if you ride a <span className={style.blue}>Mercedes</span>{" "}
        or a <span className={style.yellow}>Fiat Uno</span>.
      </Title>
      <Title>Save your money, get rich and remember to be happy!</Title>
      <div>
        <Twitter
          message="Find out if you should buy that thing"
          link="https://should-i-buy-that-thing.now.sh"
        />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/duartemendes/should-i-buy-that-thing"
        >
          Repo
        </a>
      </div>
      <div>
        <a href="/">
          <Button tertiary>Play again?!</Button>
        </a>
      </div>
    </Fragment>
  </main>
)

export default Done
