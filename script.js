// Sample property data (in a real MVP, this would come from a database)
const properties = [
    {
        id: 'prop001',
        title: 'Modern Family Home',
        price: '$450,000',
        address: '123 Main Street, Cityville, ST 12345',
        description: 'Beautiful 3-bedroom family home with modern finishes, open floor plan, and a spacious backyard perfect for entertaining.',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bedrooms: 3,
        bathrooms: 2,
        area: '2,100 sq ft'
    },
    {
        id: 'prop002',
        title: 'Downtown Luxury Apartment',
        price: '$320,000',
        address: '456 Urban Ave, Downtown, ST 12345',
        description: 'Stunning luxury apartment in the heart of downtown with amazing city views, high-end appliances, and 24/7 security.',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bedrooms: 2,
        bathrooms: 2,
        area: '1,200 sq ft'
    },
    {
        id: 'prop003',
        title: 'Suburban Ranch House',
        price: '$375,000',
        address: '789 Quiet Lane, Suburbia, ST 12345',
        description: 'Charming ranch-style home in a peaceful neighborhood with a renovated kitchen, hardwood floors, and a two-car garage.',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bedrooms: 4,
        bathrooms: 2,
        area: '1,800 sq ft'
    },
    {
        id: 'prop004',
        title: 'Waterfront Condo',
        price: '$550,000',
        address: '101 Harbor View, Baytown, ST 12345',
        description: 'Luxurious waterfront condo with panoramic views, private balcony, and access to community amenities including pool and fitness center.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bedrooms: 2,
        bathrooms: 2,
        area: '1,500 sq ft'
    },
    {
        id: 'prop005',
        title: 'Country Cottage',
        price: '$295,000',
        address: '222 Rural Route, Countryside, ST 12345',
        description: 'Cozy cottage on a large lot with mature trees, updated interior, and a wraparound porch perfect for enjoying the peaceful surroundings.',
        image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bedrooms: 2,
        bathrooms: 1,
        area: '1,200 sq ft'
    },
    {
        id: 'prop006',
        title: 'Urban Townhouse',
        price: '$425,000',
        address: '333 City Block, Metropolis, ST 12345',
        description: 'Modern townhouse with rooftop terrace, gourmet kitchen, and smart home features throughout. Walking distance to shops and restaurants.',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bedrooms: 3,
        bathrooms: 2.5,
        area: '1,950 sq ft'
    }
];

// Chatbot responses
const chatbotResponses = {
    greetings: [
        "Hello! How can I help with your property search today?",
        "Hi there! I'm Great's Chat Bot. What kind of property are you looking for?",
        "Welcome! I'm here to help you find your dream home. What can I assist you with?"
    ],
    propertyTypes: [
        "We have a variety of properties including houses, apartments, condos, and townhouses. What type interests you most?",
        "Our listings include everything from family homes to luxury apartments. What are you looking for specifically?",
        "I can help you find houses, apartments, condos, or townhouses. Do you have a preference?"
    ],
    location: [
        "We have properties in many areas. Any specific neighborhood or city you're interested in?",
        "Location is key in real estate! Where are you looking to buy or rent?",
        "Which area are you interested in? I can show you available properties there."
    ],
    price: [
        "What's your budget range for this property?",
        "Properties in our database range from $100,000 to over $1,000,000. What's your price range?",
        "How much are you looking to spend on your new property?"
    ],
    contact: [
        "Would you like to speak with a real estate agent about this property? I can arrange that for you.",
        "For more information or to schedule a viewing, you can fill out our contact form or I can connect you with an agent.",
        "Interested in viewing this property? I can help you get in touch with one of our agents."
    ],
    features: [
        "Our properties have various features like updated kitchens, hardwood floors, and spacious yards. Any specific features you're looking for?",
        "Are you looking for any particular features like a garage, pool, or open floor plan?",
        "What amenities or features are most important to you in your new home?"
    ],
    nigeria: [
        "We have a great selection of modern properties in Nigeria! You can check our Nigerian Properties page for listings in Lagos, Abuja, Port Harcourt, and more.",
        "Our Nigerian properties include luxury villas, modern apartments, and executive homes in prime locations. Would you like to know more about specific areas?",
        "Nigeria offers excellent real estate investment opportunities. Are you looking for a home to live in or an investment property?"
    ],
    payments: [
        "We offer multiple payment options including bank transfers, card payments, and installment plans. Would you like more details about our payment methods?",
        "You can make payments through our secure payment portal. We accept bank transfers and card payments, and also offer flexible payment plans.",
        "For property purchases, we have flexible payment options including installment plans. Would you like me to explain how they work?"
    ],
    fallback: [
        "I'm not sure I understand. Could you rephrase that?",
        "I'm still learning! Could you ask that in a different way?",
        "I don't have that information right now, but our real estate agents would be happy to help. Would you like to contact them?"
    ]
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Load property listings
    loadProperties();
    
    // Set up search form
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            filterProperties();
        });
    }
    
    // Set up contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }
    
    // Set up chatbot
    setupChatbot();
});

// Load properties into the grid
function loadProperties() {
    const propertyGrid = document.querySelector('.property-grid');
    if (!propertyGrid) return;
    
    propertyGrid.innerHTML = '';
    
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
            </div>
            <div class="property-details">
                <div class="property-price">${property.price}</div>
                <h3>${property.title}</h3>
                <div class="property-address">${property.address}</div>
                <div class="property-features">
                    <span>${property.bedrooms} Beds</span>
                    <span>${property.bathrooms} Baths</span>
                    <span>${property.area}</span>
                </div>
                <p class="property-description">${property.description}</p>
                <a href="#" class="view-property" data-id="${property.id}">View Details</a>
            </div>
        `;
        propertyGrid.appendChild(propertyCard);
    });
    
    // Add event listeners to view details buttons
    const viewButtons = document.querySelectorAll('.view-property');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const propertyId = this.getAttribute('data-id');
            viewPropertyDetails(propertyId);
        });
    });
}

// Filter properties based on search criteria
function filterProperties() {
    const location = document.getElementById('location').value.toLowerCase();
    const propertyType = document.getElementById('property-type').value.toLowerCase();
    const priceRange = document.getElementById('price-range').value;
    
    // In a real MVP, this would query a database
    // For demo purposes, we'll just log the search criteria
    console.log('Searching for properties with criteria:', { location, propertyType, priceRange });
    
    // Simulate search results (in a real MVP, this would filter actual data)
    alert('Search functionality would filter properties in a real application. For this MVP demo, we\'re showing all available properties.');
}

// View property details
function viewPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    // In a real MVP, this would navigate to a property details page
    // For demo purposes, we'll just show an alert
    alert(`Property Details for ${property.title}\n\nPrice: ${property.price}\nAddress: ${property.address}\nDescription: ${property.description}\n\nIn a complete application, this would open a detailed property page.`);
}

// Submit contact form
function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const propertyId = document.getElementById('property-id').value;
    const message = document.getElementById('message').value;
    
    // In a real MVP, this would send data to a server
    // For demo purposes, we'll just log the form data
    console.log('Contact form submitted:', { name, email, phone, propertyId, message });
    
    // Show confirmation
    alert('Thank you for your message! In a real application, this would be sent to our team. We\'ll get back to you soon.');
    
    // Clear form
    document.getElementById('contact-form').reset();
}

// Chatbot functionality
function setupChatbot() {
    const chatbot = document.getElementById('chatbot');
    const chatToggle = document.getElementById('chat-toggle');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.querySelector('.chatbot-messages');
    const chatInput = document.getElementById('chat-input');
    const sendMessage = document.getElementById('send-message');
    
    // Toggle chatbot visibility
    chatToggle.addEventListener('click', function() {
        chatbot.classList.toggle('open');
    });
    
    // Close chatbot
    closeChat.addEventListener('click', function() {
        chatbot.classList.remove('open');
    });
    
    // Send message
    function sendUserMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addMessage(message, 'user');
        
        // Clear input
        chatInput.value = '';
        
        // Get bot response (after a small delay to simulate thinking)
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }
    
    // Send button click
    sendMessage.addEventListener('click', sendUserMessage);
    
    // Enter key press
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Get bot response based on user input
    window.getBotResponse = function(userMessage) {
        userMessage = userMessage.toLowerCase();
        
        // Check for keywords in user message
        if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
            return getRandomResponse(chatbotResponses.greetings);
        } else if (userMessage.includes('house') || userMessage.includes('apartment') || userMessage.includes('condo') || userMessage.includes('property type')) {
            return getRandomResponse(chatbotResponses.propertyTypes);
        } else if (userMessage.includes('where') || userMessage.includes('location') || userMessage.includes('area') || userMessage.includes('city')) {
            return getRandomResponse(chatbotResponses.location);
        } else if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('budget') || userMessage.includes('afford')) {
            return getRandomResponse(chatbotResponses.price);
        } else if (userMessage.includes('contact') || userMessage.includes('agent') || userMessage.includes('realtor') || userMessage.includes('call')) {
            return getRandomResponse(chatbotResponses.contact);
        } else if (userMessage.includes('feature') || userMessage.includes('amenity') || userMessage.includes('include') || userMessage.includes('has')) {
            return getRandomResponse(chatbotResponses.features);
        } else if (userMessage.includes('nigeria') || userMessage.includes('lagos') || userMessage.includes('abuja') || userMessage.includes('african')) {
            return getRandomResponse(chatbotResponses.nigeria);
        } else if (userMessage.includes('payment') || userMessage.includes('pay') || userMessage.includes('bank') || userMessage.includes('transfer') || userMessage.includes('installment')) {
            return getRandomResponse(chatbotResponses.payments);
        } else {
            return getRandomResponse(chatbotResponses.fallback);
        }
    };
    
    // Get random response from array
    window.getRandomResponse = function(responses) {
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    };
}