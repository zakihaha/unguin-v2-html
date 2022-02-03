var sidebarToggler = document.getElementById('sidebar-toggler')
sidebarToggler.onclick = function () {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show-sidebar");
    
    var bodyOverlay = document.getElementById("body-overlay");
    bodyOverlay.classList.toggle("body-overlay-show");
}

var bodyOverlay = document.getElementById('body-overlay')
bodyOverlay.onclick = function () {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show-sidebar");
    
    var bodyOverlay = document.getElementById("body-overlay");
    bodyOverlay.classList.toggle("body-overlay-show");
}
