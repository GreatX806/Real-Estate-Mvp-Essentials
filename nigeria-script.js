// Nigerian Properties Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample Nigerian property data
    const nigerianProperties = [
        {
            id: 'nga001',
            title: 'Luxury Villa in Banana Island',
            price: '₦350,000,000',
            address: 'Banana Island, Ikoyi, Lagos',
            description: 'Exquisite 5-bedroom villa with private pool, home theater, and 24/7 security in Lagos\' most prestigious neighborhood.',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 5,
            bathrooms: 6,
            area: '750 sq m',
            location: 'lagos',
            propertyType: 'mansion',
            tags: ['Waterfront', 'Luxury', 'Security'],
            hasVirtualTour: true
        },
        {
            id: 'nga002',
            title: 'Modern Apartment in Victoria Island',
            price: '₦120,000,000',
            address: 'Eko Atlantic, Victoria Island, Lagos',
            description: 'Contemporary 3-bedroom apartment with ocean views, smart home features, and access to premium amenities including gym and pool.',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 3,
            bathrooms: 3.5,
            area: '200 sq m',
            location: 'lagos',
            propertyType: 'apartment',
            tags: ['Ocean View', 'Smart Home', 'Gym'],
            hasVirtualTour: true
        },
        {
            id: 'nga003',
            title: 'Executive Mansion in Maitama',
            price: '₦280,000,000',
            address: 'Maitama District, Abuja',
            description: 'Prestigious 6-bedroom mansion with expansive gardens, swimming pool, and staff quarters in Abuja\'s diplomatic zone.',
            image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 6,
            bathrooms: 7,
            area: '800 sq m',
            location: 'abuja',
            propertyType: 'mansion',
            tags: ['Diplomatic Zone', 'Garden', 'Pool'],
            hasVirtualTour: false
        },
        {
            id: 'nga004',
            title: 'Waterfront Duplex in Port Harcourt',
            price: '₦180,000,000',
            address: 'Old GRA, Port Harcourt, Rivers State',
            description: 'Elegant 4-bedroom duplex with private jetty, modern finishes, and spectacular river views in Port Harcourt\'s premium district.',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 4,
            bathrooms: 4,
            area: '450 sq m',
            location: 'port-harcourt',
            propertyType: 'duplex',
            tags: ['Waterfront', 'Private Jetty', 'Modern'],
            hasVirtualTour: true
        },
        {
            id: 'nga005',
            title: 'Contemporary Bungalow in Ibadan',
            price: '₦85,000,000',
            address: 'Bodija Estate, Ibadan, Oyo State',
            description: 'Modern 3-bedroom bungalow with open floor plan, landscaped garden, and state-of-the-art security system in a serene environment.',
            image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 3,
            bathrooms: 3,
            area: '300 sq m',
            location: 'ibadan',
            propertyType: 'bungalow',
            tags: ['Modern', 'Garden', 'Security'],
            hasVirtualTour: false
        },
        {
            id: 'nga006',
            title: 'Luxury Penthouse in Eko Atlantic',
            price: '₦450,000,000',
            address: 'Eko Pearl Towers, Eko Atlantic, Lagos',
            description: 'Spectacular 4-bedroom penthouse with panoramic ocean views, private elevator, and world-class amenities in Lagos\' newest city.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 4,
            bathrooms: 5,
            area: '400 sq m',
            location: 'lagos',
            propertyType: 'apartment',
            tags: ['Penthouse', 'Ocean View', 'Luxury'],
            hasVirtualTour: true
        },
        {
            id: 'nga007',
            title: 'Modern Terraced House in Lekki',
            price: '₦120,000,000',
            address: 'Lekki Phase 1, Lagos',
            description: 'Contemporary 4-bedroom terraced house with rooftop terrace, smart home features, and excellent location near amenities.',
            image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 4,
            bathrooms: 4.5,
            area: '320 sq m',
            location: 'lagos',
            propertyType: 'house',
            tags: ['Smart Home', 'Rooftop', 'Modern'],
            hasVirtualTour: false
        },
        {
            id: 'nga008',
            title: 'Asokoro Diplomatic Residence',
            price: '₦320,000,000',
            address: 'Asokoro District, Abuja',
            description: 'Prestigious 5-bedroom residence with swimming pool, landscaped gardens, and high-end security features in Abuja\'s diplomatic district.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 5,
            bathrooms: 6,
            area: '700 sq m',
            location: 'abuja',
            propertyType: 'house',
            tags: ['Diplomatic', 'Pool', 'Security'],
            hasVirtualTour: true
        },
        {
            id: 'nga009',
            title: 'Calabar Marina Apartment',
            price: '₦75,000,000',
            address: 'Marina Resort Area, Calabar',
            description: 'Stylish 3-bedroom apartment with views of Calabar River, modern amenities, and proximity to Marina Resort and cultural attractions.',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 3,
            bathrooms: 3,
            area: '180 sq m',
            location: 'calabar',
            propertyType: 'apartment',
            tags: ['River View', 'Resort Area', 'Modern'],
            hasVirtualTour: false
        },
        {
            id: 'nga010',
            title: 'Enugu Golf Estate Villa',
            price: '₦150,000,000',
            address: 'Enugu Golf Estate, Enugu',
            description: 'Elegant 4-bedroom villa overlooking the golf course with high ceilings, premium finishes, and 24/7 estate security.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 4,
            bathrooms: 4.5,
            area: '500 sq m',
            location: 'enugu',
            propertyType: 'house',
            tags: ['Golf Estate', 'Security', 'Premium'],
            hasVirtualTour: true
        },
        {
            id: 'nga011',
            title: 'Luxury Villa in Asokoro',
            price: '₦380,000,000',
            address: 'Asokoro District, Abuja',
            description: 'Magnificent 6-bedroom villa with swimming pool, home cinema, and expansive garden in Abuja\'s most prestigious neighborhood.',
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 6,
            bathrooms: 7,
            area: '850 sq m',
            location: 'abuja',
            propertyType: 'mansion',
            tags: ['Luxury', 'Pool', 'Cinema'],
            hasVirtualTour: true
        },
        {
            id: 'nga012',
            title: 'Modern Apartment in Wuse',
            price: '₦95,000,000',
            address: 'Wuse 2, Abuja',
            description: 'Contemporary 3-bedroom apartment with high-end finishes, smart home features, and excellent security in a central Abuja location.',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            bedrooms: 3,
            bathrooms: 3,
            area: '210 sq m',
            location: 'abuja',
            propertyType: 'apartment',
            tags: ['Smart Home', 'Central', 'Modern'],
            hasVirtualTour: false
        }
    ];

    // Load Nigerian properties
    loadNigerianProperties();
    
    // Set up search form
    const nigeriaSearchForm = document.getElementById('nigeria-search-form');
    if (nigeriaSearchForm) {
        nigeriaSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            filterNigerianProperties();
        });
    }
    
    // Set up location cards
    const locationCards = document.querySelectorAll('.location-card');
    locationCards.forEach(card => {
        card.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            filterByLocation(location);
        });
    });
    
    // Set up map markers
    const mapMarkers = document.querySelectorAll('.map-marker');
    mapMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            updateLocationInfo(location);
            filterByLocation(location);
        });
    });
    
    // Load Nigerian properties into the grid
    function loadNigerianProperties(filteredProperties = null) {
        const propertyGrid = document.getElementById('nigeria-property-grid');
        if (!propertyGrid) return;
        
        propertyGrid.innerHTML = '';
        
        const properties = filteredProperties || nigerianProperties;
        
        if (properties.length === 0) {
            propertyGrid.innerHTML = '<div class="no-results">No properties match your search criteria. Please try different filters.</div>';
            return;
        }
        
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card nigeria';
            
            // Create tags HTML
            let tagsHtml = '';
            if (property.tags && property.tags.length > 0) {
                tagsHtml = '<div class="property-tags">' + 
                    property.tags.map(tag => `<span class="property-tag">${tag}</span>`).join('') +
                    '</div>';
            }
            
            // Create buttons HTML
            let buttonsHtml = `<a href="#" class="view-property" data-id="${property.id}">View Details</a>`;
            if (property.hasVirtualTour) {
                buttonsHtml = `<a href="#" class="virtual-tour" data-id="${property.id}">Virtual Tour</a>` + buttonsHtml;
            }
            buttonsHtml += `<a href="#" class="get-directions" data-location="${property.address}">Get Directions</a>`;
            
            propertyCard.innerHTML = `
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}">
                </div>
                <div class="property-details">
                    <div class="property-price">${property.price}</div>
                    <h3>${property.title}</h3>
                    <div class="property-location">
                        <i>📍</i> ${property.address}
                    </div>
                    <div class="property-features">
                        <span>${property.bedrooms} Beds</span>
                        <span>${property.bathrooms} Baths</span>
                        <span>${property.area}</span>
                    </div>
                    <p class="property-description">${property.description}</p>
                    ${tagsHtml}
                    <div class="property-actions">
                        ${buttonsHtml}
                    </div>
                </div>
            `;
            propertyGrid.appendChild(propertyCard);
        });
        
        // Add event listeners to property buttons
        addPropertyButtonListeners();
    }
    
    // Add event listeners to property buttons
    function addPropertyButtonListeners() {
        // View Details buttons
        const viewButtons = document.querySelectorAll('.view-property');
        viewButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const propertyId = this.getAttribute('data-id');
                viewPropertyDetails(propertyId);
            });
        });
        
        // Virtual Tour buttons
        const tourButtons = document.querySelectorAll('.virtual-tour');
        tourButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const propertyId = this.getAttribute('data-id');
                startVirtualTour(propertyId);
            });
        });
        
        // Get Directions buttons
        const directionButtons = document.querySelectorAll('.get-directions');
        directionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const location = this.getAttribute('data-location');
                getDirections(location);
            });
        });
    }
    
    // Filter Nigerian properties based on search criteria
    function filterNigerianProperties() {
        const location = document.getElementById('nigeria-location').value.toLowerCase();
        const propertyType = document.getElementById('nigeria-property-type').value.toLowerCase();
        const priceRange = document.getElementById('nigeria-price-range').value;
        
        let filteredProperties = nigerianProperties;
        
        // Filter by location
        if (location) {
            filteredProperties = filteredProperties.filter(property => property.location === location);
        }
        
        // Filter by property type
        if (propertyType) {
            filteredProperties = filteredProperties.filter(property => property.propertyType === propertyType);
        }
        
        // Filter by price range
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(val => {
                if (val.endsWith('+')) {
                    return Number.MAX_SAFE_INTEGER;
                }
                return parseInt(val);
            });
            
            filteredProperties = filteredProperties.filter(property => {
                const propertyPrice = parseInt(property.price.replace(/[₦,]/g, ''));
                return propertyPrice >= min && (max === Number.MAX_SAFE_INTEGER || propertyPrice <= max);
            });
        }
        
        // Load filtered properties
        loadNigerianProperties(filteredProperties);
    }
    
    // Filter properties by location
    function filterByLocation(location) {
        document.getElementById('nigeria-location').value = location;
        filterNigerianProperties();
        
        // Scroll to properties section
        document.getElementById('nigeria-properties').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update location info in the map section
    function updateLocationInfo(location) {
        const locationInfo = document.getElementById('location-info');
        if (!locationInfo) return;
        
        // Count properties in this location
        const propertiesInLocation = nigerianProperties.filter(property => property.location === location);
        const count = propertiesInLocation.length;
        
        // Get location name with proper capitalization
        let locationName = '';
        switch(location) {
            case 'lagos':
                locationName = 'Lagos';
                break;
            case 'abuja':
                locationName = 'Abuja';
                break;
            case 'port-harcourt':
                locationName = 'Port Harcourt';
                break;
            case 'ibadan':
                locationName = 'Ibadan';
                break;
            case 'calabar':
                locationName = 'Calabar';
                break;
            case 'enugu':
                locationName = 'Enugu';
                break;
            default:
                locationName = location.charAt(0).toUpperCase() + location.slice(1);
        }
        
        // Get location description
        let locationDescription = '';
        switch(location) {
            case 'lagos':
                locationDescription = 'Nigeria\'s economic hub with premium waterfront properties and modern developments.';
                break;
            case 'abuja':
                locationDescription = 'The capital city featuring modern architecture and spacious estates in diplomatic zones.';
                break;
            case 'port-harcourt':
                locationDescription = 'Oil city with exclusive residential neighborhoods and waterfront properties.';
                break;
            case 'ibadan':
                locationDescription = 'Historic city with emerging luxury developments and serene residential areas.';
                break;
            case 'calabar':
                locationDescription = 'Coastal city known for its clean environment and riverside properties.';
                break;
            case 'enugu':
                locationDescription = 'Coal city with premium estates and a growing real estate market.';
                break;
            default:
                locationDescription = 'Explore available properties in this location.';
        }
        
        // Create property type breakdown
        const propertyTypes = {};
        propertiesInLocation.forEach(property => {
            const type = property.propertyType;
            propertyTypes[type] = (propertyTypes[type] || 0) + 1;
        });
        
        let propertyTypesList = '';
        for (const [type, typeCount] of Object.entries(propertyTypes)) {
            const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
            propertyTypesList += `<li>${capitalizedType}: ${typeCount} properties</li>`;
        }
        
        // Update the info panel
        locationInfo.innerHTML = `
            <h4>${locationName}</h4>
            <p>${locationDescription}</p>
            <p><strong>${count} Properties Available</strong></p>
            <h5>Property Types:</h5>
            <ul>
                ${propertyTypesList}
            </ul>
            <button class="view-all-button" data-location="${location}">View All ${locationName} Properties</button>
        `;
        
        // Add event listener to the view all button
        const viewAllButton = locationInfo.querySelector('.view-all-button');
        if (viewAllButton) {
            viewAllButton.addEventListener('click', function() {
                filterByLocation(this.getAttribute('data-location'));
            });
        }
    }
    
    // View property details
    function viewPropertyDetails(propertyId) {
        const property = nigerianProperties.find(p => p.id === propertyId);
        if (!property) return;
        
        // In a real MVP, this would navigate to a property details page
        // For demo purposes, we'll just show an alert
        alert(`Property Details for ${property.title}\n\nPrice: ${property.price}\nAddress: ${property.address}\nDescription: ${property.description}\n\nIn a complete application, this would open a detailed property page with more images and information.`);
    }
    
    // Start virtual tour
    function startVirtualTour(propertyId) {
        const property = nigerianProperties.find(p => p.id === propertyId);
        if (!property) return;
        
        // In a real MVP, this would launch a virtual tour experience
        // For demo purposes, we'll just show an alert
        alert(`Virtual Tour for ${property.title}\n\nIn a complete application, this would launch an interactive 360° virtual tour of the property.`);
    }
    
    // Get directions to property
    function getDirections(location) {
        // In a real MVP, this would integrate with a maps service
        // For demo purposes, we'll just show an alert
        alert(`Get Directions to: ${location}\n\nIn a complete application, this would open a map with directions to the property location.`);
    }
    
    // Enhance chatbot with Nigeria-specific responses
    if (typeof chatbotResponses !== 'undefined') {
        chatbotResponses.nigeriaLocations = [
            "We have properties across major Nigerian cities including Lagos, Abuja, Port Harcourt, Ibadan, Calabar, and Enugu. Which city are you interested in?",
            "Our Nigerian properties are located in premium areas of Lagos (like Banana Island and Lekki), Abuja (Maitama and Asokoro), Port Harcourt, Ibadan, Calabar, and Enugu. Where would you like to invest?",
            "We feature luxury properties in Nigeria's most desirable locations. Are you looking for waterfront properties in Lagos, diplomatic zones in Abuja, or something else?"
        ];
        
        chatbotResponses.nigeriaInvestment = [
            "Nigeria's real estate market offers excellent investment opportunities with strong ROI potential, especially in major cities like Lagos and Abuja. Would you like to learn more about specific investment properties?",
            "Investing in Nigerian real estate can provide both rental income and capital appreciation. Premium areas in Lagos, Abuja, and Port Harcourt are particularly promising. What's your investment budget?",
            "Many investors are seeing great returns in Nigerian real estate, particularly in emerging areas with infrastructure development. Would you like information on current investment hotspots?"
        ];
    }
});