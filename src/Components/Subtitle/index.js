//@flow

import * as React from "react"
import style from "./subtitle.st.css"

type Props = {
  children: React.Node,
  secondary?: boolean
}

export default (props: Props) => (
  // $FlowFixMe
  <p {...style("root", { secondary: props.secondary }, props)} {...props}>
    {props.children}
  </p>
)
