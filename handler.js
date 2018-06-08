window.onload = function() {
    document.getElementById("rawinput").addEventListener("input", simpleHash);
}

function simpleHash() {
    var rawi = document.getElementById("rawinput").value;
    document.getElementById("md5value").innerHTML = CryptoJS.MD5(rawi);
}
