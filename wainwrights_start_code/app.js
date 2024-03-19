// function called getAllWainwrights() which houses a fetch() request to the wainwrights resource and returns the reponse as JSON

const getAllWainwrights = async () => {
    const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
    wainwrightsData = await response.json();
    displayWainwrights();
};