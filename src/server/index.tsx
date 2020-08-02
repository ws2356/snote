import express from 'express'
import domServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import _ from 'lodash'
import note from './ctrl/note'
import dft from './ctrl/default'
import React from "react";
import App from '../App'

const app = express()
app.use(express.json())

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

app.use(async (req, res, next) => {
  domServer.renderToString(
    <StaticRouter location={req.url}>
    <App />
    </StaticRouter>
  )
})

app.all('*', async (req, res) => {
  await dft.handleDefaultRoute(req, res)
})

const port = 8201
app.listen(port, () => {
  console.log(`snote listen on: ${port}`)
})
