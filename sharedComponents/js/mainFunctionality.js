$(document).ready(function() {

  $(document).on('keydown', function(e) {
    var keycode;
    if (window.event)
      keycode = window.event.keyCode;
    else if (e)
      keycode = e.which;
    if (keycode == 116 || (keycode == 82 && keycode == 17) || keycode == 62) {
      e.preventDefault();
      e.stopPropagation();
    }
  })
  $("#topRightDiv").on('click', '.minimizeButton', function() {
    var window = remote.getCurrentWindow();
    window.minimize();
  });

  $("#topRightDiv").on('click', '.closeButton', function() {
    if (remote.getGlobal('UserID') != null) {
      sql.connect(config).then(pool => {
        return pool.request()
          .input('UserID', sql.BigInt, remote.getGlobal('UserID'))
          .execute('userDisconnected')
      }).then(result => {
        var window = remote.getCurrentWindow();
        window.close();
      }).catch(err => {
        console.log("cought error : " + err);
      })
    } else {
      var window = remote.getCurrentWindow();
      window.close();
    }
  });
});