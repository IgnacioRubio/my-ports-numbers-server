// xml content
const xmlObject = msg.payload;

let portsNumbers = {};
portsNumbers.record = [];

let countRegist = 0;

xmlObject.registry.record.forEach(function(rec) {
    let recordTemp = {};

    console.log('Registry number ' + countRegist);

    // protocol information
    if (rec.protocol === undefined) {
        console.warn('PROTOCOL does not exist.');
    } 
    else {
        recordTemp.protocol = rec.protocol.toString();
    }
    
    // name information
    if (rec.name === undefined) {
        console.warn('NAME does not exist.');
    } 
    else {
        recordTemp.name = rec.name.toString();
    }

    // xref information
    if (rec.xref === undefined) {
        console.warn('XREF does not exist.');
    }
    else {
        recordTemp.xref = rec.xref[0].$;
    }
    
    // description information
    if (rec.description === undefined) {
        console.warn('DESCRIPTION does not exist.');
    }
    else {
        recordTemp.description = rec.description.toString();
    }
    
    // number information
    if (rec.number === undefined) {
        console.warn('NUMBER does not exist.');
    }
    else {
        recordTemp.number = Number(rec.number[0]);
    }
    
    // add new registry to record
    portsNumbers.record.push(recordTemp);

    countRegist++;
});


msg.payload = portsNumbers;

return msg;