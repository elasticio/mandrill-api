exports.preRequest = preRequest;


function preRequest(options, cfg) {

    if (typeof options.body !== 'string') {
        return;
    }

    console.log("Parsing request body");

    options.body = JSON.parse(options.body);

    var template_content = options.body.template_content;

    if (typeof template_content === 'string' && template_content !== '') {
        console.log("Parsing template content to object");

        options.body.template_content = JSON.parse(template_content);
    }

    options.json = true;
}