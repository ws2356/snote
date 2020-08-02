import { Response } from 'express'
import { ec, err_msg } from '../error'

export function isNil(value: any) {
  return value === undefined || value === null
}

export function sendJson(res: Response, code: ec, data: any = undefined) {
  let body: any
  if (code === ec.ok) {
    body = { code, data }
  } else {
    body = { code, msg: err_msg(code) }
  }
  res.contentType('application/json')
  res.send(JSON.stringify(body))
}
