import { Request, Response } from 'express'

class Default {
  async handleDefaultRoute(req: Request, res: Response) {
    res.sendStatus(400)
  }
}

export default new Default()
