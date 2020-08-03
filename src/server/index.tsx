import express from 'express'
import path from 'path'
import fs from 'fs'
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

const INDEX_CONTENT = fs.readFileSync('dist/index.server.html').toString()
const RE = new RegExp('\u001erenderToString\u001e')

app.get("*", async (req, res) => {
  const isHash = /^\/popular(#|\/|$)/.test(req.url)
  const realUrl = isHash ? '/' : req.url
  console.log(`[route] realUrl: ${realUrl}`)
  const contentHtml = domServer.renderToString(
    <StaticRouter location={realUrl}>
    <App />
    </StaticRouter>
  )
  const ret = INDEX_CONTENT.replace(RE, contentHtml)
  res.send(ret)
})

/* app.all('*', async (req, res) => { */
/*   await dft.handleDefaultRoute(req, res) */
/* }) */

const port = 8200
app.listen(port, () => {
  console.log(`snote listen on: ${port}`)
})
