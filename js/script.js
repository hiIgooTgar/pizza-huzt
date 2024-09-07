var click = document.getElementById("click");
function hideMenu () {
    click.style.right = "-230px";
}

function showMenu () {
    click.style.right = "0";
}

document.getElementById("yearCopy").innerHTML = new Date().getFullYear()