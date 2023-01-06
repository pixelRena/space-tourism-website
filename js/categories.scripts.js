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
const crewText = document.querySelector(".crew-body");

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
                    // console.log('tech');
                    break;
                default:
                    // console.log('default')
            }
        }
    }
}

scanData();
