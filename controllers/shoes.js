var shoes = require('../models/shoes');
// List of all shoes
exports.shoes_list = function(req, res) {
res.send('NOT IMPLEMENTED: shoes list');
};
// for a specific shoes.
//exports.shoes_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: shoes detail: ' + req.params.id);
// for a specific shoes.
exports.shoes_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await shoes.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle shoes create on POST.
exports.shoes_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: shoes create POST');
};
// Handle shoes delete form on DELETE.
exports.shoes_delete = function(req, res) {
res.send('NOT IMPLEMENTED: shoes delete DELETE ' + req.params.id);
};
// Handle shoes update form on PUT.
//exports.shoes_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: shoes update PUT' + req.params.id);
// Handle shoes update form on PUT.
exports.shoes_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await shoes.findById( req.params.id)
// Do updates of properties
if(req.body.shoes_color)
toUpdate.shoes_color = req.body.shoes_color;
if(req.body.shoes_type) toUpdate.shoes_type = req.body.shoes_type;
if(req.body.shoes_price) toUpdate.shoes_price = req.body.shoes_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`)
}
};
// List of all shoess
exports.shoes_list = async function(req, res) {
    try{
    theshoes = await shoes.find();
    res.send(theshoes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.shoes_view_all_Page = async function(req, res) {
try{
theshoes = await shoes.find();
res.render('shoes', { title: 'shoes Search Results', results: theshoes });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle Costume create on POST.
exports.shoes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new shoes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.shoes_color = req.body.shoes_color;
    document.shoes_type = req.body.shoes_type;
    document.shoes_price = req.body.shoes_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};