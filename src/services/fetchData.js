import axios from 'axios';

const fetchData = () => {
  return new Promise((resolve, reject) => {
    async function execute() {
      try {
        const schema = await axios.get('https://my-json-server.typicode.com/kishoreio/demo/schema');
        const data = await axios.get('https://my-json-server.typicode.com/kishoreio/demo/data');
        resolve({ schema, data });
      } catch (err) {
        reject(err);
      }
    }
    execute();
  });
};

export default fetchData;
