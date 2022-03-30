import { Request, Response } from 'express'
import generalResponse from '../helper/generalResponse.helper'

export const homeFunction = (req: Request, res: Response) => {
  try {
    return generalResponse(res, null, 'success')
  } catch (error) {
    return generalResponse(res, error, '', 'error', false, 400)
  }
}
