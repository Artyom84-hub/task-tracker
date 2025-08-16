import { Request, Response } from 'express';
import { Board, CreateBoardRequest } from '../../types/boards';
export const validateBoardInput = (
  {body}: Request<unknown, Board, CreateBoardRequest>,
  response: Response,
  next: () => void,
): void => {
  if(typeof body !== 'object' || !body.name || typeof body.name !== 'string') {
    response.status(400).send({
      error: 'Validation error',
    })

    return;
  }
  next();
};
