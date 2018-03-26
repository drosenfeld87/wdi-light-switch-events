document.addEventListener('DOMContentLoaded', function() {
//update text on page load
    pageBody = document.querySelector('body');
    pageStatus = pageBody.querySelector('.status');
    pageSwitch = pageBody.querySelector('.switch');
    // switchElement = pageBody.querySelector('.switch');

    //get switch element

    //listen for clicks on switch
    switchOff();
    pageSwitch.addEventListener('click', switchChange);
    function switchChange() {
      if (pageBody.className === 'dark') {
        on();
      }
      else {
        switchOff(); }
      };



    function on() {
        pageBody.className = 'light';
        pageSwitch.classList.remove('off');
        pageSwitch.classList.add('on');
        pageSwitch.innerText = "It's so bright in here!";

      };

        function switchOff() {
          pageBody.className = 'dark';
          pageSwitch.classList.remove('on');
          pageSwitch.classList.add('off');
          pageSwitch.innerText = "Hey, who turned off the lights?";
        };
      });

    //
    //   } else if { (
    //
    //        switchElement.classList.contains('off');
    //
    //        switchElement.remove('.on');
    //   }
    // )};


    // console.log('clicked the switch');
    // var lightOn = document.querySelector('.on');
    // var lightOff = document.querySelector('.off');

    // if the light is on (does it have the on class)
    // turn the light off (remove on class add off class)
    // otherwise
    ///turn the light on( remove off class, add on class
