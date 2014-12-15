/* Setup on Page Load */
//<!-- build:remove -->
window.onload = function(){
    if(document.getElementById("Firstname")){
        enable();
    } else {
        bindMenu();

        updatePage();
        setupPlayer();
        setupPlaylists();
        setupSearch();
        loadArtist();
        loadAlbums();

        bindPLTracksDelete();
        setupVodedSong() // black stars for already voted songs

    }
}



function goLogout(){
    window.location = "/";
}

function enable(){
    var password = document.getElementById("password");
    var repeat = document.getElementById("repeat");
    document.getElementById("btnPlaceOrder").disabled = password.value !== repeat.value;
}

function bindMenu(){
  var menu = document.querySelectorAll("#main-menu > li > a");

  for (var elem = 0; elem < menu.length; ++elem) {
    //console.log(menu[elem])
    if(menu[elem].getAttribute("href").indexOf("library.html") > -1){
      menu[elem].onclick = function(e){
        drawLibrary(e);
        setupPlayer();
      } 
    }
    else if(menu[elem].getAttribute("href").indexOf("artists.html") > -1)
      menu[elem].onclick = drawArtists;
    else if(menu[elem].getAttribute("href").indexOf("albums.html") > -1)
      menu[elem].onclick = drawAlbums;
    else if(menu[elem].getAttribute("href").indexOf("top10.html") > -1)
        menu[elem].onclick = drawVoted;
  }
}

//<!-- /build -->
/* Voted Playlist*/
function drawVoted(e, addHistory){

    if(e && e.target){
        e.preventDefault();
    }

    addVotedToHistory(addHistory);

    //execute the AJAX call to the get tracks
    doJSONRequest("GET", "/tracks", null, null, renderTop10);

    function renderTop10(tracks){
        var tracksData = buildTracksData(tracks);
        var newtracksData=[];
        for (var i=0; i < tracksData.length;i++){
            if(tracksData[i].vote == 1){
                newtracksData.push(tracksData[i])
            }
        }

        var data = {
            "tracks" : newtracksData
        };

        dust.render("tracks", data, function(err, out) {

            var content = document.getElementById("content");

            content.innerHTML = out;

            bindAlbumLink();

            bindArtistLink();

            bindTracksDelete();

            bindEditTrackName();

        });
        for (var i=0; i < newtracksData.length;i++){
            if(newtracksData[i].vote == 1){
                var trackID=newtracksData[i]._id;
                var element=document.getElementById("icon/"+ trackID)
                element.classList.remove('fa-star-o');
                element.classList.add('fa-star');
            }
        }

    }
}
function addVotedToHistory(addHistory){
    if((("undefined" == typeof addHistory)
        || (addHistory === null))
        || addHistory==true){

        var state = {
            'function' : 'drawVoted'
        };

        addToHistory(JSON.stringify(state), "/#Voted");
    }
}

/////////////

/* UI */




/////////////////////////////////////////////////////////////////
/* Player */
//<!-- /build -->

/////////////////////////////////////////////////////////////////
/* Player */
//<!-- /build -->
/* Search */

//Library.dust =>
//<input id="main-search" list="suggestions" onkeyup = "previewResults(event, this.value)" placeholder="Search" type="search" class="nav-menu-search">
//<datalist id="suggestions"></datalist>
var lastSearch = '';
function previewResults(evt, query) {
    console.log(query);
    if (query != lastSearch) {
        console.log(evt.keyCode);
        previewR(query);
    } else if (evt.keyCode == 13 || evt.keyCode == 10){
        search(window.location.hash, query);
    }
    lastSearch = query;
}

function suggestItems(obj, query) {
    var output = '';
    obj.forEach(function (curr) {
        if (curr.name.toLowerCase().indexOf(query.toLowerCase()) != -1)
            output += '<option value="'+curr.name+'">' + curr.name + '</option>';
    });
    document.getElementById('suggestions').innerHTML = output;
}

function previewR(query) {
    if (query == '') {
        document.getElementById('suggestions').innerHTML = '';
        return;
    }
    if (window.location.hash.indexOf('#album') == 0)
        doJSONRequest('GET', '/albums', {}, null, function (obj) {
            suggestItems(obj, query);
        });
    else if (window.location.hash.indexOf('#artist') == 0)
        doJSONRequest('GET', '/artists', {}, null, function (obj) {
            suggestItems(obj, query);
        });
    else // should this search also in albums and artists?
        doJSONRequest('GET', '/tracks', {}, null, function (obj) {
            suggestItems(obj, query);
        });
}




function search(from, query) {

    var content;
    var tracksCont = '<h2>Tracks</h2>';
    var albumsCont = '<h2>Albums</h2>';
    var artistsCont = '<h2>Artists</h2>';
    var timesCalled = 0;

    function viewFoundedResult() {

        timesCalled += 1;
        if (timesCalled == 3) {
            timesCalled = 0;
            console.log(from);
            switch (from) {
                case '#albums':
                    content = albumsCont + tracksCont + artistsCont;
                    break;
                case '#artists':
                    content = artistsCont + tracksCont + albumsCont;
                    break;
                case '#library':
                    content = tracksCont + albumsCont + artistsCont;
            }
            console.log(content);
            document.getElementById("content").innerHTML = content;
        }
        console.log("search done");
    }


    // function doJSONRequest(method, url, headers, data, callback)
    // returns callback()
    // {Function} callback The function to call when the response is ready.




    doJSONRequest('GET', '/tracks', {}, null, function (obj) {
        var result = [];
        obj.forEach(function (current) {
            if (current.name.toLowerCase().indexOf(query.toLowerCase()) != -1)
                result.push(current);
        });

        dust.render('tracks', {tracks: result}, function (err, html) {
            tracksCont += html;
        });
        if (result.length == 0)
            tracksCont = '<h4>No tracks found</h4>';
        viewFoundedResult();
    });




    doJSONRequest('GET', '/albums', {}, null, function (obj) {
        var result = [];
        obj.forEach(function (current) {
            if (current.name.toLowerCase().indexOf(query.toLowerCase()) != -1)
                result.push(current);
        });

        dust.render('albums', {albums: result}, function (err, html) {
            albumsCont += html;
        });
        if (result.length == 0)
            albumsCont = '<h5>* No albums with such name</h5>';
        viewFoundedResult();
    });




    doJSONRequest('GET', '/artists', {}, null, function (obj) {
        var result = [];
        obj.forEach(function (current) {
            if (current.name.toLowerCase().indexOf(query.toLowerCase()) != -1)
                result.push(current);
        });

        dust.render('artists', {artists: result}, function (err, html) {
            artistsCont += html;
        });
        if (result.length == 0)
            artistsCont = '<h5>* No artists found</h5>';
        viewFoundedResult();
    });
}

/* Search */






/* Library */

function drawLibrary(e, addHistory){

  if(e && e.target){
    e.preventDefault();
  }

  addLibraryToHistory(addHistory);

  //execute the AJAX call to the get tracks
  doJSONRequest("GET", "/tracks", null, null, renderTracks);

  function renderTracks(tracks){
    var tracksData = buildTracksData(tracks);
    var data = {
      "tracks" : tracksData
    };

    dust.render("tracks", data, function(err, out) {

      var content = document.getElementById("content");

      content.innerHTML = out;

      bindAlbumLink();

      bindArtistLink();

      bindTracksDelete();

      bindEditTrackName();

    });
      setupVodedSong()

  }
}

function buildTracksData(tracks){

  var tracksData = [];

  for(track in tracks){

    var newTracksData = {};
    newTracksData.artist = {};
    newTracksData.album = {};

    newTracksData.name = tracks[track].name;
    newTracksData._id = tracks[track]._id;
    newTracksData.duration = formatTime(tracks[track].duration);

    newTracksData.artist._id = tracks[track].artist._id;
    newTracksData.artist.name = tracks[track].artist.name;

    newTracksData.album._id = tracks[track].album._id;
    newTracksData.album.name = tracks[track].album.name;
      newTracksData.vote = tracks[track].vote;

    tracksData.push(newTracksData);

  }

  return tracksData;

}

function addLibraryToHistory(addHistory){
  if((("undefined" == typeof addHistory) 
    || (addHistory === null))
    || addHistory==true){

    var state = {
      'function' : 'drawLibrary'
    };

    addToHistory(JSON.stringify(state), "/#library");
  }
}

//NOTE: Still used by setupSearch
function createHTMLLibrary(tracks){
  var newHtml = "";
  tracks.forEach(function(track){
    var artist = findOne(model.artists, "_id", track.artist);
    var album = findOne(model.albums, "_id", track.album);

    newHtml+= '<div id="'+ track._id +'"" class="fl-tl-row" draggable="true" ondragstart="drag(event)" ondblclick="PlaySelectedSong(this) >';
    newHtml+= '<div class="fl-tl-cell fl-tl-name"><a href="#">'+ track.name + '</a></div>\n';
    newHtml+= '<div class="fl-tl-cell fl-tl-artist"><a href="artists/'+ encodeURI(artist.name)+ '">'+ artist.name +'</a></div>\n';
    newHtml+= '<div class="fl-tl-cell fl-tl-album"><a href="albums/'+ encodeURI(album.name)+ '">'+ album.name +'</a></div>\n';
    newHtml+= '<div class="fl-tl-cell fl-tl-time">'+ formatTime(track.duration) + '</div>\n';
    newHtml+= '</div>\n';
  })

  return newHtml;
}

function bindTracksDelete(){
  var tracks = document.querySelectorAll(".fl-tl-delete a");

  for (var elem = 0; elem < tracks.length; ++elem) {
    tracks[elem].onclick = deleteTrack;
  }
}

function deleteTrack(e){

  var href;
  var target = e.target;

  if(e && e.target){
    e.preventDefault();
    href = target.getAttribute("href");
  }

    //execute the AJAX call to the delete a single album
    doJSONRequest("DELETE", href, null, null, removeTrack);

    function removeTrack(){

      var toDelete = target.parentNode.parentNode; 
      var parent = document.getElementById("tracks-list");

      parent.removeChild(toDelete);

    }

  }

  function bindEditTrackName(){

    var tracksName = document.querySelectorAll("#tracks-list > div > div.fl-tl-name > span + .edit-btn");

    for (var elem = 0; elem < tracksName.length; ++elem) {
      tracksName[elem].onclick = editTrackName;
    }

  }

  function editTrackName(e){

    if(e && e.target){
      e.preventDefault();
    }

    var target = e.target;

    //console.log(target);

    var editable = target.previousSibling;


    if(editable.contentEditable == "false" || editable.contentEditable == "inherit"){ //we have to enable the editing

      editable.contentEditable = "true";

      removeClass(target.firstChild, "fa-pencil");

      removeClass(target.firstChild, "fl-tl-pencil");

      addClass(target.firstChild, "fa-check");

      addClass(target.firstChild, "fl-tl-check");

      //set the cursor on the editable element
      var s = window.getSelection(),
      r = document.createRange();
      r.setStart(editable, 0);
      r.setEnd(editable, 0);
      s.removeAllRanges();
      s.addRange(r);

    } else { //we have to save the modified name

      var href = editable.getAttribute("href");

      //send the data to the server
      var newName = editable.innerText;

      var updatedTrack = {
        'name' : newName
      }

      doJSONRequest("PUT", href, null, updatedTrack, disableEditing);

      function disableEditing(){

        editable.contentEditable = "false";

        removeClass(target.firstChild, "fa-check");

        removeClass(target.firstChild, "fl-tl-check");

        addClass(target.firstChild, "fa-pencil");

        addClass(target.firstChild, "fl-tl-pencil");

      }

    }

  }

  /* Library */

  /* Artists */

  function drawArtists(e, addHistory){
    if(e && e.target){
      e.preventDefault();
    }

    addArtistsToHistory(addHistory);

  //execute the AJAX call to get the artists
  doJSONRequest("GET", "/artists", null, null, renderArtists);

  function renderArtists(artists){
    //create the data object with the structure expected by the compiled view
    var data = {
      "artists" : artists
    }

    dust.render("artists", data, function(err, out) {

      var content = document.getElementById("content");

      content.innerHTML = out;

      bindArtistLink();

      bindArtistDelete();

    });

    //console.log(artists);
  }
  
}

function addArtistsToHistory(addHistory){
 if((("undefined" == typeof addHistory) 
  || (addHistory === null))
  || addHistory==true){
  var state = {
    'function' : 'drawArtists'
  };

  addToHistory(JSON.stringify(state), "/#artists");
}
}

function drawArtist(e, addHistory){

  var href;

  if(e && e.target){
    e.preventDefault();
    href = e.target.getAttribute("href");
  } else {
    href = e;
  }

  addArtistToHistory(href, addHistory)

    //execute the AJAX call to the get a single artist
    doJSONRequest("GET", href, null, null, renderArtist);

    function renderArtist(artist){

        //we need the artist's tracks
        doJSONRequest("GET", "/tracks?filter=" + encodeURIComponent(JSON.stringify({'artist' : artist._id})), null, null, renderShowArtist);

        function renderShowArtist(tracks){

          var artistData = [];
          var artistTracks = buildTracksData(tracks);

          artistData.artwork = artist.artwork;
          artistData._id = artist._id;
          artistData.name = artist.name;
          artistData.genre = artist.genre;

          var data = {
            "artist" : artistData,
            "tracks" : artistTracks
          };

          dust.render("artist", data, function(err, out) {

            var content = document.getElementById("content");

            content.innerHTML = out;

            bindArtistLink();

            bindAlbumLink();

            bindTracksDelete();

            bindEditTrackName();

          });
        }

      }
    }

    function addArtistToHistory(href, addHistory){
      if((("undefined" == typeof addHistory) 
        || (addHistory === null))
        || addHistory==true){
        var state = {
          'function' : 'drawArtist',
          'href'   : href
        };

        addToHistory(JSON.stringify(state), "/#" + href);
      }
    }

    function bindArtistLink(){
      var artists = document.querySelectorAll(".artist-link");

      for (var elem = 0; elem < artists.length; ++elem) {
        artists[elem].onclick = drawArtist;
      }
    }

    function bindArtistDelete(){
      var artists = document.querySelectorAll(".delete-btn");

      for (var elem = 0; elem < artists.length; ++elem) {
      artists[elem].onclick = deleteArtist;
    }
  }

  function deleteArtist(e){

    var href;
    var target = e.target;

    if(e && e.target){
      e.preventDefault();
      href = target.getAttribute("href");
    }
      var this_id = href.split("/")[1];
      doJSONRequest("GET", "/tracks/" , null, null, function(trList){
          for(var i=0;i<trList.length;i++){
              if (trList[i].artist._id==this_id){
                  var trackToDel=trList[i]._id;
                  doJSONRequest("DELETE", "/tracks/" + trackToDel, null, null, function(){});
              }
          }
          doJSONRequest("GET", "/albums/" , null, null, function(alList){
              for(var i=0;i<alList.length;i++){
                  if (alList[i].artist._id==this_id){
                      var alToDel=alList[i]._id;
                      doJSONRequest("DELETE", "/albums/" + alToDel, null, null, function(){});
                  }
              }

              doJSONRequest("DELETE", href, null, null, removeArtist);
          })
      })

    function removeArtist(){

      //console.log(responseText);

      //console.log(target);

      var toDelete = target.parentNode.parentNode; 
      var parent = document.getElementById("artists-list");

      parent.removeChild(toDelete);

    }

  }

  /* Artists */

  /* Albums */

  function drawAlbums(e, addHistory){
    if(e && e.target)
      e.preventDefault();

    addAlbumsToHistory(addHistory);

  //execute the AJAX call to the get albums
  doJSONRequest("GET", "/albums", null, null, renderAlbums);

  function renderAlbums(albums){

    var albumData = [];

    for(album in albums){

      var newAlbumData = {};
      newAlbumData.artist = {};

      newAlbumData.artwork = albums[album].artwork;
      newAlbumData._id = albums[album]._id;
      newAlbumData.name = albums[album].name;
      newAlbumData.artist._id = albums[album].artist._id;
      newAlbumData.artist.name = albums[album].artist.name;

      albumData.push(newAlbumData);

    }

    var data = {
      "albums" : albumData
    };

    dust.render("albums", data, function(err, out) {

      var content = document.getElementById("content");

      content.innerHTML = out;

      bindAlbumLink();

      bindAlbumDelete();

      bindArtistLink();

    });

  }

}

function addAlbumsToHistory(addHistory){
  if((("undefined" == typeof addHistory) 
    || (addHistory === null))
    || addHistory==true){
    var state = {
      'function' : 'drawAlbums'
    };

    addToHistory(JSON.stringify(state), "/#albums");
  }
}

function drawAlbum(e, addHistory){
  var href;

  if(e && e.target){
    e.preventDefault();
    href = e.target.getAttribute("href");
  } else {
    href = e;
  }

  addAlbumToHistory(href, addHistory);

    //console.log(target.getAttribute("href"));

    //execute the AJAX call to the get a single album
    doJSONRequest("GET", href, null, null, renderAlbum);

    function renderAlbum(album){

        //we need the album's tracks
        doJSONRequest("GET", "/tracks?filter=" + encodeURIComponent(JSON.stringify({'album' : album._id})), null, null, renderShowAlbum);

        function renderShowAlbum(tracks){

          var albumData = [];
          var albumTracks = buildTracksData(tracks);

          albumData.artist = {};

          albumData.artwork = album.artwork;
          albumData._id = album._id;
          albumData.name = album.name;
          albumData.label = album.label;
          albumData.dateReleased = album.dateReleased.split("T")[0];
          albumData.artist._id = album.artist._id;
          albumData.artist.name = album.artist.name;

          var data = {
            "album" : albumData,
            "tracks" : albumTracks
          };

          dust.render("album", data, function(err, out) {

            var content = document.getElementById("content");

            content.innerHTML = out;

            bindAlbumLink();

            bindArtistLink();

            bindTracksDelete();

            bindEditTrackName();

          });

        }

      }
    }

    function addAlbumToHistory(href, addHistory){
      if((("undefined" == typeof addHistory) 
        || (addHistory === null))
        || addHistory==true){
        var state = {
          'function' : 'drawAlbum',
          'href'   : href
        };

        addToHistory(JSON.stringify(state), "/#" + href);
      }
    }

    function bindAlbumLink(){
      var albums = document.querySelectorAll(".album-link");

      for (var elem = 0; elem < albums.length; ++elem) {
      //console.log(albums[elem])
      albums[elem].onclick = drawAlbum;
    }
  }

  function bindAlbumDelete(){
    var albums = document.querySelectorAll(".delete-btn");

    for (var elem = 0; elem < albums.length; ++elem) {
      //console.log(albums[elem])
      albums[elem].onclick = deleteAlbum;
    }
  }
function deleteAlbum(e){

    var href;

    var target = e.target;

    if(e && e.target){
        e.preventDefault();
        href = target.getAttribute("href");

    }
    var this_id = href.split("/")[1];

    //execute the AJAX call to the delete a single album
    doJSONRequest("GET", "/tracks/" , null, null, function(trList){
        console.log(trList)
        for(var i=0;i<trList.length;i++){
            if (trList[i].album._id==this_id){
                var trackToDel=trList[i]._id;
                doJSONRequest("DELETE", "/tracks/" + trackToDel, null, null, function(){});

            }
        }
        doJSONRequest("DELETE", href, null, null, removeAlbum);

    });

    function removeAlbum(){

        var toDelete = target.parentNode.parentNode;
        var parent = document.getElementById("albums-list");

        parent.removeChild(toDelete);

    }

}


  /* Albums */

  /* UI */

  /* History Navigation */

  /*
 * The addToHistory function push the @param{state} and the @param{url} in the history State
 *
 * @param {JSON String} state The current state of the search form's button
 * @param {String} url The current url as long with the hash
 */
 function addToHistory(state, url){

  history.pushState(state, null, url);

  //console.log("Added to history: " + url + ", state: " + state);

}

/*
 * The updatePage function handles the update of the page when an onpopstate or onload event is fired.
 * The function gets the hash and the current state, calls the ajaxFind function to update the view 
 * and update the form's input value with the data retrieved from the hash
 *
 * @param {JSON String} state The current state of the search form's button
 * @param {String} url The current url as long with the hash
 */
 function updatePage(event) {

  //get reference to the hash and to the current state
  var hash = document.location.hash;
  if(event && event.state)
    var currentState = JSON.parse(event.state);

  if(currentState){

    //console.log(hash);
    //console.log(currentState);

    if(currentState.function == 'drawLibrary')
      drawLibrary(null, false);
    else if(currentState.function == 'drawArtist')
      drawArtist(currentState.href, false);
    else if(currentState.function == 'drawAlbum')
      drawAlbum(currentState.href, false);
    else if(currentState.function == 'drawAlbums')
      drawAlbums(null, false);
    else if(currentState.function == 'drawArtists')
      drawArtists(null, false);

  } else if(hash){

    //console.log(hash);
    //console.log(currentState);

    if(hash.indexOf("library") > -1)
      drawLibrary(null, false);
    else if(hash.indexOf("#artists/") > -1)
      drawArtist(hash.replace("#",""), false);
    else if(hash.indexOf("#albums/") > -1)
      drawAlbum(hash.replace("#",""), false);
    else if(hash.indexOf("albums") > -1)
      drawAlbums(null, false);
    else if(hash.indexOf("artists") > -1)
      drawArtists(null, false);

  } else {
    drawLibrary(null, false);
  }

}

//bind the window onpopstate event to the updatePage function
window.onpopstate = updatePage;

/* History Navigation */

/* Search */

function setupSearch(){
  var searchBox = document.getElementById("main-search");
  searchBox.addEventListener("input", function(){
    var split = this.value.split(" ");

    result = fuzzyFind(model.tracks, "name", this.value);

    if(this.value.trim() === ""){
      drawLibrary();
      return;
    }


    var container = document.getElementById('tracks-list');
    var classList = container.classList;

    var newHtml = '<div class="fl-tl-thead fl-tl-row">\n\
    <div class="fl-tl-th fl-tl-name">Song</div>\n\
    <div class="fl-tl-th fl-tl-artist">Artist</div>\n\
    <div class="fl-tl-th fl-tl-album">Album</div>\n\
    <div class="fl-tl-th fl-tl-time">Time</div>\n\
    </div>';

    newHtml += createHTMLLibrary(result);

    container.innerHTML = newHtml;
  })
}

function find(arr, prop, val){
  var res = [];
  arr.forEach(function(item){
    if("undefined" !== item[prop]
      && item[prop] === val){
      res.push(item)
  }
});
  return res;
}

function findOne(arr, prop, val){
  for (var i=0, l=arr.length; i<l; i++){
    var item = arr[i];
    if("undefined" !== item[prop]
      && item[prop] === val){
      return item;
  }
}
}

// delete playlist
var delpl = document.getElementsByClassName("del-pl-btn");

function allStorage(){

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0;

    for (; i < keys.length; i++) {
        archive.push( localStorage.getItem(keys[i]) );
    }
    console.log(archive)
    return archive;
}


function deletePlaylist() {
    console.log("going to del")
    console.log(localStorage.playlists)


};




// end detele playlist



function setupPlaylists(){
  loadPlaylistsFromLocalStorage();
  var createPlBtn = document.getElementById("create-pl-btn");
  createPlBtn.addEventListener('click', function(){
    localStorage.pl_cnt =  localStorage.pl_cnt || 0;
    var cnt = localStorage.pl_cnt;
    var _id = "pl-"+cnt
    var name = 'New Playlist ' + (++cnt);
    var newPlaylist =  playlist(_id, name, model.users[0]._id, []);
    //update localStorage counter
    localStorage.pl_cnt = cnt;

    //persist to localStorage
    savePlaylist(newPlaylist);
    appendNewPlaylistToMenu(newPlaylist);
  })
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-btn') ) {
      return onEditPlaylistClicked(e.target)
    }
    if (e.target.classList.contains('pl-name-input') ) {
      return e.preventDefault();
    }
    if (e.target.classList.contains('pl-name') ) {
      e.preventDefault();
      return onPlaylistClicked(e.target)
    }
    //the click was outside an edit element, close currently edited ones
    var currentlyEditing = document.querySelectorAll('#playlists > li.edit .edit-btn');
    for (var i = currentlyEditing.length - 1; i >= 0; i--) {
      onEditPlaylistClicked(currentlyEditing[i]);
    };
  });
}
function allowDrop(evt) {
  evt.preventDefault();
}
function drag(evt) {
  evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
}
function drop(evt) {
  evt.preventDefault();
  var trackId = evt.dataTransfer.getData("text/plain");
  var playlistId = evt.currentTarget.id
  addTrackToPlaylist(playlistId, trackId)
}
function addTrackToPlaylist(playlistId, trackId){
  var playlists =  JSON.parse(localStorage.playlists);
  var pl = playlists[playlistId];
  if(typeof pl === "undefined"){
    throw new Error("playlist doesn't exist in localStorage")
  }
  var track = findOne(model.tracks, "_id", trackId);
  if(typeof track === "undefined" || track === null){
    throw new Error("track doesn't exist in the model")
  }
  pl.tracks.push(trackId);
  //persist
  playlists[playlistId]= pl;
  localStorage.playlists = JSON.stringify(playlists);
}
function onPlaylistClicked(link){
  localStorage.playlists = localStorage.playlists || JSON.stringify({});
  var playlists =  JSON.parse(localStorage.playlists);
  var id = link.dataset["for"];
  var playlist = playlists[id];
  var tracks = playlist.tracks;
  var container = document.getElementById('tracks-list');
  var classList = container.classList;
  if (tracks.length < 1){
    return container.innerHTML = "Playlist " + playlist.name + " is empty."
  }
  var newHtml = '<div class="fl-tl-thead fl-tl-row">\n\
  <div class="fl-tl-th fl-tl-name">Song</div>\n\
  <div class="fl-tl-th fl-tl-artist">Artist</div>\n\
  <div class="fl-tl-th fl-tl-album">Album</div>\n\
  <div class="fl-tl-th fl-tl-time">Time</div>\n\
  </div>';
  tracks.forEach(function(track){
    track = findOne(model.tracks, "_id", track)
    var artist = findOne(model.artists, "_id", track.artist);
    var album = findOne(model.albums, "_id", track.album);
    newHtml+= '<div id="'+ track._id +'"" class="fl-tl-row" draggable="true">'
    newHtml+= '<div class="fl-tl-cell fl-tl-name"><a href="#">'+ track.name + '</a></div>\n';
    newHtml+= '<div class="fl-tl-cell fl-tl-artist"><a href="artists/'+ encodeURI(artist.name)+ '">'+ artist.name +'</a></div>\n';
    newHtml+= '<div class="fl-tl-cell fl-tl-album"><a href="albums/'+ encodeURI(album.name)+ '">'+ album.name +'</a></div>\n';
    newHtml+= '<div class="fl-tl-cell fl-tl-time">'+ formatTime(track.duration) + '</div>\n';
    newHtml+= '<div class="fl-tl-th fl-tl-delete"><a href="#" >×</a></div>';
    newHtml+= '</div>\n';
  })
  container.innerHTML = newHtml;
}
function bindPLTracksDelete(){
  var tracks = document.querySelectorAll(".fl-tl-delete a");
  for (var elem = 0; elem < tracks.length; ++elem) {
    tracks[elem].onclick = deletePLTrack;
  }
}
function deletePLTrack(e){
  var href;
  var target = e.target;
  if(e && e.target){
    e.preventDefault();
    href = target.getAttribute("href");
  }
  //execute the AJAX call to the delete a single album
  doJSONRequest("DELETE", href, null, null, removePLTrack);
  function removePLTrack(){
    var toDelete = target.parentNode.parentNode;
    var parent = document.getElementById(e._id);
    parent.removeChild(toDelete);
  }
}
function onEditPlaylistClicked(btn){
  var id = btn.dataset["for"];
  var el = document.getElementById(id);
  var input = document.querySelector('#'+id + " > input[type='text']");
  if(el.classList.contains("edit")){
    el.classList.remove('edit')
    btn.innerHTML = '<i class="fa fa-pencil" ></i>'
    var input = document.querySelector('#'+id + " > input[type='text']");
    var nameLink =  document.querySelector('#'+id + " > .pl-name");
    //return on empty string
    if(input.value.trim() == '') return;
    nameLink.innerHTML = '<i class="nav-menu-icon fa fa-bars"></i> ' + input.value;
    nameLink.href = "playlists/" + encodeURI(input.value)
    //persist change
    var playlists =  JSON.parse(localStorage.playlists);
    playlists[id]["name"] = input.value;
    localStorage.playlists = JSON.stringify(playlists);
  }else{
    el.classList.add('edit')
    btn.innerHTML = '<i class="fa fa-check" ></i>'
    input.focus();
  }
}
function loadPlaylistsFromLocalStorage(){
  localStorage.playlists = localStorage.playlists || JSON.stringify({});
  var playlists =  JSON.parse(localStorage.playlists);
  //merge localStorage playlists with model playlists
  // ---------------------------------- IMPORTANT --------------------------\\
  model.playlists.forEach(function(playlist){
    if (!playlists.hasOwnProperty(playlist._id))
      playlists[playlist._id] = playlist;
  });
  // ---------------------------------- IMPORTANT --------------------------\\
  var keys = Object.keys(playlists);
  var newHtml ='';
  keys.forEach(function(key){
    appendNewPlaylistToMenu(playlists[key]);
  });
  //persist playlists
  localStorage.playlists = JSON.stringify(playlists);
  //console.log(localStorage.playlists)
}
function appendNewPlaylistToMenu(pl){
  var id = pl._id;
  var name = pl.name;
  var newHtml ='';
  newHtml += '  <li id="' + id + '" ondrop="drop(event)" ondragover="allowDrop(event)">';
  newHtml += '    <a class="pl-name" data-for="' + id + '" href="playlists/' + encodeURI(name) + '">';
  newHtml += '      <i class="nav-menu-icon fa fa-bars"></i>' + name;
  newHtml += '    </a>';
  newHtml += '    <a class="edit-btn" data-for="' + id + '" href="#"><i class="fa fa-pencil"></i></a><a class="del-pl-btn" onclick= deletePlaylist()><img src="./images/trash48.jpg" style="width:20px;height:20px"></x></a>';
  newHtml += '    <input  class="pl-name-input" name="' + id + '" type="text" value="' + name + '">';
  newHtml += '  </li>';
  document.getElementById('playlists').innerHTML += newHtml;
}

/* Player */

/**
* This function setups the player. More specifically:
* - It should create an audio element and append it in the body
*
* - The audio element should load by default the first track of your library
*
* - When the track is paused and you click on the play button of exercise one,
*   it should play the current track and switch the icon of the button to 'pause'.
*   You don't need to use the checkbox hack for toggling the icons. You might as well
*   use Javascript.
*
* - When the track is playing and you click on the pause button of exercise one,
*   it should pause the current track and switch the icon of the button to 'pause'.
*
*
* Optionally:
* - When the track is playing the progress bar should be updated to reflect the progress
*
* - When the progress bar is clicked the current time of the player should skip to
*  the corresponding time (that is, if the click was on the 2/3 of the total width
*  of the bar, the track current time should be the 2/3 of the total duration). Also
*  the progress bar should be updated.
*
* - As the track is playing the elapsed time should be updated
*
* - Implement a volume bar that does what the progress bar does for sound but for volume.
*
* - When a track is clicked from the library, your player should start playing it
*
* - When a track finishes your player should play the next one
*/
var newTrackList =[]
var equalnewTrackList=[]
var counter=0;
var initPlaymode = "Sequential";

function setupPlayer() {

  if (! document.getElementsByTagName('audio')[0]) {  //Cretate the list of tracks

    doJSONRequest("GET", "/tracks", null, null, setList);
    function setList(lista){
      for (var i= 0;i < lista.length; i++){
        newTrackList.push(lista[i]);
        equalnewTrackList.push(lista[i]);
      }
      shuffle(equalnewTrackList);
      //console.log(newTrackList)
      // Buttons
      var playButton = document.getElementById("play-pause");
      //var muteButton = document.getElementById("mute");
      //var fullScreenButton = document.getElementById("full-screen");
      var volumeOff = document.getElementById("volume-off");
      var volumeUp = document.getElementById("volume-up");
      var next = document.getElementById("next");
      var previous = document.getElementById("previous");
      var playMode = document.getElementById("playMode");

      // Sliders
      var seekRail = document.getElementById("pl-timeline-rail");
      var seekBar = document.getElementById("pl-timeline-bar");
      var volumeRail = document.getElementById("pl-volume-rail");
      var volumeBar = document.getElementById("pl-volume-bar");

      //Labels
      var timeElapsed = document.getElementById("time-elapsed");
      var timeTotal = document.getElementById("time-total");

      //Image and title
      var image = document.getElementById("image_of_song");
      var title = document.getElementById("title_of_song");
      var artist_of_song = document.getElementById("album_of_song");
      //console.log(image.style.backgroundImage);

      //Setup player situation: album, title and image
      function setUpTitleStuff(tracklist) {
        title.innerHTML = tracklist[counter].name;
        var new_image = tracklist[counter].album.artwork;
        image.style.backgroundImage = "url(" + new_image + ")";
        var id_of_artist = tracklist[counter].artist._id;
        doJSONRequest("GET", "/artists/" + id_of_artist, null, null, function (artist) {
          artist_of_song.innerHTML = artist.name;
        });
      }

      setUpTitleStuff(newTrackList);

      // Audio element
      var audio = document.createElement('audio');
      audio.addEventListener("loadedmetadata", function () {
        //set total time
        timeTotal.innerHTML = formatTime(Math.floor(audio.duration));

        //set volume
        volumeBar.style.width = (audio.volume * 100) + "%";
      })
      //setSong(0, newTrackList,audio);
      document.body.appendChild(audio);

      audio.addEventListener("ended", function () {
        var oldCounter = counter; //Otherwise the new played song won't we blue but grey
        if (!newTrackList[counter+1]) {
          counter = 0;
        }
        else {
          counter++;
        }
        setSong(counter, newTrackList,equalnewTrackList, audio);
        audio.play();
        //console.log(newTrackList[counter].name);

        if(initPlaymode == "Sequential"){
          setUpTitleStuff(newTrackList)
          document.getElementById(newTrackList[oldCounter]._id).style.background ='#d9d9d9'; //old/finished song becomes grey
        }
        else{
          setUpTitleStuff(equalnewTrackList)
          document.getElementById(equalnewTrackList[oldCounter]._id).style.background ='#d9d9d9';
        }

      })

      // Event listener for the play/pause button
      playButton.addEventListener("click", function () {
        //console.log(counter)
        if(initPlaymode == "Sequential"){
          setUpTitleStuff(newTrackList)
        }
        else{
          setUpTitleStuff(equalnewTrackList)
        }
        if (audio.paused == true) {
          setSong(counter, newTrackList,equalnewTrackList,audio);
          // Play the track
          audio.play();

          // Update the button icon to 'Pause'
          playButton.classList.remove('fa-play');
          playButton.classList.add('fa-pause');
          playButton.value="clicked"
        } else {
          // Pause the track
          audio.pause();

          // Update the button icon to 'Play'
          playButton.classList.remove('fa-pause');
          playButton.classList.add('fa-play');
          playButton.value="unclicked";
          if(initPlaymode == "Sequential"){
            document.getElementById(newTrackList[counter]._id).style.background ='#d9d9d9';
          }
          else{
            document.getElementById(equalnewTrackList[counter]._id).style.background ='#d9d9d9';
          }

        }
      });

      playMode.addEventListener("click", function (){
        var oldCounter = counter;
        if (initPlaymode == "Sequential") {
          initPlaymode = "Random";
          playMode.classList.remove('fa-refresh');
          playMode.classList.add('fa-random');
          document.getElementById(newTrackList[oldCounter]._id).style.background ='#d9d9d9';
        }
        else {
          initPlaymode = "Sequential";
          playMode.classList.remove('fa-random');
          playMode.classList.add('fa-refresh');
          document.getElementById(equalnewTrackList[oldCounter]._id).style.background ='#d9d9d9';
        }
        counter = 0;
        var i=0;
        for (var i= 0;i < newTrackList.length; i++){ //reset table with original color
          document.getElementById(newTrackList[i]._id).style.background ='#f5f5f5';
        }
        //console.log(counter)
      });

      // Event listener for the seek bar
      seekRail.addEventListener("click", function (evt) {
        var frac = (evt.offsetX / seekRail.offsetWidth)
        seekBar.style.width = (frac * 100) + "%";

        // Calculate the new time
        var time = audio.duration * frac;
        audio.currentTime = time;
      });

      // Update the seek bar as the track plays
      audio.addEventListener("timeupdate", function () {
        // Calculate the slider value
        var value = (100 / audio.duration) * audio.currentTime;

        // Update the seek bar
        seekBar.style.width = value + "%";

        // Update the elapsed time
        timeElapsed.innerHTML = formatTime(Math.floor(audio.currentTime));
      });

      // Event listener for the volume bar
      volumeRail.addEventListener("click", function (evt) {
        var frac = (evt.offsetX / volumeRail.offsetWidth)
        volumeBar.style.width = (frac * 100) + "%";

        audio.volume = frac;
      });

      //Click listener for volume buttons
      volumeOff.addEventListener("click", function (evt) {
        volumeBar.style.width = "0%";
        audio.volume = 0;

        volumeOff.classList.add("active")
        volumeUp.classList.remove("active")
      });

      volumeUp.addEventListener("click", function (evt) {
        volumeBar.style.width = "100%";
        audio.volume = 1;

        volumeUp.classList.add("active")
        volumeOff.classList.remove("active")
      });

      // Event listener for botton "next"
      next.addEventListener("click", function (evt) {
        counter++;
        if (newTrackList[counter]){
          setSong(counter, newTrackList,equalnewTrackList,audio) ;
        }
        else{
          setSong(0, newTrackList,equalnewTrackList,audio);
        }
        if(initPlaymode == "Sequential"){
          setUpTitleStuff(newTrackList)
        }
        else{
          setUpTitleStuff(equalnewTrackList)
        }
      });

      // Event listener for botton "previous"
      previous.addEventListener("click", function (evt) {
        counter--;
        if (newTrackList[counter]){
          setSong(counter, newTrackList,equalnewTrackList,audio);
        }
        else{
          setSong(0, newTrackList,equalnewTrackList,audio);
        }
        if(initPlaymode == "Sequential"){
          setUpTitleStuff(newTrackList)
        }
        else{
          setUpTitleStuff(equalnewTrackList)
        }
      });

      function shuffle(o){ //to shuffle an array
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      };

      function setSong(i, tracklist,shuffled,audio){
        //Song to be played
        if(initPlaymode == "Sequential"){
          audio.src=tracklist[i].file;
          document.getElementById(tracklist[i]._id).style.background ='#3B79FF';
          return audio.src;
        }
        else {
          audio.src = shuffled[i].file;
          document.getElementById(shuffled[i]._id).style.background ='#3B79FF';
          return audio.src;
        }

      }

    }
  }
}

function PlaySelectedSong(object){
  //console.log(object.id)
  if(initPlaymode == "Sequential"){
    document.getElementById(newTrackList[counter]._id).style.background ='#d9d9d9';
  }
  else{
    document.getElementById(equalnewTrackList[counter]._id).style.background ='#d9d9d9';
  }
  var trackID=object.id;
  for(var i= 0;i < newTrackList.length; i++){
    //console.log(newTrackList[i]._id)
    if(newTrackList[i]._id==trackID){
      counter = newTrackList.indexOf(newTrackList[i]);
      //console.log(counter)
      if(document.getElementById("play-pause").value=="unclicked"){
        document.getElementById("play-pause").click();
      }
      else{
        document.getElementById("play-pause").click(); //we need to stop it and then make it play again otherwise just stop the play
        document.getElementById("play-pause").click();
      }

    }
  }

}

/*--------------- Modal Window---------------*/
var modalWrapper = document.getElementById("modal_wrapper");
var modalWindow  = document.getElementById("modal_window");
var modal_init = function() {


  var openModal = function(e)
  {
    modalWrapper.className = "overlay";
    modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
    modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

  var closeModal = function(e)
  {
    modalWrapper.className = "";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

  var clickHandler = function(e) {
    if(!e.target) e.target = e.srcElement;
    if(e.target.tagName == "DIV") {
      if(e.target.id != "modal_window") closeModal(e);
    }
  };

  var keyHandler = function(e) {
    if(e.keyCode == 27) closeModal(e);
  };
  if(document.addEventListener) {
    document.getElementById("modal_open").addEventListener("click", openModal, false);
    document.getElementById("modal_close").addEventListener("click", closeModal, false);
    document.addEventListener("click", clickHandler, false);
    document.addEventListener("keydown", keyHandler, false);
  } else {
    document.getElementById("modal_open").attachEvent("onclick", openModal);
    document.getElementById("modal_close").attachEvent("onclick", closeModal);
    document.attachEvent("onclick", clickHandler);
    document.attachEvent("onkeydown", keyHandler);
  }
}
if(document.addEventListener) {
  document.addEventListener("DOMContentLoaded", modal_init, false);
} else {
  window.attachEvent("onload", modal_init);
}

//Autocomplete for artist and album in the modal window---------
var loadArtist = function(){
  var dataList = document.getElementById('json-datalist');
  var input = document.getElementById('ajax');
// Create a new XMLHttpRequest.
  var request = new XMLHttpRequest();

// Handle state changes for the request.
  request.onreadystatechange = function (response) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        // Parse the JSON
        var jsonOptions = JSON.parse(request.responseText);

        // Loop over the JSON array.
        jsonOptions.forEach(function (item) {
          // Create a new <option> element.
          var option = document.createElement('option');
          //console.log(option)
          // Set the value using the item in the JSON array.
          option.value = item.name;
          option.id=item._id;
          option.onclick = test2(option.value,option.id)
          // Add the <option> element to the <datalist>.
          dataList.appendChild(option);
        });

        // Update the placeholder text.
        input.placeholder = "Datalist";
      } else {
        // An error occured :(
        input.placeholder = "Couldn't load datalist options :(";
      }
    }
  };

// Update the placeholder text.
  input.placeholder = "Loading options...";

// Set up and make the request.
  request.open('GET', '/artists', true);
  request.send();

}
var loadAlbums = function(){
  var dataList = document.getElementById('json-datalist2');
  var input = document.getElementById('ajax2');
// Create a new XMLHttpRequest.
  var request = new XMLHttpRequest();

// Handle state changes for the request.
  request.onreadystatechange = function (response) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        // Parse the JSON
        var jsonOptions = JSON.parse(request.responseText);

        // Loop over the JSON array.
        jsonOptions.forEach(function (item) {
          // Create a new <option> element.
          var option = document.createElement('option');
          //console.log(option)
          // Set the value using the item in the JSON array.
          option.value = item.name;
          option.id=item._id;
          option.onclick = test3(option.value,option.id)
          // Add the <option> element to the <datalist>.
          dataList.appendChild(option);
        });


        // Update the placeholder text.
        input.placeholder = "Datalist";
      } else {
        // An error occured :(
        input.placeholder = "Couldn't load datalist options :(";
      }
    }
  };

// Update the placeholder text.
  input.placeholder = "Loading options...";

// Set up and make the request.
  request.open('GET', '/albums', true);
  request.send();
}
var array = []
var AlbumArray = []
var test2 = function(value,id){
  array.push({name:value,id:id})
  //console.log(array)
}
var test3 = function(value,id){
  AlbumArray.push({name:value,id:id})
  //console.log(array)
}

var input = document.getElementById('ajax');
var input2 = document.getElementById('ajax2');

input.addEventListener("change", function(){
  var el = document.querySelector("#json-datalist option[value='" + input.value + "']");
  //console.log(el.id);  //the user sees the name while the server get the ID
  input.dataset.artistId = el.id;

});
input2.addEventListener("change", function(){
  var el = document.querySelector("#json-datalist2 option[value='" + input2.value + "']");
  //console.log(el.id); //the user sees the name while the server get the ID
  input2.dataset.albumId = el.id;

});

var form = document.getElementById("modal_feedback");
var fileSelect = document.getElementById("mp3_file_toUpload");
var nm = document.getElementById("setName");

form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  var artistId = input.dataset.artistId;
  console.log(artistId)
  var albumId = input2.dataset.albumId;
  var myfile = fileSelect.files[0];
  var oData = new FormData();

  if(artistId && albumId){ // Upload the song if both artist and album exist
    oData.append("artist",artistId );
    oData.append("album", albumId);
    oData.append('name',nm.value);
    oData.append("duration",0);
    oData.append("file",myfile, myfile.name);//multer
    oData.append("file", "tracks_folder/"+ myfile.name);//field in the model

    var xhr = new XMLHttpRequest();
    // Open the connection.
    xhr.open('POST', "/tracks", true);
    // Set up a handler for when the request finishes.
    xhr.onreadystatechange= function () {
      if (xhr.status === 201) {
        console.log("Upload done!");
          window.location.reload();
      }
    };
    // Send the Data.
    xhr.send(oData);

  }
  else if(!artistId){ //Create artist, album and then upload the song
    data={};
    data.name=input.value;
      data.artwork="/images/artists/unknown.png";
    data2={};
    data2.name=input2.value;
    doJSONRequest("POST", "/artists/", null, data, function(artist){
      oData.append("artist",artist._id );
      data2.artist=artist._id;
        data2.artwork="/images/albums/Unknown_Album.jpg";

      doJSONRequest("POST", "/albums/", null, data2, function(album){
        //doJSONRequest("GET", "/albums/" + albumId , null, null, function(album){

        oData.append("album", album._id);
        oData.append('name',nm.value);
        oData.append("duration",0);
        oData.append("file",myfile, myfile.name);//multer
          oData.append("file", "tracks_folder/"+ myfile.name);//field in the model

        var xhr = new XMLHttpRequest();
        // Open the connection.
        xhr.open('POST', "/tracks", true);
        // Set up a handler for when the request finishes.
        xhr.onreadystatechange = function () {
          if (xhr.status === 201) {
            console.log("Upload done!");
              window.location.reload();
          }
        };
        // Send the Data.
        xhr.send(oData);
      })

    });
  }
  else if(!albumId){ // Create the album and then upload the song.
    data={};
    data.name=input2.value;
    oData.append("artist",artistId);
    data.artist=artist._id;
      data.artwork="/images/albums/Unknown_Album.jpg";
    doJSONRequest("POST", "/albums/", null, data, function(album){
      oData.append("album", album._id);
      oData.append('name',nm.value);
      oData.append("duration",0);
      oData.append("file",myfile, myfile.name);//multer
        oData.append("file", "tracks_folder/"+ myfile.name);//field in the model

      var xhr = new XMLHttpRequest();
      // Open the connection.
      xhr.open('POST', "/tracks", true);
      // Set up a handler for when the request finishes.
      xhr.onreadystatechange = function () {
        if (xhr.status === 201) {
          console.log("Upload done!");
            window.location.reload();
        }
      };
      // Send the Data.
      xhr.send(oData);
    })

  }
  document.getElementById("modal_close").click();
}, false);


function like(obj){
  var trackID = obj.id.split("/")[1];
  data={};

  if(obj.value == "nonVoted") { //Vote
    obj.value = "voted";
    obj.classList.remove('fa-star-o');
    obj.classList.add('fa-star');
    data.vote = 1;
    doJSONRequest("PUT", "/tracks/" + trackID , null, data, function(){
      console.log("You have successfully voted the song!");
    })
  }

  else if(obj.value == "voted") {                      //Undo the vote
    obj.value="nonVoted";
    obj.classList.remove('fa-star');
    obj.classList.add('fa-star-o');
    data.vote = -1;
    doJSONRequest("PUT", "/tracks/" + trackID , null, data, function(){
      console.log("You have successfully unvoted the song!");
    })

  }
    else{
      obj.value="nonVoted";
      console.log("out")
  }
}


function setupVodedSong(){
    doJSONRequest("GET", "/tracks", null, null, function(tracks){
        for(var i= 0; i<tracks.length;i++){
            if(tracks[i].vote==1){
                var trackID=tracks[i]._id;
                var element=document.getElementById("icon/"+ trackID)
                element.classList.remove('fa-star-o');
                element.classList.add('fa-star');
            }
        }
    });
};

