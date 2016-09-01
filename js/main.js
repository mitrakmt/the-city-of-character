function teamClick() {
  window.location.href = "team.html";
}

function homeClick() {
  window.location.href = "index.html";
}

function whatWeDoClick() {
  window.location.href = "what-we-do.html";
}

function contactClick() {
  window.location.href = "contact.html";
}

function historyClick() {
  window.location.href = "history.html";
}

function dinnerClick() {
  window.location.href = "heroesDinner.html";
}

function newsClick() {
  window.location.href = "news.html";
}

$(function(){
  $('.profilepic').on('click', function(e){
    var $biginfo = $('#teamcontent');
    var $bigname = $('#bigname');
    var $bigjob  = $('#bigjob');
    var $bigdesc = $('#bigdesc');

    var newname = $(this).attr('alt');
    var newrole = $(this).siblings('.job').eq(0).html();
    var newdesc = $(this).siblings('.desc').eq(0).html();

    $bigname.html(newname);
    $bigjob.html(newrole);
    $bigdesc.html(newdesc);

    if($biginfo.css('display') == 'none') {
      $biginfo.slideDown(350);
    }
  });
});
