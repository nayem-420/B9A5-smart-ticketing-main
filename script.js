function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateResult(seat) {
    var seatCount = document.getElementById('seatCount');
    seatCount.textContent = parseInt(seatCount.textContent) + 1;


    var tbody = document.getElementById('seatDetails');
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th>${tbody.children.length + 1}</th>
        <td>${seat}</td>
        <td>Economy</td>
        <td>550</td>
    `;
    tbody.appendChild(newRow);
}

document.addEventListener('keypress', function(event) {
    var key = event.key.toUpperCase();
    var validKeys = ['A', 'B', '1', '2', '3', '4'];
    if (validKeys.includes(key)) {
        var seat = document.querySelector(`button[onclick="updateResult('${key}')"]`);
        if (seat) {
            seat.click();
        }
    }
});