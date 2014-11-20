// views/album.dust
(function(){dust.register("album",body_0);function body_0(chk,ctx){return chk.write("<section class=\"single-album-section\"><ul class=\"grid-list clearfix\"><li><div class=\"media-object\"><div class=\"mo-image\" style=\"background-image: url(").reference(ctx._get(false,["album","artwork"]),ctx,"h").write(")\"></div><div class=\"mo-overlay\"></div></div><div class=\"mo-info subtitle album\"><a class=\"mo-title\">").reference(ctx._get(false,["album","name"]),ctx,"h").write("</a><div class=\"mo-subtitle text-muted one-line\"><a class=\"artist-link\" title=\"").reference(ctx._get(false,["album","artist","name"]),ctx,"h").write("\" href=\"artists/").reference(ctx._get(false,["album","artist","_id"]),ctx,"h").write("\">").reference(ctx._get(false,["album","artist","name"]),ctx,"h").write("</a></div><div class=\"mo-subtitle text-muted one-line\">").reference(ctx._get(false,["album","label"]),ctx,"h").write("</div><div class=\"mo-subtitle text-muted one-line\">Released: ").reference(ctx._get(false,["album","dateReleased"]),ctx,"h").write("</div></div></li></ul></section>").partial("tracks",ctx,null);}return body_0;})();
 // views/albums.dust
(function(){dust.register("albums",body_0);function body_0(chk,ctx){return chk.write("<section class=\"album-section\"><ul class=\"grid-list clearfix\" id=\"albums-list\">").section(ctx._get(false, ["albums"]),ctx,{"block":body_1},null).write("</ul></section>");}function body_1(chk,ctx){return chk.write("<li><span class=\"delete-btn\"><a href=\"albums/").reference(ctx._get(false, ["_id"]),ctx,"h").write("\">&times;</a></span><div class=\"media-object\"><div class=\"mo-image\" style=\"background-image: url(").reference(ctx._get(false, ["artwork"]),ctx,"h").write(")\"></div><div class=\"mo-overlay\"></div></div><div class=\"mo-info subtitle\"><a class=\"mo-title album-link\" href=\"albums/").reference(ctx._get(false, ["_id"]),ctx,"h").write("\">").reference(ctx._get(false, ["name"]),ctx,"h").write("</a><div class=\"mo-subtitle text-muted one-line\"><a title=\"").reference(ctx._get(false,["artist","name"]),ctx,"h").write("\" class=\"artist-link\" href=\"artists/").reference(ctx._get(false,["artist","_id"]),ctx,"h").write("\">").reference(ctx._get(false,["artist","name"]),ctx,"h").write("</a></div></div></li>");}return body_0;})();
 // views/artist.dust
(function(){dust.register("artist",body_0);function body_0(chk,ctx){return chk.write("<section class=\"single-artist-section\"><ul class=\"grid-list clearfix\"><li><div class=\"media-object\"><div class=\"mo-image\" style=\"background-image: url(").reference(ctx._get(false,["artist","artwork"]),ctx,"h").write(")\"></div><div class=\"mo-overlay\"></div></div><div class=\"mo-info subtitle artist\"><a class=\"mo-title\">").reference(ctx._get(false,["artist","name"]),ctx,"h").write("</a><div class=\"mo-subtitle text-muted one-line\">").reference(ctx._get(false,["artist","genre"]),ctx,"h").write("</div></div></li></ul></section>").partial("tracks",ctx,null);}return body_0;})();
 // views/artists.dust
(function(){dust.register("artists",body_0);function body_0(chk,ctx){return chk.write("<section class=\"artist-section\"><ul class=\"grid-list clearfix\" id=\"artists-list\">").section(ctx._get(false, ["artists"]),ctx,{"block":body_1},null).write(" </ul></section>\t");}function body_1(chk,ctx){return chk.write("<li><span class=\"delete-btn\"><a href=\"artists/").reference(ctx._get(false, ["_id"]),ctx,"h").write("\">&times;</a></span><div class=\"media-object\"><div class=\"mo-image\" style=\"background-image: url(").reference(ctx._get(false, ["artwork"]),ctx,"h").write(")\"></div><div class=\"mo-overlay\"></div></div><div class=\"mo-info\"><a class=\"artist-link\" href=\"artists/").reference(ctx._get(false, ["_id"]),ctx,"h").write("\">").reference(ctx._get(false, ["name"]),ctx,"h").write("</a></div></li>");}return body_0;})();
 // views/index.dust
(function(){dust.register("index",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html><head><title>").reference(ctx._get(false, ["title"]),ctx,"h").write("</title><link rel='stylesheet' href='/css/style.css' /></head><body><h1 class=\"heading\">").reference(ctx._get(false, ["title"]),ctx,"h").write("</h1><h3>Resources</h3><ul class=\"links\">").section(ctx._get(false, ["links"]),ctx,{"block":body_1},null).write("</ul><p>Note that the resources response bodies are in JSON format with <code>Content-Type: application/json</code></p></body></html>");}function body_1(chk,ctx){return chk.write("<li class=\"link\"><span class=\"rel\">").reference(ctx._get(false, ["rel"]),ctx,"h").write("</span> <a href=\"").reference(ctx._get(false,["link","href"]),ctx,"h").write("\">").reference(ctx._get(false, ["href"]),ctx,"h").write("</a></li>");}return body_0;})();
 // views/library.dust
(function(){dust.register("library",body_0);function body_0(chk,ctx){return chk.write("<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"initial-scale=1.0\"><title>Atelier Beats</title><link rel=\"stylesheet\" href=\"css/standardize.css\"><link rel=\"stylesheet\" href=\"css/base.css\"><link rel=\"stylesheet\" href=\"css/glyphicons.css\"><link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\"></head><body class=\"body library\"><div class=\"container main-wrapper\"><nav id=\"main-nav\" class=\"main-nav-float\"><label id=\"main-menu-toggle-label\" for=\"main-menu-toggle\"><i class=\"fa fa-bars\"></i></label><input type=\"checkbox\" id=\"main-menu-toggle\"><h2 class=\"fat logo\">AtelierBeats.</h2><div class=\"main-nav-content\"><ul id=\"main-menu\" class=\"nav-menu\"><li class=\"search-item\"><span class=\"nav-menu-icon search-icon glyphicon glyphicon-search\"></span><input id=\"main-search\" placeholder=\"Search\" type=\"search\" class=\"nav-menu-search\"></li><li><a href=\"library.html\"><i class=\"nav-menu-icon glyphicon glyphicon-music\"></i>Library</a></li><li><a href=\"artists.html\"><i class=\"nav-menu-icon fa fa-users\"></i>Artists</a></li><li><a href=\"albums.html\"><i class=\"nav-menu-icon icons8-music-record\"></i>Albums</a></li><li class=\"mm-user-item\"><a href=\"login.html\"><i class=\"nav-menu-icon fa fa-user\"></i>triglian</a></li><li class=\"mm-user-item\"><a href=\"login.html\"><i class=\"nav-menu-icon fa fa-sign-out\"></i>logout</a></li></ul><a href=\"#\" class=\"create-playlist\" id=\"create-pl-btn\"><i class=\"fa fa-plus\"></i> new playlist</a><ul class=\"nav-menu\" id=\"playlists\"><!-- Playlists will be rendered here --></ul></div> <!-- /.main-nav-content --></nav><section class=\"main-content main-content-float-menu clearfix\"><nav id=\"user-nav\" class=\"clearfix\"><ul class=\"nav-menu horizontal-menu float-right clearfix\"><li><a href=\"#\">triglian</a></li><li><a href=\"#\">logout</a></li></ul></nav><section class=\"player\"><div class=\"pl-info-wrapper\"><div class=\"pl-artwork\"><div class=\"media-object\"><div class=\"mo-image\" style=\"background-image: url('./images/albums/thin_lizzy-live_and_dangerous.jpg')\"></div></div></div><div class=\"pl-track-info\"><a class=\"pl-track-title\" href=\"albums/Thin%20Lizzy%20-%20Live%20And%20Dangerous\">Don't Believe A Word</a><div class=\"pl-track-subtitle text-muted one-line\"><a title=\"Thin Lizzy\" href=\"artists/Thin%20Lizzy\">Thin Lizzy</a></div></div></div><div class=\"pl-wrapper\"><!--  <audio id=\"leplayer\" onloadedmetadata=><source src=\"https://archive.org/download/testmp3testfile/mpthreetest.mp3\" type=\"audio/mpeg\">Your browser does not support the audio tag.</audio> --><div class=\"pl-controls\"><button id=\"previous\" class=\"btn btn-icon fa fa-step-backward\"></button><button id=\"play-pause\" class=\"btn btn-icon fa fa-play\"></button><button id=\"next\" class=\"btn btn-icon fa fa-step-forward\"></button></div><div class=\"pl-progress\"><div class=\"time time-elapsed\" id=\"time-elapsed\">0:00</div><div class=\"pl-timeline-wrapper\"><div class=\"pl-timeline-rail\" id=\"pl-timeline-rail\"><div class=\"pl-timeline-bar\" id=\"pl-timeline-bar\"></div></div></div><div class=\"time time-total\" id=\"time-total\">2:19</div></div><div class=\"pl-volume\"><i class=\"btn-icon fa fa-volume-off\" id=\"volume-off\"></i><div class=\"pl-volume-wrapper\"><div class=\"pl-volume-rail\" id=\"pl-volume-rail\"><div class=\"pl-volume-bar\" id=\"pl-volume-bar\"></div></div></div><i class=\"btn-icon fa fa-volume-up\" id=\"volume-up\"></i></div></div></section> <!-- /.player --><section id=\"content\"><!-- Content will be rendered here --></section></section> <!-- /.main-content --></div><script src=\"js/dust-core.min.js\"></script><script src=\"js/library.js\"></script><script src=\"js/model.js\"></script><script src=\"js/utils.js\"></script><script src=\"views/views.js\"></script><script src=\"js/ajax.js\"></script><script src=\"js/app.js\"></script></body></html>");}return body_0;})();
 // views/login.dust
(function(){dust.register("login",body_0);function body_0(chk,ctx){return chk.write("<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"initial-scale=1.0\"><title>Login</title><link rel=\"stylesheet\" href=\"css/standardize.css\"><link rel=\"stylesheet\" href=\"css/base.css\"><link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\"></head><body class=\"body login\"><div class=\"vertical-align-wrapper\"><div class=\"vertical-align-box\"><h1 class=\"slogan\">Gotta <i class=\"fa fa-heart beats pulse\" style=\"color:#B13A3D;\"></i> that sound.</h1><div class=\"form-login-wrapper\"><form action=\"library.html\" method=\"POST\" class=\"form-login\"><input class=\"form-control form-stacked\" name=\"username\" placeholder=\"Username\" type=\"text\"><input class=\"form-control form-stacked last\" name=\"password\" placeholder=\"Password\" type=\"password\"><input class=\"btn btn-beats btn-block btn-stacked\" value=\"Tune in\" type=\"submit\"></form><p>Don't have an account? <a href=\"signup.html\" class=\"beats\"><strong>sign up</strong></a> now!</p></div> </div></div><h1 class=\"fat blue-glow bottom-right\">Atelier<span class=\"pulse\" style=\"display:inline-block;\">Beats.</span></h1></body></html>");}return body_0;})();
 // views/signup.dust
(function(){dust.register("signup",body_0);function body_0(chk,ctx){return chk.write("<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"initial-scale=1.0\"><title>Signup</title><link rel=\"stylesheet\" href=\"css/standardize.css\"><link rel=\"stylesheet\" href=\"css/base.css\"></head><body class=\"body signup\"><div class=\"vertical-align-wrapper\"><div class=\"vertical-align-box\"><h1 class=\"slogan\">Now listen.</h1><div class=\"form-signup-wrapper\"><form action=\"login.html\" method=\"POST\" class=\"form-signup\"><input class=\"form-control form-stacked\" name=\"firstname\" placeholder=\"Firstname\" type=\"text\"><input class=\"form-control form-stacked\" name=\"lastname\" placeholder=\"Lastname\" type=\"text\"><input class=\"form-control form-stacked\" name=\"username\" placeholder=\"Username\" type=\"text\"><input class=\"form-control form-stacked\" name=\"email\" placeholder=\"email\" type=\"email\"><input class=\"form-control form-stacked\" name=\"password\" placeholder=\"Password\" type=\"password\"><input class=\"form-control form-stacked last\" name=\"repeatPassword\" placeholder=\"Repeat password\" type=\"password\"><input class=\"btn btn-beats btn-block btn-stacked\" value=\"Sign up\" type=\"submit\"></form><p>Already have an account? <a href=\"login.html\" class=\"beats\"><strong>login</strong></a> now!</p></div> </div></div><h1 class=\"fat blue-glow bottom-right\">Atelier<span class=\"pulse\" style=\"display:inline-block;\">Beats.</span></h1></body></html>");}return body_0;})();
 // views/tracks.dust
(function(){dust.register("tracks",body_0);function body_0(chk,ctx){return chk.write("<section class=\"flex-tracklist\" id=\"tracks-list\"><div class=\"fl-tl-thead fl-tl-row\"><div class=\"fl-tl-th fl-tl-name\">Song</div><div class=\"fl-tl-th fl-tl-artist\">Artist</div><div class=\"fl-tl-th fl-tl-album\">Album</div><div class=\"fl-tl-th fl-tl-time\">Time</div><div class=\"fl-tl-th fl-tl-delete\"></div></div>").section(ctx._get(false, ["tracks"]),ctx,{"block":body_1},null).write("</section>");}function body_1(chk,ctx){return chk.write("<div id=\"").reference(ctx._get(false, ["_id"]),ctx,"h").write("\" class=\"fl-tl-row\" draggable=\"true\" ondragstart=\"drag(event)\"><div class=\"fl-tl-cell fl-tl-name\"><span href=\"tracks/").reference(ctx._get(false, ["_id"]),ctx,"h").write("\">").reference(ctx._get(false, ["name"]),ctx,"h").write("</span><a class=\"edit-btn\" href=\"#\"><i class=\"fa fa-pencil fl-tl-pencil\"></i></a></div><div class=\"fl-tl-cell fl-tl-artist\"><a class=\"artist-link\" href=\"artists/").reference(ctx._get(false,["artist","_id"]),ctx,"h").write("\">").reference(ctx._get(false,["artist","name"]),ctx,"h").write("</a></div><div class=\"fl-tl-cell fl-tl-album\">").exists(ctx._get(false, ["album"]),ctx,{"block":body_2},null).write("</div><div class=\"fl-tl-cell fl-tl-time\">").reference(ctx._get(false, ["duration"]),ctx,"h").write("</div><div class=\"fl-tl-th fl-tl-delete\"><a href=\"tracks/").reference(ctx._get(false, ["_id"]),ctx,"h").write("\">&times;</a></div></div>");}function body_2(chk,ctx){return chk.write("<a class=\"album-link\" href=\"albums/").reference(ctx._get(false,["album","_id"]),ctx,"h").write("\">").reference(ctx._get(false,["album","name"]),ctx,"h").write("</a>");}return body_0;})();