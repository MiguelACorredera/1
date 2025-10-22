document.addEventListener('DOMContentLoaded', () => {
    // --- Select Elements ---
    const previewBox = document.getElementById('preview-box');
    const cssOutput = document.getElementById('css-output');
    const copyButton = document.getElementById('copy-button');
    const copyMessage = document.getElementById('copy-message');

    // Get all input elements for radii (Horizontal: h, Vertical: v)
    const hInputs = ['tlh', 'trh', 'brh', 'blh'].map(id => document.getElementById(id));
    const vInputs = ['tlv', 'trv', 'brv', 'blv'].map(id => document.getElementById(id));
    const allInputs = [...hInputs, ...vInputs];

    // Bonus feature elements
    const toggle8Value = document.getElementById('toggle-8-value');
    const verticalControls = document.getElementById('vertical-controls');
    let is8ValueMode = false;

    // --- Core Function: Update Radius ---
    function updateRadius() {
        // 1. Get all current radius values
        const hValues = hInputs.map(input => input.value);
        const vValues = vInputs.map(input => input.value);
        
        // Update display spans next to sliders
        hInputs.forEach((input, index) => {
            document.getElementById(`${input.id}-value`).textContent = `${hValues[index]}px`;
        });
        vInputs.forEach((input, index) => {
            document.getElementById(`${input.id}-value`).textContent = `${vValues[index]}px`;
        });

        // 2. Construct the CSS string
        const hString = hValues.join('px ') + 'px';
        
        let cssString;
        if (is8ValueMode) {
            const vString = vValues.join('px ') + 'px';
            cssString = `border-radius: ${hString} / ${vString};`;
        } else {
            // Standard 4-value syntax
            cssString = `border-radius: ${hString};`;
        }

        // 3. Apply styles and update output (User Stories 1 & 2)
        previewBox.style.borderRadius = cssString.replace('border-radius: ', '').replace(';', '');
        cssOutput.value = cssString;
    }

    // --- Bonus Feature: Toggle 8-Value Mode ---
    toggle8Value.addEventListener('change', () => {
        is8ValueMode = toggle8Value.checked;
        if (is8ValueMode) {
            verticalControls.classList.remove('hidden');
        } else {
            verticalControls.classList.add('hidden');
        }
        updateRadius();
    });

    // --- Event Listeners ---
    // Update radius whenever any slider moves
    allInputs.forEach(input => {
        input.addEventListener('input', updateRadius);
    });

    // --- Copy to Clipboard (User Story 3) ---
    copyButton.addEventListener('click', () => {
        // Select the text in the textarea
        cssOutput.select();
        cssOutput.setSelectionRange(0, 99999); // For mobile devices

        try {
            // Use the modern Clipboard API
            navigator.clipboard.writeText(cssOutput.value).then(() => {
                copyMessage.classList.remove('hidden');
                setTimeout(() => {
                    copyMessage.classList.add('hidden');
                }, 1500);
            });
        } catch (err) {
            // Fallback for older browsers
            document.execCommand('copy');
            copyMessage.textContent = 'Copied! (Fallback)';
            copyMessage.classList.remove('hidden');
            setTimeout(() => {
                copyMessage.classList.add('hidden');
            }, 1500);
        }
    });

    // Initialize the box on load
    updateRadius();
});