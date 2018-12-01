(function() {
    document.addEventListener("DOMContentLoaded", function() {

        // ELEMENTS
        const toothList = document.getElementsByClassName('tooth');
        const eyebrownList = document.getElementsByClassName('eyebrown');
        const sandList = document.getElementsByClassName('sand');
        const lightergreyList = document.getElementsByClassName('lightergrey');
        const lightblackList = document.getElementsByClassName('lightblack');
        const jawList = document.getElementsByClassName('jaw');
        const bubbles = document.getElementsByTagName('span');

        // SOUNDS
        const america = document.getElementById('america');
        const thanks = document.getElementById('thanks');
        const ahhh = document.getElementById('ahhh');
        const delish = document.getElementById('delish');
        const courage = document.getElementById('courage');
        const bubble = document.getElementById('bubble');

        // RESET STUFF
        const resetBtn = document.getElementById('reset-btn');
        const resetSound = document.getElementById('reset');
        const resetBg = document.getElementById('background');
        const resetSlider = document.getElementById('slider');

        resetBtn.addEventListener('click', function() {
              resetSound.play();

              resetBg.classList.add('is-visible');
              resetSlider.classList.add('is-visible');

              setTimeout(() => {
                  window.location.reload();
              }, 5000)
        })

        const popHandler = function() {
            if (this.classList.contains('popped')) return;

            bubble.currentTime = 0
            bubble.play();

            setTimeout(() => {
                this.classList.add('popped');
            }, 0);
        }

        const listener = window.innerWidth < 600 ? 'touchstart' : 'mouseenter';

        function connectToEach(collection, handler) {
            const elements = Array.from(collection);
            return elements.map(el => el.addEventListener(listener, handler));
        }

        function popBubbles(collection) {
            connectToEach(collection, popHandler);
        }

        function connectSoundToElements(collection, sound) {
            connectToEach(collection, function() {
                if (this.classList.contains('popped')) return;
                sound.play();
            })
        }

        popBubbles(bubbles);

        connectSoundToElements(toothList, america);
        connectSoundToElements(eyebrownList, thanks);
        connectSoundToElements(sandList, ahhh);
        connectSoundToElements(lightergreyList, thanks);
        connectSoundToElements(lightblackList, delish);
        connectSoundToElements(jawList, courage);
    });
})();
