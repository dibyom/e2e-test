/*
 * Adds "last" query parameter
*/

'use strict';

var util = require('util');

module.exports = {
  'my-path': myPath
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function myPath(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value;
  var last = req.swagger.params.last.value;
  var hello = util.format('Hello, %s %s', name, last);

  // this sends back a JSON response which is a single string
  res.json(hello);
}
