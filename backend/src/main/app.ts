import { server } from '../infra/http/server';

server.listen(process.env.SERVER_PORT || 3000);