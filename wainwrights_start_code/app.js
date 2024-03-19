let wainwrightsData;

// function to fetch all Wainwrights

const getAllWainwrights = async () => {
    const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
    wainwrightsData = await response.json();
    displayWainwrights();
};

// function to display all Wainwrights

const displayWainwrights = () => {
    const wainwrightsList = document.getElementById('wainwrights-list');
    wainwrightsList.innerText = '';
    wainwrightsData.forEach(wainwright => {
        const li = document.createElement('li');
        li.textContent = `${wainwright.name} - Height: ${wainwright.heightMetres}m, Area: ${wainwright.area.areaName}`;
        wainwrightsList.appendChild(li);
    });
};

// event listener for form

document.getElementById('filter-form').addEventListener('submit', event => {
    event.preventDefault();
    const filterValue = document.getElementById('filter-input').value.trim().toLowerCase();
    filterWainwrights(filterValue);
});

// function to display results based on input

const filterWainwrights = filterValue => {
    const filteredWainwrights = wainwrightsData.filter(wainwright => wainwright.name.toLowerCase().includes(filterValue));
    displayFilteredWainwrights(filteredWainwrights);
};





getAllWainwrights();