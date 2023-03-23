

/**API to verify Challan.**/

const fetch = require('node-fetch');

let url = 'https://apisetu.gov.in/certificate/v3/transport/chaln';

let options = {
    method: 'POST',
    headers: { 'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json' },
    body: '{"txnId":"f7f1469c-29b0-4325-9dfc-c567200a70f7","format":"pdf","certificateParameters":{"REQUEST":"Driving License,Registration Certificate","dl_rc":"8273987298123","FullName":"Sunil Kumar"},"consentArtifact":{"consent":{"consentId":"ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba","timestamp":"2019-08-24T14:15:22Z","dataConsumer":{"id":"string"},"dataProvider":{"id":"string"},"purpose":{"description":"string"},"user":{"idType":"string","idNumber":"string","mobile":"string","email":"string"},"data":{"id":"string"},"permission":{"access":"string","dateRange":{"from":"2019-08-24T14:15:22Z","to":"2019-08-24T14:15:22Z"},"frequency":{"unit":"string","value":0,"repeats":0}}},"signature":{"signature":"string"}}}'
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));,

/**API to verify Driving License.**/

const fetch = require('node-fetch');

let url = 'https://apisetu.gov.in/certificate/v3/transport/drvlc';

let options = {
    method: 'POST',
    headers: { 'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json' },
    body: '{"txnId":"f7f1469c-29b0-4325-9dfc-c567200a70f7","format":"xml","certificateParameters":{"dlno":"TN0119920009646. As per your Driving License.","UID":"123412341234","FullName":"Sunil Kumar","DOB":"31-12-1980"},"consentArtifact":{"consent":{"consentId":"ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba","timestamp":"2019-08-24T14:15:22Z","dataConsumer":{"id":"string"},"dataProvider":{"id":"string"},"purpose":{"description":"string"},"user":{"idType":"string","idNumber":"string","mobile":"string","email":"string"},"data":{"id":"string"},"permission":{"access":"string","dateRange":{"from":"2019-08-24T14:15:22Z","to":"2019-08-24T14:15:22Z"},"frequency":{"unit":"string","value":0,"repeats":0}}},"signature":{"signature":"string"}}}'
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));,

/**API to verify Fitness Certificate.**/

const fetch = require('node-fetch');

let url = 'https://apisetu.gov.in/certificate/v3/transport/fitcer';

let options = {
    method: 'POST',
    headers: { 'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json' },
    body: '{"txnId":"f7f1469c-29b0-4325-9dfc-c567200a70f7","format":"xml","certificateParameters":{"reg_no":"DL01AA0101","swd_name":"Person Name","chasis_no":"MBLKC12EFBGJ08420","UID":"123412341234","FullName":"Sunil Kumar"},"consentArtifact":{"consent":{"consentId":"ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba","timestamp":"2019-08-24T14:15:22Z","dataConsumer":{"id":"string"},"dataProvider":{"id":"string"},"purpose":{"description":"string"},"user":{"idType":"string","idNumber":"string","mobile":"string","email":"string"},"data":{"id":"string"},"permission":{"access":"string","dateRange":{"from":"2019-08-24T14:15:22Z","to":"2019-08-24T14:15:22Z"},"frequency":{"unit":"string","value":0,"repeats":0}}},"signature":{"signature":"string"}}}'
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));,

/**API to verify Registration of Vehicles.**/

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
    .catch(err => console.error('error:' + err));,

/**API to verify Vehicle Insurance Certificate.**/

const fetch = require('node-fetch');

let url = 'https://apisetu.gov.in/certificate/v3/transport/vhinsc';

let options = {
    method: 'POST',
    headers: { 'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json' },
    body: '{"txnId":"f7f1469c-29b0-4325-9dfc-c567200a70f7","format":"pdf","certificateParameters":{"reg_no":"DL01AA0101","swd_name":"Veer Pratap Singh","chasis_no":"MA3EJKD1S00A06535","UID":"123412341234","FullName":"Sunil Kumar"},"consentArtifact":{"consent":{"consentId":"ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba","timestamp":"2019-08-24T14:15:22Z","dataConsumer":{"id":"string"},"dataProvider":{"id":"string"},"purpose":{"description":"string"},"user":{"idType":"string","idNumber":"string","mobile":"string","email":"string"},"data":{"id":"string"},"permission":{"access":"string","dateRange":{"from":"2019-08-24T14:15:22Z","to":"2019-08-24T14:15:22Z"},"frequency":{"unit":"string","value":0,"repeats":0}}},"signature":{"signature":"string"}}}'
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));,

/**API to verify Vehicle Tax Receipt.**/

const fetch = require('node-fetch');

let url = 'https://apisetu.gov.in/certificate/v3/transport/vhtax';

let options = {
    method: 'POST',
    headers: { 'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json' },
    body: '{"txnId":"f7f1469c-29b0-4325-9dfc-c567200a70f7","format":"pdf","certificateParameters":{"reg_no":"DL01AA0101 As per your Vehicle Registration Certificate","swd_name":"Person Name. As per your Vehicle Registration Certificate","chasis_no":"MBLKC12EFBGJ08420. As per your Vehicle Registration Certificate.","UID":"123412341234","FullName":"Sunil Kumar"},"consentArtifact":{"consent":{"consentId":"ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba","timestamp":"2019-08-24T14:15:22Z","dataConsumer":{"id":"string"},"dataProvider":{"id":"string"},"purpose":{"description":"string"},"user":{"idType":"string","idNumber":"string","mobile":"string","email":"string"},"data":{"id":"string"},"permission":{"access":"string","dateRange":{"from":"2019-08-24T14:15:22Z","to":"2019-08-24T14:15:22Z"},"frequency":{"unit":"string","value":0,"repeats":0}}},"signature":{"signature":"string"}}}'
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));