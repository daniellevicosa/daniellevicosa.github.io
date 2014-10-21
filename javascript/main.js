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

function changeWorkInfo() {
  $('.work-item').mouseover(function() {
    var w = this.clientWidth - 30;
    var h = this.clientHeight;

    $(this).addClass('active');
    $(this).find('.work-item-about').css({width: w + 'px', height: h + 'px'});
  });

  $('.work-item').mouseout(function() {
    $(this).removeClass('active');
  });
};

$(document).ready(function() {
  changeIcons();
  changeWorkInfo();
});
