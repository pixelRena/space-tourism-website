// variables
const destinationImage = document.querySelector(".destination-image img");
const destinationName = document.querySelector(".destination-name");
const destinationText = document.querySelector(".destination-text");
const destinationDistanceKm = document.querySelector(".destination-distance-km");
const destinationTravelTimeDays = document.querySelector(".destination-travel-time-days");
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
                case 'technology':
                    // console.log('tech');
                    break;
                case 'crew':
                    // console.log('crew');
                    break;
                default:
                    // console.log('default')
            }
        }
    }
}

scanData();
