// Modal öffnen, wenn "Über mich"-Button geklickt wird
document.getElementById('aboutBtn').addEventListener('click', function () {
    var modal = new bootstrap.Modal(document.getElementById('aboutModal'));
    modal.show();
});
