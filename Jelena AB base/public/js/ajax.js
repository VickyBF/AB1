/* AJAX */

/* The doRequest function handles AJAX calls to the server.

 * Exercise 3a: BEGIN

 * The function must check that:
 *  - all the arguments are passed when called
 *  - type has one of the following value: "GET", "POST", "PUT", "DELETE"
 *  - the data (data parameter) is in JSON format
 * If a check fails the function must throw an error.

 * Exercise 3a: END

 * Exercise 3b: BEGIN

 * The function must open a connection to the server according to the type and url parameters
 * The function must correctly set the Request Headers according to the headers parameter, 
 * additionally to the ones needed by the JSON interaction according to the type parameter
 * The function must correctly set the data to be sent according to the data parameter

 * Exercise 3b: END

 * Exercise 3c: BEGIN

 * The function must call the callback function when the response is ready, passing the JSON object parsed from the response, if there is one,
 * or return the response status in case of errors.

 * Exercise 3c: END

 * 
 * @param {String} type The type of the AJAX request. One of: "GET", "POST", "PUT", "DELETE".
 * @param {String} url The url of the API to call, optionally with parameters.
 * @param {Object} headers The Associative Array containing the Request Headers. It must be null if there are no headers.
 * @param {JSON} data The data in the JSON format to be sent to the server. It must be null if there are no data.
 * @param {Function} callback The function to call when the response is ready.
 */
 function doJSONRequest(type, url, headers, data, callback){
     //3a
     data=data || null;
     try{
         data = JSON.stringify(data)
         JSON.parse(data);
     } catch (e) {
         throw e;
     }

     if (!type || !url || !headers|| !callback || arguments.length!=5 ){
         throw new  Error();
     }
     else{
         if (type === "GET"||type ==="POST"||type === "PUT"|| type ==="DELETE") {
             //3b
             var r = new XMLHttpRequest();
             r.open(type, url , true);
             r.setRequestHeader("Accept", "application/json");
             if(type==="POST" ||type === "PUT" ){
                 r.setRequestHeader("Content-Type", "application/json;charset=utf-8");

             }
             if (type === "GET"){
                 for(var header in headers){
                     r.setRequestHeader(header, headers[header]);
                 }2
             }
             r.onreadystatechange = function () {
                 //3c
                 if (r.readyState == 4 ){
                     if(r.status == 200){
                         callback(r.responseText);
                     }
                 }
             };

             r.send(data);
         }
         else{
             throw new Error();
         }
     }
     }

//Ex 6- Implement the Delete functionality on Tracks, Albums and Artists (TO BE FINISHED)
function del(e, url){

    e.preventDefault();
    var target = e.target;
    var _id = target.getAttribute("data-id");
    var r = new XMLHttpRequest();
    r.open("DELETE", url + "?_id=" + _id, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 204) return;
        removeDeletedElement(target);
    };
    r.send(null);
}

function removeDeletedElement(target){
    var toDelete = target.parentNode;
    //var parent = document.getElementById(//missing);
    parent.removeChild(toDelete);
}


/* AJAX */