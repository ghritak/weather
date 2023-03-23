const fetch = require('node-fetch');

let url = 'https://apisetu.gov.in/certificate/v3/transport/rvcer';

let options = {
    method: 'POST',
    headers: { 'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json' },
    body: '{"txnId":"f7f1469c-29b0-4325-9dfc-c567200a70f7","format":"xml","certificateParameters":{"reg_no":"DL01AA0101. As per your Vehicle Registration Certificate.","chasis_no":"MBLKC12EFBGJ08420. As per your Vehicle Registration Certificate.","UID":"123412341234","FullName":"Sunil Kumar"},"consentArtifact":{"consent":{"consentId":"ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba","timestamp":"2019-08-24T14:15:22Z","dataConsumer":{"id":"string"},"dataProvider":{"id":"string"},"purpose":{"description":"string"},"user":{"idType":"string","idNumber":"string","mobile":"string","email":"string"},"data":{"id":"string"},"permission":{"access":"string","dateRange":{"from":"2019-08-24T14:15:22Z","to":"2019-08-24T14:15:22Z"},"frequency":{"unit":"string","value":0,"repeats":0}}},"signature":{"signature":"string"}}}'
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

