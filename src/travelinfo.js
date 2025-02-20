export const travelInfo = {
    name: "RoamMate Your presonalised Travel Assistant chatbot",
    description: "Your smart travel planner for exploring India with ease!",
    services: [
      "Train & Flight bookings",
      "Hotel reservations",
      "Custom travel itineraries",
      "Local sightseeing recommendations",
      "Cab & Bike rentals",
      "Weather updates",
      "Emergency contacts"
    ],
    locations: [
      {
        city: "Delhi",
        state: "Delhi",
        airport: "Indira Gandhi International Airport (DEL)",
        railwayStation: "New Delhi Railway Station (NDLS)",
        attractions: [
          "India Gate",
          "Red Fort",
          "Lotus Temple",
          "Qutub Minar",
          "Chandni Chowk"
        ],
        bestTimeToVisit: "October to March",
        hotels: [
          { name: "The Leela Palace", rating: 5, pricePerNight: "₹12,000" },
          { name: "Taj Mahal Hotel", rating: 5, pricePerNight: "₹10,000" },
          { name: "Radisson Blu", rating: 4, pricePerNight: "₹7,500" }
        ],
        trainTimings: [
          { from: "Mumbai", train: "Rajdhani Express", time: "16:40 - 08:32" },
          { from: "Kolkata", train: "Duronto Express", time: "18:20 - 11:30" }
        ],
        flightTimings: [
          { from: "Mumbai", flight: "IndiGo 6E-514", time: "07:00 - 09:10" },
          { from: "Bangalore", flight: "Air India AI-804", time: "12:30 - 14:45" }
        ]
      },
      {
        city: "Mumbai",
        state: "Maharashtra",
        airport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
        railwayStation: "Mumbai Central (BCT)",
        attractions: [
          "Gateway of India",
          "Marine Drive",
          "Elephanta Caves",
          "Juhu Beach",
          "Chhatrapati Shivaji Terminus"
        ],
        bestTimeToVisit: "November to February",
        hotels: [
          { name: "The Oberoi", rating: 5, pricePerNight: "₹15,000" },
          { name: "Taj Lands End", rating: 5, pricePerNight: "₹12,500" },
          { name: "ITC Grand Central", rating: 4, pricePerNight: "₹8,000" }
        ],
        trainTimings: [
          { from: "Delhi", train: "Rajdhani Express", time: "16:40 - 08:32" },
          { from: "Chennai", train: "Mumbai Express", time: "15:50 - 07:15" }
        ],
        flightTimings: [
          { from: "Delhi", flight: "Vistara UK-955", time: "09:00 - 11:15" },
          { from: "Kolkata", flight: "SpiceJet SG-611", time: "14:00 - 16:10" }
        ]
      },
      {
        city: "Bangalore",
        state: "Karnataka",
        airport: "Kempegowda International Airport (BLR)",
        railwayStation: "Bangalore City Junction (SBC)",
        attractions: [
          "Lalbagh Botanical Garden",
          "Bangalore Palace",
          "Cubbon Park",
          "UB City Mall",
          "Nandi Hills"
        ],
        bestTimeToVisit: "October to February",
        hotels: [
          { name: "The Ritz-Carlton", rating: 5, pricePerNight: "₹14,000" },
          { name: "JW Marriott", rating: 5, pricePerNight: "₹11,500" },
          { name: "Le Meridien", rating: 4, pricePerNight: "₹9,000" }
        ],
        trainTimings: [
          { from: "Hyderabad", train: "Kacheguda Express", time: "21:00 - 06:30" },
          { from: "Chennai", train: "Shatabdi Express", time: "06:00 - 10:35" }
        ],
        flightTimings: [
          { from: "Delhi", flight: "IndiGo 6E-803", time: "10:00 - 12:15" },
          { from: "Mumbai", flight: "GoAir G8-512", time: "13:30 - 15:40" }
        ]
      },
      {
        city: "Goa",
        state: "Goa",
        airport: "Goa International Airport (GOI)",
        railwayStation: "Madgaon Railway Station (MAO)",
        attractions: [
          "Baga Beach",
          "Calangute Beach",
          "Fort Aguada",
          "Dudhsagar Waterfalls",
          "Basilica of Bom Jesus"
        ],
        bestTimeToVisit: "October to March",
        hotels: [
          { name: "Taj Exotica", rating: 5, pricePerNight: "₹18,000" },
          { name: "Leela Goa", rating: 5, pricePerNight: "₹16,500" },
          { name: "Novotel Goa", rating: 4, pricePerNight: "₹10,000" }
        ],
        trainTimings: [
          { from: "Mumbai", train: "Konkan Kanya Express", time: "23:05 - 10:45" },
          { from: "Bangalore", train: "Vasco Express", time: "20:45 - 08:25" }
        ],
        flightTimings: [
          { from: "Delhi", flight: "IndiGo 6E-261", time: "06:15 - 08:45" },
          { from: "Hyderabad", flight: "AirAsia I5-1427", time: "12:30 - 14:15" }
        ]
      }
    ],
    emergencyContacts: {
      tourismHelpline: "+91-1800-11-1363",
      railwayInquiry: "139",
      flightInquiry: "+91-124-4797300",
      police: "100",
      ambulance: "102"
    },
    customerSupport: {
      email: "support@indiatravelassistant.com",
      phone: "+91-99999-88888",
      workingHours: "24/7"
    }
  };
  