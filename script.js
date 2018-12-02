(function() {
    document.addEventListener("DOMContentLoaded", function() {

        // ELEMENTS
        const president = document.getElementById('president');
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
              tryToPlay(resetSound);

              resetBg.classList.add('is-visible');
              resetSlider.classList.add('is-visible');

              setTimeout(() => {
                  window.location.reload();
              }, 5000);
        })

        const isMobile = window.innerWidth < 600;

        const handleMouse = function() {
            if (this.classList.contains('popped')) return;

            bubble.currentTime = 0;
            tryToPlay(bubble);

            setTimeout(() => {
                this.classList.add('popped');
            }, 0);
        }

        const handleTouch = function() {
            if (this.classList.contains('popped')) return;

            bubble.currentTime = 0;
            tryToPlay(bubble);
        }

        const handleDrag = function() {
            event.preventDefault();

            const activeElement = Array.from(bubbles).find(el => {
                let c = el.getBoundingClientRect();

                if ((c.x <= event.pageX && c.x + c.width >= event.pageX) &&
                (c.y <= event.pageY && c.y + c.height >= event.pageY)) {
                    return el;
                }
            })

            if (!activeElement || activeElement.classList.contains('popped')) return;

            bubble.currentTime = 0;
            tryToPlay(bubble);

            setTimeout(() => {
                activeElement.classList.add('popped');
            }, 0);
        }

        function tryToPlay(sound) {
            let promise = sound.play();

            if (promise !== undefined) {
                promise.then(_ => {
                    // sound plays
                }).catch(error => {
                    // autoplay was prevented
                });
            }
        }

        function connectToEach(collection, handler) {
            const elements = Array.from(collection);
            const listener = isMobile ? 'touchstart' : 'mouseenter';
            return elements.map(el => el.addEventListener(listener, handler));
        }

        function mouseBubbles() {
            !isMobile && connectToEach(bubbles, handleMouse);
        }

        function touchBubbles() {
            isMobile && connectToEach(bubbles, handleTouch);
        }

        function dragBubbles() {
            isMobile && president.addEventListener('touchmove', handleDrag);
        }

        function connectSoundToElements(collection, sound) {
            connectToEach(collection, function() {
                if (this.classList.contains('popped')) return;
                tryToPlay(sound);
            })
        }

        mouseBubbles();
        touchBubbles();
        dragBubbles();

        connectSoundToElements(toothList, america);
        connectSoundToElements(eyebrownList, thanks);
        connectSoundToElements(sandList, ahhh);
        connectSoundToElements(lightergreyList, thanks);
        connectSoundToElements(lightblackList, delish);
        connectSoundToElements(jawList, courage);
    });
})();
