const previewBox = document.getElementById('previewBox');
const topLeft = document.getElementById('topLeft');
const topRight = document.getElementById('topRight');
const bottomRight = document.getElementById('bottomRight');
const bottomLeft = document.getElementById('bottomLeft');
const cssCode = document.getElementById('cssCode');
const copyBtn = document.getElementById('copyBtn');

function updateBorderRadius() {
    const tl = topLeft.value + '%';
    const tr = topRight.value + '%';
    const br = bottomRight.value + '%';
    const bl = bottomLeft.value + '%';

    const radius = `${tl} ${tr} ${br} ${bl}`;
    previewBox.style.borderRadius = radius;
    cssCode.value = `border-radius: ${radius};`;
}

// Event listeners
[topLeft, topRight, bottomRight, bottomLeft].forEach(input => {
    input.addEventListener('input', updateBorderRadius);
});

// Copy CSS to clipboard
copyBtn.addEventListener('click', () => {
    cssCode.select();
    cssCode.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('CSS copied to clipboard!');
});

// Initialize preview
updateBorderRadius();
