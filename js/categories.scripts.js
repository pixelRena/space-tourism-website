// variables
// destination
const destinationImage = document.querySelector(".destination-image img");
const destinationName = document.querySelector(".destination-name");
const destinationText = document.querySelector(".destination-text");
const destinationDistanceKm = document.querySelector(".destination-distance-km");
const destinationTravelTimeDays = document.querySelector(".destination-travel-time-days");

// crew
const crewImage = document.querySelector(".crew-image img");
const crewTitle = document.querySelector(".crew-title");
const crewName = document.querySelector(".crew-name");
const crewText = document.querySelector(".crew-text");

const techMobileImage = document.querySelector(".technology-mobile-img");
const techDesktopImage = document.querySelector(".technology-desktop-img");
const techTitle = document.querySelector(".technology-title");
const techText = document.querySelector(".technology-text");

const currentPath = window.location.pathname.split("/").pop();
const currentDestination = currentPath.split("-")[0];
const currentDestinationName = currentPath.split("-")[1];

const scanData = () => {
    for(category in data) {
        if(category.includes(currentDestination)) {
            switch(category) {
                // Search for which category inside of json we should be looking for based off the pathname
                case 'destinations':
                    data[category].map(({name, images, description, distance, travel}) => {
                        if(currentDestinationName.includes(name.toLowerCase())) { 
                            destinationImage.src = images.png;
                            destinationImage.alt = name;
                            destinationName.innerHTML = name;
                            destinationText.innerHTML = description;
                            destinationDistanceKm.innerHTML = distance;
                            destinationTravelTimeDays.innerHTML = travel;
                        }
                    })
                    break;
                case 'crew':
                    data[category].map(({name, images, role, bio}) => {
                        if(role.toLowerCase().includes(currentDestinationName.split(".")[0])) {
                            crewImage.src = images.png;
                            crewImage.alt = name;
                            crewName.innerHTML = name;
                            crewTitle.innerHTML = role;
                            crewText.innerHTML = bio;
                        }
                    })
                    break;
                case 'technology':
                    data[category].map(({name, images, description}) => {
                        if(name.toLowerCase().includes(currentDestinationName.split(".")[0])) {
                            techMobileImage.src = images.landscape;
                            techMobileImage.alt = name+"mobile";
                            techDesktopImage.src = images.portrait;
                            techDesktopImage.alt = name+"desktop";
                            techText.innerHTML = description;
                            techTitle.innerHTML = name;
                        }
                    })
                    break;
                default:
                    return;
            }
        }
    }
}

scanData();
