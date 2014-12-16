/* AJAX */

/* The doRequest function handles AJAX calls to the server.
 * @param {String} method The method of the AJAX request. One of: "GET", "POST", "PUT", "DELETE".
 * @param {String} url The url of the API to call, optionally with parameters.
 * @param {Object} headers The Associative Array containing the Request Headers. It must be null if there are no headers.
 * @param {JSON} data The data in the JSON format to be sent to the server. It must be null if there are no data.
 * @param {Function} callback The function to call when the response is ready.
 */
 function doJSONRequest(method, url, headers, data, callback){

  //all the arguments are mandatory
  if(arguments.length != 5) {
    throw new Error('Illegal argument count');
  }
  doRequestChecks(method, true, data);
  //create an ajax request
  var r = new XMLHttpRequest();
  //open a connection to the server using method method on the url API
  r.open(method, url, true);
  //set the headers
  doRequestSetHeaders(r, method, headers);
  //wait for the response from the server
  r.onreadystatechange = function () {
    //correctly handle the errors based on the HTTP status returned by the called API
    if (r.readyState != 4 || (r.status != 200 && r.status != 201 && r.status != 204)){
      return;
    } else {
      if(isJSON(r.responseText))
        callback(JSON.parse(r.responseText));
      else
        callback();
    }
  };
  //set the data
  var dataToSend = null;
  if (!("undefined" == typeof data) 
    && !(data === null))
    dataToSend = JSON.stringify(data);
  //console.log(dataToSend)
  //send the request to the server
  r.send(dataToSend);
}



function canJSON(value) {
  try {
    var jsonString = JSON.stringify(value);
    if (!("undefined" == typeof jsonString) 
      && !(jsonString === null)
      && !(jsonString == typeof String))
      return true;
    else
      return false;
  } catch (ex) {
    return false;
  }
}


function isJSON(jsonString){
  try {
    var o = JSON.parse(jsonString);
    if (o && typeof o === "object" && o !== null) {
      return true;
    }
  }
  catch (e) {}
  return false;
}


function doRequestSetHeaders(r, method, headers){
  //set the default JSON header according to the method parameter
  r.setRequestHeader("Accept", "application/json");

  if(method === "POST" || method === "PUT"){
    r.setRequestHeader("Content-Type", "application/json");
  }
  //set the additional headers
  if (!("undefined" == typeof headers) 
    && !(headers === null)){

    for(header in headers){
      //console.log("Set: " + header + ': '+ headers[header]);
      r.setRequestHeader(header,headers[header]);
    }

  }
}


function doRequestChecks(method, isAsynchronous, data){
  //verify the request method
  if(method!="GET" && method!="POST" && method!="PUT" && method!="DELETE") {
    throw new Error('Illegal method: ' + method + ". It should be one of: GET, POST, PUT, DELETE.");
  }
  //verify the data parameter
  if (!("undefined" == typeof data) 
    && !(data === null))
    if(!canJSON(data)) {
      throw new Error('Illegal data: ' + data + ". It should be a valid JSON.");
    }
  }

/* AJAX */