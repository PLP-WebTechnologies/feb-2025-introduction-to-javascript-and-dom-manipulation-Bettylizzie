// I wrote this function to change the paragraph content and styling when clicked
document.getElementById('change-text-btn').addEventListener('click', function () {
    const paragraph = document.getElementById('description');
    paragraph.textContent = "I’ve gently updated this text using JavaScript.";
    paragraph.style.color = "#4A4E69";
    paragraph.style.fontWeight = "600";
    paragraph.style.fontStyle = "italic";
});

// I use this to toggle a calming box on and off
document.getElementById('toggle-box-btn').addEventListener('click', function () {
    const container = document.getElementById('box-container');
    const existingBox = document.getElementById('dynamic-box');

    if (existingBox) {
        container.removeChild(existingBox);
    } else {
        const box = document.createElement('div');
        box.id = 'dynamic-box';
        box.textContent = 'This soft-colored box was created with JS';
        box.style.width = '250px';
        box.style.height = '120px';
        box.style.backgroundColor = '#BFD8AF';
        box.style.color = '#2D2D2D';
        box.style.borderRadius = '12px';
        box.style.display = 'flex';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'center';
        box.style.marginTop = '15px';
        box.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        container.appendChild(box);
    }
});
// I added this function to change the background color of the body
document.getElementById('change-bg-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = '#F2E9E1';
    document.body.style.transition = 'background-color 0.5s ease';
});