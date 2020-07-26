import express from 'express'
import _ from 'lodash'
import note from './ctrl/note'
import dft from './ctrl/default'

const app = express()
app.use(express.json())

app.get('/list/my', async (req, res) => {
  await note.getMyNotes(req, res)
})

app.get('/popular', async (req, res) => {
  await note.getPopular(req, res)
})

app.get('/search', async (req, res) => {
  await note.getSearchNotes(req, res)
})

app.post('/create', async (req, res) => {
  await note.postCreate(req, res)
})

app.put('/modify/:id', async (req, res) => {
  await note.putModify(req, res)
})

app.all('*', async (req, res) => {
  await dft.handleDefaultRoute(req, res)
})

const port = 8787
app.listen(port, () => {
  console.log(`snote listen on: ${port}`)
})
