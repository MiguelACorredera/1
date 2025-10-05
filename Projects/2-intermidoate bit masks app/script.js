document.addEventListener('DOMContentLoaded', () => {
    // Define all cities with their GMT offsets.
    // The 'mask' property will be calculated based on the bit position.
    const CITIES_DATA = [
        { name: "Moscow", gmtOffset: 3 },
        { name: "Paris", gmtOffset: 2 },
        { name: "Berlin", gmtOffset: 2 },
        { name: "Brussels", gmtOffset: 2 },
        { name: "Amsterdam", gmtOffset: 2 },
        { name: "Rome", gmtOffset: 2 },
        { name: "London", gmtOffset: 1 },
        { name: "Dublin", gmtOffset: 1 },
        { name: "New York", gmtOffset: -4 },
        { name: "Washington, DC", gmtOffset: -4 },
        { name: "St. Louis", gmtOffset: -5 },
        { name: "Los Angeles", gmtOffset: -7 },
        { name: "Tokyo", gmtOffset: 9 },
        { name: "Beijing", gmtOffset: 8 },
        { name: "Ho Chi Mihn City", gmtOffset: 7 },
        { name: "Mumbai", gmtOffset: 5 },
    ];

    // --- Developer Note Implementation ---
    // Mapping Formula: Bit Position = GMT Offset + 12
    // Range: GMT +12 (pos 24) to GMT -12 (pos 0)
    
    // Calculate the Bit Mask for each city and populate the mask field.
    CITIES_DATA.forEach(city => {
        const bitPosition = city.gmtOffset + 12;
        // Use the bitwise left shift (<<) to get the mask (2^bitPosition)
        city.mask = 1 << bitPosition; 
    });
    
    // --- DOM Elements ---
    const gmtInput = document.getElementById('gmt-input');
    const findButton = document.getElementById('find-cities-btn');
    const searchNotCheckbox = document.getElementById('search-not');
    const resultsList = document.getElementById('results-list');
    const summaryCount = document.getElementById('summary-count');
    const cityListDiv = document.getElementById('city-list');

    // --- Functions ---

    // 1. Initial population of the city list for reference (User Story 1)
    function populateCityList() {
        const ul = document.createElement('ul');
        CITIES_DATA.forEach(city => {
            const li = document.createElement('li');
            const gmtSign = city.gmtOffset >= 0 ? '+' : '';
            li.textContent = `${city.name}: GMT ${gmtSign}${city.gmtOffset}`;
            ul.appendChild(li);
        });
        cityListDiv.appendChild(ul);
    }

    // 2. Core Search Logic (User Story 3)
    function findCitiesByGmt() {
        const searchOffset = parseInt(gmtInput.value);
        const searchNot = searchNotCheckbox.checked; // Bonus Feature
        
        // Input validation
        if (isNaN(searchOffset) || searchOffset < -12 || searchOffset > 12) {
            alert("Please enter a valid GMT offset between -12 and 12.");
            return;
        }

        // Create the search mask based on the GMT offset
        const bitPosition = searchOffset + 12;
        const searchMask = 1 << bitPosition; 
        
        const matches = [];

        CITIES_DATA.forEach(city => {
            // THE CORE BITWISE OPERATION: 
            // If (city.mask & searchMask) > 0, the bits overlap, meaning the city is in that timezone.
            const isMatch = (city.mask & searchMask) > 0;

            // Apply the 'Search NOT' logic (Bonus Feature)
            if (searchNot ? !isMatch : isMatch) {
                matches.push(city.name);
            }
        });

        displayResults(matches);
    }

    // 3. Display Results (User Story 3 & Bonus Feature)
    function displayResults(matches) {
        // Update summary count (Bonus Feature)
        summaryCount.textContent = `${matches.length} cities found.`;

        resultsList.innerHTML = ''; 

        if (matches.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No cities matched the criteria.';
            resultsList.appendChild(li);
        } else {
            matches.forEach(name => {
                const li = document.createElement('li');
                li.textContent = name;
                resultsList.appendChild(li);
            });
        }
    }

    // --- Initialization and Event Listener ---

    populateCityList();
    findButton.addEventListener('click', findCitiesByGmt);
    
    // Run an initial search for the default value (GMT +2)
    findCitiesByGmt(); 
});