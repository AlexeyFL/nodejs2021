import {PORT} from './common/config';
import app from './app';

app.listen(PORT, async () => {
  console.log(`App running on ${PORT}!`)
});

