import express, { Request, Response } from 'express';
import { Card, CreateCardRequest, GetCardsResponse } from '../types/cards';
import { IdParams } from '../types/common';

export const cardsRouter = express.Router();

cardsRouter.post(
  '/',
  (request: Request<{}, CreateCardRequest>, response: Response<Card>) => {
    // TODO: Create cards
  },
);

cardsRouter.get(
  '/',
  (request: Request<{}, {}>, response: Response<GetCardsResponse>) => {
    // TODO: Return cards
  },
);

cardsRouter.get(
  '/:id',
  (request: Request<IdParams, {}>, response: Response<Card>) => {
    // TODO: Return card
  },
);

cardsRouter.put(
  '/:id',
  (request: Request<IdParams, Card>, response: Response<Card>) => {
    // TODO: Update cards
  },
);

cardsRouter.delete(
  '/:id',
  (request: Request<IdParams>, response: Response<void>) => {
    // TODO:  cards
  },
);
