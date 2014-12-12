exports.preRequest = preRequest;


function preRequest(options, cfg) {

    if (typeof options.body !== 'string') {
        return;
    }

    console.log("Parsing request body");

    options.body = JSON.parse(options.body);

    parsePropertyToJSON(options.body, 'template_content');

    parsePropertyToJSON(options.body.message, 'global_merge_vars');

    options.json = true;
}

function parsePropertyToJSON(obj, propertyName) {
    var value = obj[propertyName];

    if (typeof value === 'string' && value !== '') {
        console.log("Parsing " + propertyName + " to object");

        obj[propertyName] = JSON.parse(value);
    }
}