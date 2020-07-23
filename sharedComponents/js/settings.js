$(document).ready(function() {
  $("#settingsTab").on('click', '.stackedSettings', function() {
    $(".panelSettings").removeClass("shownSettingsPanel");
    $(".stackedSettings").removeClass("selectedStackedSettings");
    $(this).addClass("selectedStackedSettings");
    if ($(this).hasClass("generalSettings")) {
      $(".generalPanel").addClass("shownSettingsPanel");
    } else if ($(this).hasClass("aboutUsSettings")) {
      $(".aboutUsPanel").addClass("shownSettingsPanel");
    }
  });
  $("#settingsTab").on('click', '#resolution', function() {

    var obj = $(this).val();
    obj = JSON.parse(obj);
    var height = parseInt(obj.height);
    var width = parseInt(obj.width);
    ipcRenderer.send('resize', height, width);
  });
  $("#settingsTab").on('click', '#siteUrl', function() {
    shell.openExternal('https://zerofornothing.com')
  });

});