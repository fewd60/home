var lights = 'on';

function switchLights() {
  if(lights == 'on') {
    $('body').addClass('dark');
    lights = 'off';
  } else {
    $('body').removeClass('dark');
    lights = 'on';
  }
}

$('#light_switch').click(switchLights);