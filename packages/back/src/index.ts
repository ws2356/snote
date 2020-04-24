import express from 'express'
import _ from 'lodash'

const nums = _.range(0, 10).reduce((res, it) => {
  return res + String.fromCharCode('0'.charCodeAt(0) + it)
}, '')
const a2z = _.range(0, 26).reduce((res, it) => {
  return res + String.fromCharCode('a'.charCodeAt(0) + it)
}, '')

const A2Z = _.range(0, 26).reduce((res, it) => {
  return res + String.fromCharCode('A'.charCodeAt(0) + it)
}, '')
const charTable = nums + a2z + A2Z + '[];,./{}|:<>?-=_+'
const charTableLen = charTable.length
console.log(charTable)
function randomNote() {
  const len = Math.floor(Math.random() * 1000)
  return _.range(0, len).reduce((res) => {
    let chIndex = Math.floor(Math.random() * charTableLen)
    return res + charTable.charAt(chIndex)
  }, '')
}

const app = express()

app.get('/notes', (req, res) => {
  const page: number = +req.query.page || 0
  const page_size: number = +req.query.page_size || 20
  const total: number = +req.query.total || 10000

  setTimeout(() => {
    const off = page * page_size
    const body = _.range(off, off + page_size)
      .map((id) => {
        return { id, text: randomNote() }
      })

    res.setHeader('Content-type', 'Application/json')
    res.send(JSON.stringify(body))
  }, 1000)
})

app.listen(8787)
