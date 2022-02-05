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

var nameTagIcon = document.getElementById('name-tag-icon-zaki')
nameTagIcon.onclick = function() {
    var nameTag = document.getElementById('name-tag-zaki')
    nameTag.classList.toggle('opacity-1')
}

var nameTagIcon = document.getElementById('name-tag-icon-okta')
nameTagIcon.onclick = function() {
    var nameTag = document.getElementById('name-tag-okta')
    nameTag.classList.toggle('opacity-1')
}

var nameTagIcon = document.getElementById('name-tag-icon-meisha')
nameTagIcon.onclick = function() {
    var nameTag = document.getElementById('name-tag-meisha')
    nameTag.classList.toggle('opacity-1')
}