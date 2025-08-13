import express from 'express';
import { ADMIN_LOGIN, ADMIN_PASSWORD, PORT } from './config';
import { cardsRouter } from './routers/cards.router';
import { createTables } from './database/create-tables';
import BasicAuth from 'express-basic-auth';

async function run() {
  await createTables();

  const server = express();
  server.use(express.json());
  server.use(
    BasicAuth({
      users: { [ADMIN_LOGIN]: ADMIN_PASSWORD },
      challenge: true,
    }),
  );

  server.get('/', (request, response) => {
    response.send('You are ok.');
  });

  server.use('/cards', cardsRouter);

  server.listen(PORT);
}

run().catch((error) => console.error(error));