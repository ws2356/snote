import express from 'express'
import path from 'path'
import domServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import _ from 'lodash'
import note from './ctrl/note'
import dft from './ctrl/default'
import React from "react";
import App from '../App'

const app = express()
app.use(express.json())
app.use(express.static('dist'))

app.get('/api/list/my', async (req, res) => {
  await note.getMyNotes(req, res)
})

app.get('/api/popular', async (req, res) => {
  await note.getPopular(req, res)
})

app.get('/api/search', async (req, res) => {
  await note.getSearchNotes(req, res)
})

app.post('/api/create', async (req, res) => {
  await note.postCreate(req, res)
})

app.put('/api/modify/:id', async (req, res) => {
  await note.putModify(req, res)
})

app.get("*", async (req, res) => {
  const isHash = /^\/popular(#|\/|$)/.test(req.url)
  const realUrl = isHash ? '/' : req.url
  console.log(`[route] realUrl: ${realUrl}`)
  const contentHtml = domServer.renderToString(
    <StaticRouter location={realUrl}>
    <App />
    </StaticRouter>
  )

  const ret = `
<html lang="en">
  <head>
    <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"><meta name="theme-color" content="#000000"><meta name="description" content="Home page of snote"><link rel="shortcut icon" href="favicon.ico"></head>
  <body>
    <noscript>You need to enable JavaScript to view this site.</noscript>
    <div id="root" style="height:100vh;width:100vw;">${contentHtml}</div>
  <script src="build/index.js"></script></body>
</html>
`
  res.send(ret)
})

/* app.all('*', async (req, res) => { */
/*   await dft.handleDefaultRoute(req, res) */
/* }) */

const port = 8200
app.listen(port, () => {
  console.log(`snote listen on: ${port}`)
})
