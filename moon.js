((window, document) => {

    const moonMenuListener = function () {
        // Get scroll percent
        // const offsetHeight = document.documentElement.offsetHeight;
        const offsetHeight = document.documentElement.clientHeight || document.documentElement.offsetHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let percent = Math.round(scrollTop / (scrollHeight - offsetHeight) * 100);
        if (percent > 100) percent = 100;

        const menuIcon = document.querySelector('.moon-menu-icon');
        const menuText = document.querySelector('.moon-menu-text');
        if (!percent) {
            percent = 0;
            menuIcon.style.display = 'block';
            menuText.style.display = 'none';
            $('g.moon-dot').show();
        } else {
            menuIcon.style.display = 'none';
            menuText.style.display = 'block';
            menuText.innerHTML = percent + '%';
            $('g.moon-dot').hide();
        }

        // Update strokeDasharray
        const length = 196;
        document.querySelector('.moon-menu-border').style.strokeDasharray = percent * length / 100 + ' ' + length;
    };

    window.addEventListener('load', () => {
        moonMenuListener();
    });
    window.addEventListener('scroll', moonMenuListener);

    document.querySelector('.moon-menu-button').addEventListener('click', () => {
        document.querySelector('.moon-menu-icon').classList.toggle('active');
        const items = document.querySelector('.moon-menu-items');
        items.classList.toggle('active');
        const childItems = document.querySelectorAll('.moon-menu-item');
        if (items.classList.contains('active')) {
            for (let i = 0; i < childItems.length; i++) {
                // childItems[i].style.top = -3 - 3 * i + 'em';
                childItems[i].style.opacity = .9;
            }
        } else {
            for (let i = 0; i < childItems.length; i++) {
                // childItems[i].style.top = '1em';
                childItems[i].style.opacity = 0;
            }
        }

        $('.moon-menu-items').toggleClass('item-ani');
        var $moonDot = $('g.moon-dot');
        var firstCircle = $moonDot.children('circle:first');
        var lastCircle = $moonDot.children('circle:last');
        var cy = $(firstCircle).attr('cy');
        if (cy === '0') {
            $(firstCircle).attr('cx', '0');
            $(firstCircle).attr('cy', '-.8rem');
            $(lastCircle).attr('cx', '0');
            $(lastCircle).attr('cy', '.8rem');
        } else {
            $(firstCircle).attr('cx', '-.8rem');
            $(firstCircle).attr('cy', '0');
            $(lastCircle).attr('cx', '.8rem');
            $(lastCircle).attr('cy', '0');
        }

    });

    const smoothBack2Top = function () {
        $('#moonToc').removeClass('mm-active');
        window.scroll({top: 0, behavior: 'smooth'});
    };
    const smoothBack2Bottom = function () {
        $('#moonToc').removeClass('mm-active');
        // const offsetHeight = document.documentElement.offsetHeight;
        const offsetHeight = document.documentElement.clientHeight || document.documentElement.offsetHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        window.scroll({top: scrollHeight - offsetHeight, behavior: 'smooth'});
    }

    const showContent = function () {
        $('#moonToc').toggleClass('mm-active');
    };

    // back 2 top
    document.querySelector('.icon-up').addEventListener('click', smoothBack2Top);
    // back 2 bottom
    document.querySelector('.icon-down').addEventListener('click', smoothBack2Bottom);
    //
    // show toc
    document.querySelector('.icon-toc').addEventListener('click', showContent);

})(window, document);