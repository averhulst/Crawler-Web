import xhr from 'xhr';

export default function(url, cb) {
  xhr(url, (err, response) => {
    const data = JSON.parse(response.body);
    if (err) console.log('request failed i guess', err);;

    cb(data);
  });
}
