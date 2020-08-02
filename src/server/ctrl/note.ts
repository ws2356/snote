import { Request, Response } from 'express'
import _ from 'lodash'
import { isNil, sendJson } from '../util'
import { ec } from '../../error'

class Note {
  async getMyNotes(req: Request, res: Response) {
    const notes = [
      { id: 1, data: "note 1" },
      { id: 2, data: "note 2" },
      { id: 3, data: "note 3" },
      { id: 4, data: "note 4" },
    ]
    sendJson(res, ec.ok, notes)
  }

  async getPopular(req: Request, res: Response) {
    const notes = [
      { id: 5, data: "note 5" },
      { id: 6, data: "note 6" },
      { id: 7, data: "note 7" },
      { id: 8, data: "note 8" },
    ]
    sendJson(res, ec.ok, notes)
  }

  async getSearchNotes(req: Request, res: Response) {
    const keyword = req.query['keyword']
    const notes = [
      { id: 9, data: "note 9: " + keyword },
      { id: 10, data: "note 10: " + keyword },
      { id: 11, data: "note 11: " + keyword },
      { id: 12, data: "note 12: " + keyword },
    ]
    sendJson(res, ec.ok, notes)
  }

  async postCreate(req: Request, res: Response) {
    const note = req.body
    if (!note || isNil(note.data)) {
      sendJson(res, ec.no_data)
      return
    }
    sendJson(res, ec.ok, 1)
  }

  async putModify(req: Request, res: Response) {
    const note = req.body
    if (!note || isNil(note.data)) {
      sendJson(res, ec.no_data)
      return
    }
    console.debug(`modify note: ${req.params.id}`)
    sendJson(res, ec.ok, 1)
  }
}

export default new Note();
