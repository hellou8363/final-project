
    let active = document.querySelectorAll('.content-header-menu-item');

    for (let i = 0; i < active.length; i++) {
        active[i].onclick = function () {
            let j = 0;
            while (j < active.length) {
                active[j++].className = 'content-header-menu-item';
            }
            active[i].className = 'content-header-menu-item active';
        };
    }