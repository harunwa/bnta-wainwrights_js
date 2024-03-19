// function to fetch all Wainwrights

const getAllWainwrights = async () => {
    const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
    wainwrightsData = await response.json();
    displayWainwrights();
};

// function to display all Wainwrights

const displayWainwrights = () => {
    const wainwrightsList = document.getElementById('wainwrights-list');
    wainwrightsData.forEach(wainwright => {
        const li = document.createElement('li');
        li.textContent = `${wainwright.name} - Height: ${wainwright.height}m, Area: ${wainwright.area}`;
        wainwrightsList.appendChild(li);
    });
};

getAllWainwrights();