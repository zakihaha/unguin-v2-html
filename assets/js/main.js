var buttonSidebar = document.getElementById('sidebar-toggler')

buttonSidebar.onclick = function() {
    var elementSidebar = document.getElementById('sidebar')
    elementSidebar.classList.toggle('show-sidebar')

    var bodyOverlay = document.getElementById('body-overlay')
    bodyOverlay.classList.toggle('body-overlay-show')
}

var bodyOverlay = document.getElementById('body-overlay')
bodyOverlay.onclick = function() {
    var elementSidebar = document.getElementById('sidebar')
    elementSidebar.classList.toggle('show-sidebar')

    var bodyOverlay = document.getElementById('body-overlay')
    bodyOverlay.classList.toggle('body-overlay-show')
}