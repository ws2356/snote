import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import './popular.css'

type PopularProps = any | null

export default function Popular(props: PopularProps) {
  return (
    <HashRouter
      basename="/"
    >
      <ul>
        <li>
          <Link to="/today">today</Link>
        </li>
        <li>
          <Link to="/week">week</Link>
        </li>
        <li>
          <Link to="/month">month</Link>
        </li>
        <li>
          <Link to="/year">year</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path="/today">
            <Paragraph title="today" len={40} />
          </Route>
          <Route path="/week">
            <Paragraph title="week" len={80} />
          </Route>
          <Route path="/month">
            <Paragraph title="month" len={160} />
          </Route>
          <Route path="/year">
            <Paragraph title="year" len={320} />
          </Route>
          <Route path="/">
            <p>Choose how would you like to view popular notes</p>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  )
}

type ParagraphProps = { title: string, len: number }
function Paragraph(props: ParagraphProps) {
  const { title, len } = props
  return (
    <div className="popular-para">
      <div className="popular-para-title">
        {title}
      </div>
      <p className="popular-para-body">{createRandomText(len)}</p>
    </div>
  )
}

function createRandomText(len: number): string {
  let ret = ''
  const codea = 'a'.charCodeAt(0)
  for (let ii = 0; ii < len; ++ii) {
    const code = codea + parseInt((26 * Math.random()).toFixed(0), 10)
    ret += String.fromCharCode(code)
  }
  return ret
}
