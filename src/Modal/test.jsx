import React from 'react'

const test = (props) => {
    fetch('https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/create', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'squarenorthsouth': 'A2',
        'headdirection': 'E',
        'sex': 'M',
        'northsouth': '44.568',
        'depth': '10',
        'eastwest': '22.346',
        'adultsubadult': 'Adult',
        'facebundles': 'Yes',
        'southtohead': '2.1',
        'preservation': 'Fair',
        'fieldbookpage': '123',
        'squareeastwest': 'B2',
        'goods': 'knife',
        'text': 'third ENTRY',
        'wrapping': 'None',
        'haircolor': 'Blonde',
        'westtohead': '1.8',
        'samplescollected': 'Yes',
        'area': 'Site A',
        'burialid': '12315654231',
        'length': '170',
        'burialnumber': '1',
        'dataexpertinitials': 'AB',
        'westtofeet': '3.5',
        'ageatdeath': '35',
        'southtofeet': '1.2',
        'excavationrecorder': 'John',
        'photos': 'Yes',
        'hair': 'Long',
        'burialmaterials': 'Gold',
        'dateofexcavation': '2023-04-11',
        'fieldbookexcavationyear': '2023',
        'clusternumber': 'C-1',
        'shaftnumber': 'S-1'
    })
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error', error);
});
}

export default test