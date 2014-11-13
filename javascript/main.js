function changeIcons() {
  var $images = $('.icons-slide img');
  var selectedIcon = 0;

  $images.hide();
  $images.first().show();

  var changeActiveIcon = function() {
    $images.hide();
    selectedIcon = (selectedIcon + 1) % $images.length;
    $($images[selectedIcon]).show();
  };

  setInterval(changeActiveIcon, 1000);
};

$(document).ready(function() {
  changeIcons();
});
