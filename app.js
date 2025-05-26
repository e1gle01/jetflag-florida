const regionChallenges = {
  "I-10 Corridor": [
  {
    title: "Quiz Me at the Museum",
    text: "Go to a museum. After going to the museum, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 20,
    vetoPenalty: 45
  },
  {
    title: "Campus Curiosity Quest",
    text: "Go to a university. After going to the university, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 21,
    vetoPenalty: 45
  },
  {
    title: "State Park Scholar",
    text: "Go to a state park. After going to the park, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Tiny Town Treasure Hunt",
    text: "Visit the smallest town off I-75 according to ChatGPT. Take a picture with a town sign.",
    coins: 16,
    vetoPenalty: 60
  },
  {
    title: "Zen Rock Stacker",
    text: "Stack 10 rocks on each other.",
    coins: 30,
    vetoPenalty: 55
  },
  {
    title: "Ad Trigger Purchase",
    text: "Buy something that you see an advertisement for in person.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Luxury Wheels Photo Op",
    text: "Take a photo of a car worth at least 100 thousand dollars.",
    coins: 26,
    vetoPenalty: 30
  },
  {
    title: "Balance Beam Challenge",
    text: "Balance 3 objects from your car for 10 seconds.",
    coins: 30,
    vetoPenalty: 30
  },
  {
    title: "Snack Critic Showdown",
    text: "Buy a local snack and write a review.",
    coins: 23,
    vetoPenalty: 45
  },
  {
    title: "Parking Lot Pop Star",
    text: "Make a short music video in a parking lot. It must be to a song over 3 minutes long.",
    coins: 26,
    vetoPenalty: 60
  },
  {
    title: "DIY Race Car Couture",
    text: "Make your car look like a race car (visually).",
    coins: 17,
    vetoPenalty: 30
  },
  {
    title: "Map Fate Drive",
    text: "Use a map, close your eyes, and point: drive 10 minutes in that direction.",
    coins: 20,
    vetoPenalty: 40
  },
  {
    title: "Frozen Statue Face-Off",
    text: "Pose like a statue next to an actual statue.",
    coins: 24,
    vetoPenalty: 50
  },
  {
    title: "Alphabet Sculpture: Marianna",
    text: "Spell 'Marianna' using objects around you.",
    coins: 30,
    vetoPenalty: 60
  },
  {
    title: "Munchie Hunt: M Edition",
    text: "Eat a food item that starts with M.",
    coins: 19,
    vetoPenalty: 45
  },
  {
    title: "Pinecone Architect",
    text: "Collect 30 pinecones and arrange them by size.",
    coins: 23,
    vetoPenalty: 30
  },
  {
    title: "Cartography Test: Stranger Edition",
    text: "Draw a map of Florida by hand and display it. A stranger must recognize it.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "10-Min Wildlife Watch",
    text: "Spot a roadside animal. It must stay in the view of the camera for 10 minutes.",
    coins: 15,
    vetoPenalty: 60
  },
  {
    title: "Dollar General Vogue",
    text: "Pose in front of a Dollar General.",
    coins: 17,
    vetoPenalty: 45
  },
  {
    title: "Highway Typography Art",
    text: "Spell out I-10 with things you find.",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Recycled Renaissance",
    text: "Make an art piece from trash (and discard it).",
    coins: 26,
    vetoPenalty: 60
  },
  {
    title: "Manatee Mystery Hunt",
    text: "See a manatee. It may be an illustration or real, but you may not search up/draw/create any manatee depiction.",
    coins: 29,
    vetoPenalty: 45
  },
  {
    title: "Moss in Motion",
    text: "Take a photo of Spanish moss hanging from a tree.",
    coins: 23,
    vetoPenalty: 60
  },
  {
    title: "Flag of the State Scavenger",
    text: "Spot a Florida flag (not a U.S. flag).",
    coins: 22,
    vetoPenalty: 30
  },
  {
    title: "Love Tree Lens",
    text: "Find a tree with a carved heart or initials and photograph it.",
    coins: 29,
    vetoPenalty: 45
  },
  {
    title: "Armadillo Artifact Hunt",
    text: "Find an armadillo statue, mural, or crossing sign.",
    coins: 21,
    vetoPenalty: 45
  },
  {
    title: "Wish You Were Here (Postcard)",
    text: "Recreate a famous Florida postcard using people and props.",
    coins: 27,
    vetoPenalty: 50
  },
  {
    title: "Swamp Beast Sketch-Off",
    text: "Draw a gator from memory—no references allowed. A stranger must recognize it.",
    coins: 26,
    vetoPenalty: 55
  },
  {
    title: "Snack Sculpture Championship",
    text: "Build a sculpture out of gas station snacks and photograph it.",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Florida Lore Liar Game",
    text: "Create a fake Florida history fact and try to convince someone it's true.",
    coins: 24,
    vetoPenalty: 60
  },
  {
    title: "Exit Count Memory Master",
    text: "Recite all towns between Pensacola and Jacksonville in order of exit. You may practice, but you may not look at anything during the official attempt.",
    coins: 28,
    vetoPenalty: 60
  },
  {
    title: "Tower Topper Tracker",
    text: "Take a photo of a water tower with a town’s name.",
    coins: 18,
    vetoPenalty: 60
  },
  {
    title: "Payphone Time Capsule",
    text: "Find a payphone and take a picture using it.",
    coins: 21,
    vetoPenalty: 45
  },
  {
    title: "Canadian Tag Spotter",
    text: "Spot a license plate from a Canadian province.",
    coins: 15,
    vetoPenalty: 30
  },
  {
    title: "Swamp Sign Safari",
    text: "Photograph a sign with the word “Swamp” in it.",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Flag Parade Spotter",
    text: "Find a store with more than 5 flags on display.",
    coins: 18,
    vetoPenalty: 60
  },
  {
    title: "Flea Market Fortune",
    text: "Buy something under $1 at a thrift store or flea market.",
    coins: 27,
    vetoPenalty: 50
  },
  {
    title: "Stranger Swap Showdown",
    text: "Trade an item with a stranger and document the swap.",
    coins: 23,
    vetoPenalty: 50
  },
  {
    title: "Mega Shell Showcase",
    text: "Find a seashell more than 5 inches wide.",
    coins: 16,
    vetoPenalty: 60
  },
  {
    title: "Receipt Decoder: FL Edition",
    text: "Obtain a receipt that mentions “gator” or “Florida” on it.",
    coins: 22,
    vetoPenalty: 40
  },
  {
    title: "Roadside Florist Relay",
    text: "Create a bouquet using only roadside flowers.",
    coins: 20,
    vetoPenalty: 60
  },
  {
    title: "Pledge in the Wild",
    text: "Recite the Florida Pledge of Allegiance in public. You may practice, but you may not look at anything during the official attempt.",
    coins: 30,
    vetoPenalty: 60
  },
  {
    title: "Trailblazer’s Timed Trek",
    text: "Complete a 1-mile trail hike and record your time.",
    coins: 17,
    vetoPenalty: 60
  },
  {
    title: "Balance Master Challenge",
    text: "Balance on a log or curb for 15 minutes without falling.",
    coins: 30,
    vetoPenalty: 45
  },
  {
    title: "Team Colors Unleashed",
    text: "Create a team flag and carry it for the next 3 stops.",
    coins: 25,
    vetoPenalty: 60
  }

],
    "I-75 Corridor": [
  {
    title: "Exhibit Expedition",
    text: "Go to a museum. After going to the museum, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 22,
    vetoPenalty: 55
  },
  {
    title: "Nature Knowledge Test",
    text: "Go to a state park. After going to the park, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Campus Brain Quest",
    text: "Go to a university. After going to the university, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 16,
    vetoPenalty: 45
  },
  {
    title: "Smallest Town Showdown",
    text: "Visit the smallest town off I-75 according to ChatGPT. Take a picture with a town sign.",
    coins: 24,
    vetoPenalty: 45
  },
  {
    title: "Pledge of Sunshine State",
    text: "Recite the Florida Pledge of Allegiance in public. You may practice, but you may not look at anything during the official attempt.",
    coins: 17,
    vetoPenalty: 60
  },
  {
    title: "Zen Rock Tower Challenge",
    text: "Stack 10 rocks on each other",
    coins: 25,
    vetoPenalty: 30
  },
  {
    title: "Billboard Buy Mission",
    text: "Buy something that you see an advertisement for in person.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Luxury Sighting Snapshot",
    text: "Take a photo of a car worth at least 100 thousand dollars.",
    coins: 30,
    vetoPenalty: 50
  },
  {
    title: "Balance Bonanza",
    text: "Balance 3 objects from your car for 10 seconds.",
    coins: 20,
    vetoPenalty: 60
  },
  {
    title: "Local Bites Reviewer",
    text: "Buy a local snack and write a review.",
    coins: 21,
    vetoPenalty: 55
  },
  {
    title: "Music Video Madness",
    text: "Make a short music video in a parking lot. It must be to a song over 3 minutes long.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "Road Racer Rebrand",
    text: "Make your car look like a race car (visually).",
    coins: 27,
    vetoPenalty: 45
  },
  {
    title: "Spin the Compass",
    text: "Use a map, close your eyes, and point: drive 10 minutes in that direction.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "ChatGPT Town Detour",
    text: "Use ChatGPT to generate a random Florida town within 50 miles and detour toward it.",
    coins: 25,
    vetoPenalty: 35
  },
  {
    title: "Living Statue Contest",
    text: "Pose like a statue next to an actual statue.",
    coins: 26,
    vetoPenalty: 50
  },
  {
    title: "Doe-a-Deer Discovery",
    text: "Spot a live deer.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "Dollar Store Posing",
    text: "Pose in front of a dollar general",
    coins: 19,
    vetoPenalty: 50
  },
  {
    title: "Tiny Thrift Challenge",
    text: "Visit a thrift store under 2,000 square feet. Buy something under $2.",
    coins: 26,
    vetoPenalty: 50
  },
  {
    title: "Hurricane Haven Hunter",
    text: "Stop at a rest area and find the emergency hurricane shelter sign.",
    coins: 29,
    vetoPenalty: 55
  },
  {
    title: "Gator Patrol!",
    text: "Spot a live gator or gator warning sign.",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Ibis Hunt No Tech Allowed",
    text: "Find an ibis (real, statue, or drawing). You may not use technology or draw it yourself.",
    coins: 23,
    vetoPenalty: 50
  },
  {
    title: "Leaf Collector's Quest",
    text: "Collect five different kinds of fallen leaves.",
    coins: 22,
    vetoPenalty: 45
  },
  {
    title: "Rest Stop Poet",
    text: "Write a four-line poem about I-75 and read it aloud at a rest stop.",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Reptilian Riddle Letters",
    text: "Use objects around you to spell 'ALLIGATOR.'",
    coins: 16,
    vetoPenalty: 45
  },
  {
    title: "County Count Recall",
    text: "List the counties you’ve passed through so far without checking your phone.",
    coins: 29,
    vetoPenalty: 35
  },
  {
    title: "Regional Quiz Showdown",
    text: "Ask ChatGPT to generate a quiz about the region you’re currently in. Score 70% to pass.",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "O is for Ocala",
    text: "Try a food that begins with the letter “O” (for Ocala).",
    coins: 19,
    vetoPenalty: 40
  },
  {
    title: "Key Lime But Not Pie",
    text: "Eat a key lime dessert that isn’t pie.",
    coins: 21,
    vetoPenalty: 55
  },
  {
    title: "Citrus Sip Critic",
    text: "Have orange juice from a gas station and rate it on camera.",
    coins: 28,
    vetoPenalty: 50
  },
  {
    title: "Fruity Street Sleuth",
    text: "Find a street name with a fruit in it. Take a picture of the street sign.",
    coins: 17,
    vetoPenalty: 40
  },
  {
    title: "Flamingo Fiesta Finder",
    text: "Locate a store with at least 5 flamingo-themed items. Take a picture of them.",
    coins: 26,
    vetoPenalty: 60
  },
  {
    title: "Local Treasure Time",
    text: "Ask a local what their favorite town spot is and spend 5 minutes there.",
    coins: 20,
    vetoPenalty: 50
  },
  {
    title: "Push-Ups at Waffle House",
    text: "Do 10 push-ups next to a Waffle House sign.",
    coins: 27,
    vetoPenalty: 55
  },
  {
    title: "Burger Dice Gauntlet",
    text: "Roll a die to determine how many burgers you must eat before the next challenge.",
    coins: 30,
    vetoPenalty: 60
  }
],

 "I-95 Corridor": [
  {
    title: "Museum Mind Meld",
    text: "Go to a museum. After going to the museum, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 26,
    vetoPenalty: 40
  },
  {
    title: "Park Ranger Pop Quiz",
    text: "Go to a state park. After going to the park, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 28,
    vetoPenalty: 60
  },
  {
    title: "Campus Knowledge Chase",
    text: "Go to a university. After going to the university, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 27,
    vetoPenalty: 50
  },
  {
    title: "Tiny Town Tracker",
    text: "Visit the smallest town off I-75 according to ChatGPT. Take a picture with a town sign.",
    coins: 28,
    vetoPenalty: 60
  },
  {
    title: "Pledge of Allegiance Relay",
    text: "Recite the Florida Pledge of Allegiance in public. You may practice, but you may not look at anything during the official attempt.",
    coins: 30,
    vetoPenalty: 50
  },
  {
    title: "Stone Stack Summit",
    text: "Stack 10 rocks on each other",
    coins: 24,
    vetoPenalty: 40
  },
  {
    title: "Ad Shopper Sprint",
    text: "Buy something that you see an advertisement for in person.",
    coins: 15,
    vetoPenalty: 60
  },
  {
    title: "Supercar Snapshot",
    text: "Take a photo of a car worth at least 100 thousand dollars.",
    coins: 20,
    vetoPenalty: 45
  },
  {
    title: "Object Balance Blitz",
    text: "Balance 3 objects from your car for 10 seconds.",
    coins: 25,
    vetoPenalty: 50
  },
  {
    title: "Local Snack Star",
    text: "Buy a local snack and write a review.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Pop Star Parking Lot",
    text: "Make a short music video in a parking lot. It must be to a song over 3 minutes long.",
    coins: 30,
    vetoPenalty: 60
  },
  {
    title: "Turbo Car Transformation",
    text: "Make your car look like a race car (visually).",
    coins: 29,
    vetoPenalty: 35
  },
  {
    title: "Map Fate Mission",
    text: "Use a map, close your eyes, and point: drive 10 minutes in that direction.",
    coins: 30,
    vetoPenalty: 40
  },
  {
    title: "Mystery Town Detour",
    text: "Use ChatGPT to generate a random Florida town within 50 miles and detour toward it.",
    coins: 21,
    vetoPenalty: 60
  },
  {
    title: "Statue Stillness Challenge",
    text: "Pose like a statue next to an actual statue.",
    coins: 21,
    vetoPenalty: 45
  },
  {
    title: "Chick-Fil-A Chill Shot",
    text: "Pose next to a Chick-Fil-A",
    coins: 24,
    vetoPenalty: 45
  },
  {
    title: "Coaster Courage Check",
    text: "Ride a roller coaster",
    coins: 24,
    vetoPenalty: 60
  },
  {
    title: "Beach Break Timer",
    text: "Spend 10 minutes at the beach",
    coins: 30,
    vetoPenalty: 60
  },
  {
    title: "Haiku by the Sea",
    text: "Visit a beach between exits. Find a seashell and write a haiku about it.",
    coins: 30,
    vetoPenalty: 60
  },
  {
    title: "Lighthouse Lookout Legend",
    text: "Visit a lighthouse. Take a dramatic selfie with it.",
    coins: 19,
    vetoPenalty: 55
  },
  {
    title: "Taste Test: Cuban Edition",
    text: "Try Cuban food.",
    coins: 18,
    vetoPenalty: 55
  },
  {
    title: "Surfin’ Safari Stop",
    text: "Visit a surf shop.",
    coins: 18,
    vetoPenalty: 55
  },
  {
    title: "Dolphin Discovery",
    text: "Find a dolphin—statue, shirt, or live. Document it.",
    coins: 28,
    vetoPenalty: 55
  },
  {
    title: "Palm Tree Identifier",
    text: "Identify 3 different types of palm trees.",
    coins: 19,
    vetoPenalty: 45
  },
  {
    title: "Shell Mosaic Artist",
    text: "Collect 5 different shells and arrange them in a pattern.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "Pelican Picasso Challenge",
    text: "Draw a pelican from memory. A stranger must recognize it.",
    coins: 29,
    vetoPenalty: 60
  },
  {
    title: "Birdwatcher’s Action Reel",
    text: "Film a bird catching or eating something.",
    coins: 26,
    vetoPenalty: 45
  },
  {
    title: "Graffiti Hunter Mission",
    text: "Find graffiti, and take a picture of it.",
    coins: 22,
    vetoPenalty: 45
  },
  {
    title: "Flip-Flop Fitness Walk",
    text: "Walk the length of an entire city block in flip-flops.",
    coins: 20,
    vetoPenalty: 50
  },
  {
    title: "Mural Mimic Moment",
    text: "Locate a building with a mural and try to replicate one character.",
    coins: 30,
    vetoPenalty: 55
  },
  {
    title: "Busker Appreciation Bonus",
    text: "Find a street musician and tip them",
    coins: 21,
    vetoPenalty: 45
  },
  {
    title: "Lime But Not Pie",
    text: "Eat something made with key lime that is not pie.",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Gas Station Empanada Critic",
    text: "Try a gas station empanada and rate it 1–10.",
    coins: 25,
    vetoPenalty: 40
  },
  {
    title: "Northern Plate Spotter",
    text: "Find a license plate from a state north of Virginia.",
    coins: 29,
    vetoPenalty: 35
  },
  {
    title: "Sticker Bombed Car Quest",
    text: "Spot a car with more than 4 bumper stickers.",
    coins: 24,
    vetoPenalty: 50
  },
  {
    title: "Coconut Clue Collector",
    text: "Get a receipt that shows the word “coconut.”",
    coins: 26,
    vetoPenalty: 45
  },
  {
    title: "Beach Sign Sighting",
    text: "Take a picture of a road sign with “Beach” in its name.",
    coins: 27,
    vetoPenalty: 45
  },
  {
    title: "Pirate Flag Fabricator",
    text: "Create a pirate flag for your team using only found materials.",
    coins: 20,
    vetoPenalty: 60
  },
  {
    title: "City Route Recall",
    text: "List 10 cities I-95 passes through—in order. You may practice, but not use anything during the attempt.",
    coins: 30,
    vetoPenalty: 60
  },
  {
    title: "Backwards Boardwalk March",
    text: "Walk backward for 50 steps on a boardwalk.",
    coins: 15,
    vetoPenalty: 40
  },
  {
    title: "Rest Stop Reviewer",
    text: "Write a Yelp review of a rest stop—make it 5 stars.",
    coins: 17,
    vetoPenalty: 45
  },
  {
    title: "Civic Gratitude Mission",
    text: "Thank a city employee or police officer on duty.",
    coins: 22,
    vetoPenalty: 50
  }
],

  "US-1 & Keys": [
  {
    title: "Museum Memory Test",
    text: "Go to a museum. After going to the museum, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 20,
    vetoPenalty: 60
  },
  {
    title: "State Park Brain Quest",
    text: "Go to a state park. After going to the park, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass",
    coins: 19,
    vetoPenalty: 60
  },
  {
    title: "Tiny Town Key Shot",
    text: "Visit the smallest town off I-75 according to ChatGPT. Take a picture with a town sign.",
    coins: 19,
    vetoPenalty: 60
  },
  {
    title: "Keyside Pledge Showdown",
    text: "Recite the Florida Pledge of Allegiance in public. You may practice, but you may not look at anything during the official attempt.",
    coins: 16,
    vetoPenalty: 50
  },
  {
    title: "Campus Quiz Cruise",
    text: "Go to a university. After going to the university, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 18,
    vetoPenalty: 60
  },
  {
    title: "Stone Stack by the Sea",
    text: "Stack 10 rocks on each other",
    coins: 28,
    vetoPenalty: 60
  },
  {
    title: "Ad Mirage Shopper",
    text: "Buy something that you see an advertisement for in person.",
    coins: 28,
    vetoPenalty: 50
  },
  {
    title: "Million Dollar Motorcar",
    text: "Take a photo of a car worth at least 100 thousand dollars.",
    coins: 20,
    vetoPenalty: 45
  },
  {
    title: "Keys Balance Challenge",
    text: "Balance 3 objects from your car for 10 seconds.",
    coins: 23,
    vetoPenalty: 45
  },
  {
    title: "Island Snack Reviewer",
    text: "Buy a local snack and write a review.",
    coins: 26,
    vetoPenalty: 45
  },
  {
    title: "Parking Lot Pop Hit",
    text: "Make a short music video in a parking lot. It must be to a song over 3 minutes long.",
    coins: 18,
    vetoPenalty: 60
  },
  {
    title: "Nautical Car Makeover",
    text: "Make your car look like a race car (visually).",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Map of Mystery Detour",
    text: "Use a map, close your eyes, and point: drive 10 minutes in that direction.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "GPT Roadspin Adventure",
    text: "Use ChatGPT to generate a random Florida town within 50 miles and detour toward it.",
    coins: 19,
    vetoPenalty: 60
  },
  {
    title: "Living Statue Island Edition",
    text: "Pose like a statue next to an actual statue.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Spelling the Conch Way",
    text: "Spell 'Conch Republic' using items you find.",
    coins: 22,
    vetoPenalty: 60
  },
  {
    title: "Ask for Hemingway",
    text: "Ask a stranger where Hemingway’s house is.",
    coins: 21,
    vetoPenalty: 30
  },
  {
    title: "Hand-Drawn Island Atlas",
    text: "Draw a map of the Keys on a napkin from memory. A stranger must recognize it.",
    coins: 26,
    vetoPenalty: 45
  },
  {
    title: "Flamingo Fever Find",
    text: "Find something flamingo-themed and photograph it",
    coins: 22,
    vetoPenalty: 40
  },
  {
    title: "DIY Conch Horn Showdown",
    text: "Make a conch horn out of a water bottle and blow it.",
    coins: 16,
    vetoPenalty: 50
  },
  {
    title: "Beast Boat Photo Hunt",
    text: "Stop at any marina and take a photo of a boat named after an animal.",
    coins: 20,
    vetoPenalty: 45
  },
  {
    title: "Manatee Mission",
    text: "Spot a manatee—real or depicted (no drawings or technology).",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Gecko Gait Game",
    text: "See a gecko or anole and mimic its walk.",
    coins: 18,
    vetoPenalty: 40
  },
  {
    title: "Pier Pelican Paparazzi",
    text: "Photograph a pelican perched on a pier or piling.",
    coins: 15,
    vetoPenalty: 50
  },
  {
    title: "Parrot Encounter Performance",
    text: "Find a parrot (real, statue, mural, or shirt) and squawk back.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Marine Life ID Sprint",
    text: "Walk the shore and identify 3 fish or marine creatures.",
    coins: 27,
    vetoPenalty: 45
  },
  {
    title: "Crab Crawler Capture",
    text: "Record a video of a crab or hermit crab moving.",
    coins: 27,
    vetoPenalty: 45
  },
  {
    title: "Fritter Feast",
    text: "Eat conch fritters from a local restaurant.",
    coins: 21,
    vetoPenalty: 60
  },
  {
    title: "K-Food Explanation Challenge",
    text: "Eat something starting with “K” (for “Keys”) and explain why it fits.",
    coins: 20,
    vetoPenalty: 45
  },
  {
    title: "Key Lime Pie Rating",
    text: "Eat key lime pie from any roadside shop and rate it.",
    coins: 28,
    vetoPenalty: 50
  },
  {
    title: "Coconut Connoisseur",
    text: "Try coconut water or anything coconut-flavored.",
    coins: 22,
    vetoPenalty: 30
  },
  {
    title: "Tropical Smoothie Sipper",
    text: "Get a smoothie with mango or guava and drink it at a beach.",
    coins: 17,
    vetoPenalty: 45
  },
  {
    title: "Beachside Bard",
    text: "Write a 4-line poem about seaweed, sand, or sunsets.",
    coins: 30,
    vetoPenalty: 60
  },
  {
    title: "Rooster Canvas Quest",
    text: "Paint your version of a rooster using only red and yellow.",
    coins: 21,
    vetoPenalty: 55
  },
  {
    title: "Railroad Historian Rap",
    text: "Learn 20 facts about the Overseas Railroad and recite them on camera.",
    coins: 29,
    vetoPenalty: 60
  },
  {
    title: "Hemingway House Hunt",
    text: "Visit the Hemingway House. List three things you saw there.",
    coins: 20,
    vetoPenalty: 50
  },
  {
    title: "Seashore Stretch Show",
    text: "Do yoga on a beach. Hold the pose for 30 seconds.",
    coins: 24,
    vetoPenalty: 45
  },
  {
    title: "Coastal Trekker",
    text: "Walk a mile on a beach.",
    coins: 23,
    vetoPenalty: 45
  },
  {
    title: "Barefoot Dash",
    text: "Run barefoot on the sand for 1 minute.",
    coins: 23,
    vetoPenalty: 35
  },
  {
    title: "Keys Compliment Crusade",
    text: "Thank a service worker with a sincere compliment and a smile.",
    coins: 23,
    vetoPenalty: 60
  },
  {
    title: "Tourist Talk Time",
    text: "Interview another tourist about their Keys experience.",
    coins: 20,
    vetoPenalty: 50
  },
  {
    title: "Sea Street Snap",
    text: "Photograph a street named after a sea creature.",
    coins: 22,
    vetoPenalty: 60
  },
  {
    title: "Turtle Sign Selfie",
    text: "Take a selfie with a sea turtle sign or warning.",
    coins: 24,
    vetoPenalty: 45
  },
  {
    title: "Mailbox Art Safari",
    text: "Photograph a painted mailbox with marine designs.",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Flip for Your Fate",
    text: "Flip a coin: heads, visit the closest beach; tails, visit a marina.",
    coins: 25,
    vetoPenalty: 60
  },
  {
    title: "Jumping Jack Rollout",
    text: "Roll a die: do that many jumping jacks times 10 before leaving the stop.",
    coins: 21,
    vetoPenalty: 60
  },
  {
    title: "Stranger's Choice Adventure",
    text: "Randomly ask a stranger to choose your next destination within 25 miles.",
    coins: 17,
    vetoPenalty: 60
  },
  {
    title: "Sticky Note Kindness Drop",
    text: "Leave an encouraging sticky note on a public bathroom mirror.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Teammate’s Joy Capture",
    text: "Photograph a teammate doing their favorite Keys activity.",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Tourist Talk Time",
    text: "Interview another tourist about their Keys experience.",
    coins: 20,
    vetoPenalty: 50
  },
  {
    title: "Sea Street Snap",
    text: "Photograph a street named after a sea creature.",
    coins: 22,
    vetoPenalty: 60
  },
  {
    title: "Turtle Sign Selfie",
    text: "Take a selfie with a sea turtle sign or warning.",
    coins: 24,
    vetoPenalty: 60
  },
  {
    title: "Mailbox Art Safari",
    text: "Photograph a painted mailbox with marine designs.",
    coins: 28,
    vetoPenalty: 30
  },
  {
    title: "Flip for Your Fate",
    text: "Flip a coin: heads, visit the closest beach; tails, visit a marina.",
    coins: 25,
    vetoPenalty: 60
  },
  {
    title: "Jumping Jack Rollout",
    text: "Roll a die: do that many jumping jacks times 10 before leaving the stop.",
    coins: 23,
    vetoPenalty: 60
  },
  {
    title: "Stranger's Choice Adventure",
    text: "Randomly ask a stranger to choose your next destination within 25 miles.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "Sticky Note Kindness Drop",
    text: "Leave an encouraging sticky note on a public bathroom mirror.",
    coins: 17,
    vetoPenalty: 30
  },
  {
    title: "Teammate’s Joy Capture",
    text: "Photograph a teammate doing their favorite Keys activity.",
    coins: 18,
    vetoPenalty: 60
  }
],
  "US-27 & Central FL": [
  {
    title: "Museum Quiz Master",
    text: "Go to a museum. After going to the museum, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 23,
    vetoPenalty: 60
  },
  {
    title: "State Park Scholar",
    text: "Go to a state park. After going to the park, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass",
    coins: 19,
    vetoPenalty: 60
  },
  {
    title: "Smallest Town Stalker",
    text: "Visit the smallest town off I-75 according to ChatGPT. Take a picture with a town sign.",
    coins: 18,
    vetoPenalty: 60
  },
  {
    title: "Civic Pledge Showdown",
    text: "Recite the Florida Pledge of Allegiance in public. You may practice, but you may not look at anything during the official attempt.",
    coins: 17,
    vetoPenalty: 55
  },
  {
    title: "Stacking Stones in the Sun",
    text: "Stack 10 rocks on each other",
    coins: 24,
    vetoPenalty: 50
  },
  {
    title: "Ad Buy Bounty",
    text: "Buy something that you see an advertisement for in person.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Exotic Car Camera Trap",
    text: "Take a photo of a car worth at least 100 thousand dollars.",
    coins: 20,
    vetoPenalty: 30
  },
  {
    title: "Roadside Balancing Act",
    text: "Balance 3 objects from your car for 10 seconds.",
    coins: 23,
    vetoPenalty: 60
  },
  {
    title: "Snack Storytime",
    text: "Buy a local snack and write a review.",
    coins: 20,
    vetoPenalty: 50
  },
  {
    title: "Pop Star Pavement Jam",
    text: "Make a short music video in a parking lot. It must be a song over 3 minutes long.",
    coins: 30,
    vetoPenalty: 55
  },
  {
    title: "Speed Racer Aesthetic",
    text: "Make your car look like a race car (visually).",
    coins: 20,
    vetoPenalty: 30
  },
  {
    title: "Map Spinner Drive",
    text: "Use a map, close your eyes, and point: drive 10 minutes in that direction.",
    coins: 26,
    vetoPenalty: 45
  },
  {
    title: "GPT Town Jump",
    text: "Use ChatGPT to generate a random Florida town within 50 miles and detour toward it.",
    coins: 22,
    vetoPenalty: 60
  },
  {
    title: "Living Statue Encore",
    text: "Pose like a statue next to an actual statue.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Citrus Song Serenade",
    text: "Sing the word 'citrus' to the tune of any song. Send it to the other team.",
    coins: 25,
    vetoPenalty: 50
  },
  {
    title: "OJ Drama Drop",
    text: "Drink orange juice and give a dramatic review",
    coins: 19,
    vetoPenalty: 45
  },
  {
    title: "Infomercial Champion",
    text: "Create a commercial for a random roadside store. The commercial must be at least 30 seconds.",
    coins: 24,
    vetoPenalty: 40
  },
  {
    title: "Lime Balance Bonanza",
    text: "Balance 3 limes on a body part.",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Skyline Scribble Challenge",
    text: "Draw your city’s skyline on a napkin.",
    coins: 27,
    vetoPenalty: 40
  },
  {
    title: "Lakeside Pose-Off",
    text: "Pose in front of any lake or large puddle.",
    coins: 23,
    vetoPenalty: 60
  },
  {
    title: "PSA Producer Showdown",
    text: "Make a fake road safety PSA.",
    coins: 16,
    vetoPenalty: 35
  },
  {
    title: "Clewiston Speed Challenge",
    text: "Say 'Clewiston' ten times fast without messing up.",
    coins: 16,
    vetoPenalty: 45
  },
  {
    title: "Orange Crate Snap",
    text: "Find a citrus stand and photograph a crate of oranges.",
    coins: 17,
    vetoPenalty: 35
  },
  {
    title: "Citrus Sculpture Build",
    text: "Make a sculpture from oranges or round items",
    coins: 30,
    vetoPenalty: 60
  },
  {
    title: "Tower Spotting Strike-a-Pose",
    text: "Visit a fire tower or water tower and pose like you’re spotting danger.",
    coins: 24,
    vetoPenalty: 60
  },
  {
    title: "Courthouse Cameo",
    text: "Go to a county courthouse.",
    coins: 20,
    vetoPenalty: 60
  },
  {
    title: "Gator Glimpse Game",
    text: "Spot a live alligator (or a sign warning of one).",
    coins: 30,
    vetoPenalty: 50
  },
  {
    title: "Avian Angler Watch",
    text: "Watch a bird catch a fish or wade through water.",
    coins: 29,
    vetoPenalty: 45
  },
  {
    title: "Pollination Paparazzi",
    text: "Photograph a butterfly or bee on a flower.",
    coins: 19,
    vetoPenalty: 40
  },
  {
    title: "Shellback Sighting",
    text: "Snap a photo of a wild turtle",
    coins: 17,
    vetoPenalty: 30
  },
  {
    title: "Trail Trash Hero",
    text: "Pick up trash at a local trailhead—at least 3 pieces.",
    coins: 20,
    vetoPenalty: 60
  },
  {
    title: "Raptor Radar Watch",
    text: "Spot a hawk or large bird circling overhead.",
    coins: 29,
    vetoPenalty: 50
  },
  {
    title: "Leaf Collector Pro",
    text: "Photograph 3 different types of leaves in one park.",
    coins: 21,
    vetoPenalty: 30
  },
  {
    title: "Lizard Lookout",
    text: "Catch a glimpse of a lizard or skink",
    coins: 19,
    vetoPenalty: 40
  },
  {
    title: "Juice Detective Duo",
    text: "Drink a juice that contains 3 fruits. Identify them all. One teammate buys the juice without saying what fruits are in it to the other.",
    coins: 28,
    vetoPenalty: 60
  },
  {
    title: "Fried Feast Sampler",
    text: "Try something fried from a local diner.",
    coins: 18,
    vetoPenalty: 55
  },
  {
    title: "Mystery Meal Mission",
    text: "Order “whatever the server recommends” at a roadside café.",
    coins: 25,
    vetoPenalty: 60
  },
  {
    title: "Gas Station Budget Bites",
    text: "Buy a snack at a gas station that’s under $1.50 and share it.",
    coins: 19,
    vetoPenalty: 50
  },
  {
    title: "Sandwich Ingredient Symphony",
    text: "Eat a sandwich with 5+ ingredients, naming each as you chew.",
    coins: 19,
    vetoPenalty: 60
  },
  {
    title: "Tower Name Collector",
    text: "Take a photo of a water tower with a town’s name on it.",
    coins: 29,
    vetoPenalty: 60
  },
  {
    title: "Nature Sculpture Challenge",
    text: "Create a sculpture using only natural items.",
    coins: 30,
    vetoPenalty: 35
  },
  {
    title: "Citrus Sketch ID",
    text: "Draw a citrus fruit from memory. A stranger must recognize it.",
    coins: 19,
    vetoPenalty: 45
  },
  {
    title: "Library Trivia Mission",
    text: "Visit a small town library. Ask ChatGPT for a quiz about that town.",
    coins: 25,
    vetoPenalty: 60
  },
  {
    title: "Town Count Guess Quest",
    text: "Guess how many towns are along US-27 from Lake Placid to Clermont—verify with chatGPT that you are right within 30%. No research",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Picnic Park Skip-Off",
    text: "Skip through a picnic area.",
    coins: 18,
    vetoPenalty: 30
  },
  {
    title: "Grove Jumping Jacks",
    text: "Do 10 jumping jacks in front of a citrus grove.",
    coins: 23,
    vetoPenalty: 60
  },
  {
    title: "Lake Lore Interview",
    text: "Interview a local about their favorite nearby lake.",
    coins: 19,
    vetoPenalty: 60
  },
  {
    title: "Compliment Quest",
    text: "Compliment 3 people at separate locations.",
    coins: 22,
    vetoPenalty: 35
  },
  {
    title: "Panther Inquiry Adventure",
    text: "Ask a stranger if they’ve ever seen a panther.",
    coins: 25,
    vetoPenalty: 30
  },
  {
    title: "Mailbox Safari",
    text: "Spot a mailbox shaped like an animal or fruit.",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Wildlife Zone Scout",
    text: "Find a “No Wake Zone” or “Wildlife Crossing” sign.",
    coins: 26,
    vetoPenalty: 45
  },
  {
    title: "Camper Camouflage Catch",
    text: "Photograph a vehicle with antlers or outdoor gear on top.",
    coins: 27,
    vetoPenalty: 50
  },
  {
    title: "Citrus Wall Art Hunter",
    text: "Locate a mural or sign with a citrus fruit in it.",
    coins: 22,
    vetoPenalty: 45
  },
  {
    title: "Brick Castle Pose-Off",
    text: "Find a building made of brick and pose like it’s a castle.",
    coins: 27,
    vetoPenalty: 40
  },
  {
    title: "Trailer Art Spotter",
    text: "Spot a trailer with hand-painted signage.",
    coins: 24,
    vetoPenalty: 35
  },
  {
    title: "Flag Finder Frenzy",
    text: "Take a photo of a flag other than the US or Florida flag.",
    coins: 27,
    vetoPenalty: 50
  },
  {
    title: "Panther Warning Snap",
    text: "Find a sign warning about panthers or gators.",
    coins: 19,
    vetoPenalty: 45
  },
  {
    title: "Feathered Friends Find",
    text: "Document a rooster, peacock, or turkey.",
    coins: 24,
    vetoPenalty: 40
  },
  {
    title: "Town Name Nature Match",
    text: "Photograph a town with “lake,” “ridge,” or “hill” in the name.",
    coins: 22,
    vetoPenalty: 45
  },
  {
    title: "Coin Flip Detour",
    text: "Flip a coin: heads, stop at next attraction according to ChatGPT; tails, skip it.",
    coins: 22,
    vetoPenalty: 45
  },
  {
    title: "Stranger Restaurant Roulette",
    text: "Ask a stranger to choose a nearby restaurant—eat there no matter what.",
    coins: 18,
    vetoPenalty: 50
  },
  {
    title: "Bag Sketch Skit",
    text: "Draw an object from your bag—use it in a 30-second skit.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "Flower Power Giveback",
    text: "Pick flowers and give them away.",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Thank-You Drop Mission",
    text: "Write an anonymous thank-you to a local business and leave it on their door.",
    coins: 23,
    vetoPenalty: 60
  }
],


  "Turnpike North & Panhandle": [
  {
    title: "Museum Trivia Trek",
    text: "Go to a museum. After going to the museum, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 25,
    vetoPenalty: 60
  },
  {
    title: "Park Pass Pop Quiz",
    text: "Go to a state park. After going to the park, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass",
    coins: 28,
    vetoPenalty: 60
  },
  {
    title: "Small Town Snapshot",
    text: "Visit the smallest town off I-75 according to ChatGPT. Take a picture with a town sign.",
    coins: 22,
    vetoPenalty: 55
  },
  {
    title: "Florida Pledge Challenge",
    text: "Recite the Florida Pledge of Allegiance in public. You may practice, but you may not look at anything during the official attempt.",
    coins: 20,
    vetoPenalty: 35
  },
  {
    title: "Stone Stack Sprint",
    text: "Stack 10 rocks on each other",
    coins: 23,
    vetoPenalty: 45
  },
  {
    title: "Billboard Buy Blitz",
    text: "Buy something that you see an advertisement for in person.",
    coins: 17,
    vetoPenalty: 45
  },
  {
    title: "Luxury Ride Lens",
    text: "Take a photo of a car worth at least 100 thousand dollars.",
    coins: 30,
    vetoPenalty: 55
  },
  {
    title: "Highway Balance Act",
    text: "Balance 3 objects from your car for 10 seconds.",
    coins: 29,
    vetoPenalty: 45
  },
  {
    title: "Local Snack Critique",
    text: "Buy a local snack and write a review.",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Parking Lot Idol",
    text: "Make a short music video in a parking lot. It must be to a song over 3 minutes long.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "Speedster Car Makeover",
    text: "Make your car look like a race car (visually).",
    coins: 24,
    vetoPenalty: 45
  },
  {
    title: "Blind Map Drive",
    text: "Use a map, close your eyes, and point: drive 10 minutes in that direction.",
    coins: 23,
    vetoPenalty: 45
  },
  {
    title: "GPT Town Curveball",
    text: "Use ChatGPT to generate a random Florida town within 50 miles and detour toward it.",
    coins: 20,
    vetoPenalty: 60
  },
  {
    title: "Statue Mimicry Match",
    text: "Pose like a statue next to an actual statue.",
    coins: 21,
    vetoPenalty: 45
  },
  {
    title: "Leaf Balance Trial",
    text: "Balance a leaf on your nose for 10 seconds",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "Mossy Haiku Masterpiece",
    text: "Write a haiku about Spanish moss.",
    coins: 24,
    vetoPenalty: 45
  },
  {
    title: "Mini Cabin Builder",
    text: "Build a tiny house out of sticks and leaves.",
    coins: 19,
    vetoPenalty: 45
  },
  {
    title: "Slow Mo Gas Stroll",
    text: "Do a slow-motion walk through a gas station",
    coins: 29,
    vetoPenalty: 35
  },
  {
    title: "Flag Forgery Fest",
    text: "Draw a fake state flag for the Panhandle",
    coins: 22,
    vetoPenalty: 40
  },
  {
    title: "Campus Trivia Chase",
    text: "Go to a university. After going to the university, ask ChatGPT to give you a 10 question quiz. If you get 7/10 at least, you pass.",
    coins: 28,
    vetoPenalty: 60
  },
  {
    title: "Rest Stop Uplift Drop",
    text: "Visit a rest stop on the Turnpike and leave an encouraging note.",
    coins: 19,
    vetoPenalty: 50
  },
  {
    title: "County Line Capture",
    text: "Take a photo at a “Welcome to [County Name]” sign.",
    coins: 25,
    vetoPenalty: 60
  },
  {
    title: "Visitor Center Curiosity",
    text: "Visit a visitor center or welcome center. Grab a brochure and read a fun fact aloud.",
    coins: 20,
    vetoPenalty: 55
  },
  {
    title: "Tiny Town Trek",
    text: "Stop in a town with fewer than 1,000 people and find the town center.",
    coins: 16,
    vetoPenalty: 60
  },
  {
    title: "Panhandle Mural Moment",
    text: "Find a mural in a Panhandle town and pose in front of it.",
    coins: 29,
    vetoPenalty: 45
  },
  {
    title: "Library Snapshot Surprise",
    text: "Visit a local library. Take a picture reading a random book title.",
    coins: 21,
    vetoPenalty: 60
  },
  {
    title: "Hero Station Thanks",
    text: "Visit a fire station or police station and say “thank you” to staff.",
    coins: 27,
    vetoPenalty: 40
  },
  {
    title: "Victory Speech Vibe",
    text: "Go to a courthouse lawn and pose like you're giving a victory speech",
    coins: 18,
    vetoPenalty: 45
  },
  {
    title: "Critter Catch Camera Quest",
    text: "Spot a wild squirrel, rabbit, or armadillo.",
    coins: 20,
    vetoPenalty: 30
  },
  {
    title: "Bird of Prey Hunt",
    text: "Take a picture of a bird of prey (or a sign depicting one).",
    coins: 21,
    vetoPenalty: 45
  },
  {
    title: "Tree ID Trio",
    text: "Identify 3 different native tree species.",
    coins: 26,
    vetoPenalty: 45
  },
  {
    title: "Wildflower Color Hunt",
    text: "Photograph 3 wildflowers of different colors.",
    coins: 18,
    vetoPenalty: 60
  },
  {
    title: "Bee Watch Report",
    text: "Watch a bee pollinate a flower and film it.",
    coins: 19,
    vetoPenalty: 50
  },
  {
    title: "Moss Tree Hug Photo",
    text: "Take a photo of a Spanish moss-draped tree and hug it.",
    coins: 22,
    vetoPenalty: 45
  },
  {
    title: "Gopher Sign Search",
    text: "Find a gopher tortoise crossing sign or burrow.",
    coins: 23,
    vetoPenalty: 40
  },
  {
    title: "Pond Patrol Observation",
    text: "Observe a pond or creek for 5 minutes. Count how many things move.",
    coins: 29,
    vetoPenalty: 50
  },
  {
    title: "Lizard Chase Relay",
    text: "Spot a lizard and follow it for 10 feet",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Sketch the Wildlife",
    text: "Draw an animal you saw today and give it a name",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Diner Fry Day",
    text: "Eat something fried from a small-town diner",
    coins: 19,
    vetoPenalty: 45
  },
  {
    title: "Southern Sampler Bite",
    text: "Try a regional dish with grits, okra, or smoked meat.",
    coins: 24,
    vetoPenalty: 45
  },
  {
    title: "Sweet Tea Stop",
    text: "Drink sweet tea in a restaurant or gas station.",
    coins: 29,
    vetoPenalty: 35
  },
  {
    title: "Boiled Peanut Critique",
    text: "Buy boiled peanuts and review them like a food critic.",
    coins: 23,
    vetoPenalty: 50
  },
  {
    title: "Gas Kitchen Order Up",
    text: "Order something from a gas station kitchen window",
    coins: 23,
    vetoPenalty: 45
  },
  {
    title: "Panhandle P-Food Finder",
    text: "Eat a food that starts with “P” (for Panhandle).",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Civic Sketch Session",
    text: "Sketch a courthouse or town hall building after going there.",
    coins: 26,
    vetoPenalty: 45
  },
  {
    title: "Stick Art Highway Show",
    text: "Make a roadside sculpture from sticks, leaves, and found materials.",
    coins: 20,
    vetoPenalty: 45
  },
  {
    title: "Nature Spellcraft Challenge",
    text: "Use items from nature to spell 'TURNPIKE.'",
    coins: 21,
    vetoPenalty: 55
  },
  {
    title: "Old West Pose-Off",
    text: "Pose like a cowboy or outlaw in front of an old wooden building.",
    coins: 21,
    vetoPenalty: 60
  },
  {
    title: "Buggy Verse Recital",
    text: "Write a limerick about bugs in the South. Read it aloud.",
    coins: 23,
    vetoPenalty: 45
  },
  {
    title: "Border Capitals Rattle-Off",
    text: "Without research, recite the capitals of all the states bordering Florida.",
    coins: 27,
    vetoPenalty: 60
  },
  {
    title: "Crop Knowledge Showdown",
    text: "Name 5 crops grown in North Florida. No research.",
    coins: 20,
    vetoPenalty: 45
  },
  {
    title: "Population Guess Quest",
    text: "Guess the population of the next town you enter—within 25% to pass.",
    coins: 24,
    vetoPenalty: 45
  },
  {
    title: "Backlot Moonwalk",
    text: "Walk backward across a parking lot.",
    coins: 30,
    vetoPenalty: 45
  },
  {
    title: "Zen Pond Pose",
    text: "Stretch or do yoga near a pond or under a tree.",
    coins: 22,
    vetoPenalty: 55
  },
  {
    title: "Triple Compliment Task",
    text: "Compliment 3 different people.",
    coins: 15,
    vetoPenalty: 30
  },
  {
    title: "Cornbread Expert Interview",
    text: "Ask someone how to make the best cornbread and document the answer.",
    coins: 22,
    vetoPenalty: 35
  },
  {
    title: "Camo Ride Spot",
    text: "Spot a vehicle with deer antlers or camouflage paint.",
    coins: 26,
    vetoPenalty: 55
  },
  {
    title: "Scenic Word Shot",
    text: "Take a picture of a sign with “creek,” “hill,” or “hollow.”",
    coins: 26,
    vetoPenalty: 50
  },
  {
    title: "Civil Echoes Hunt",
    text: "Find a Confederate or Civil War monument or plaque.",
    coins: 23,
    vetoPenalty: 60
  },
  {
    title: "Steeple Stalker Snap",
    text: "Spot a church with a steeple taller than its building.",
    coins: 23,
    vetoPenalty: 55
  },
  {
    title: "Barn Billboard Photo",
    text: "Photograph a barn or large shed with writing on it.",
    coins: 26,
    vetoPenalty: 50
  },
  {
    title: "Gas Station Rooster Chase",
    text: "Locate a rooster or chicken near a gas station.",
    coins: 15,
    vetoPenalty: 60
  },
  {
    title: "Heritage Wall Find",
    text: "Photograph a mural that includes the word “heritage.”",
    coins: 28,
    vetoPenalty: 45
  },
  {
    title: "Wild Mailbox Search",
    text: "Spot a mailbox that is animal-themed.",
    coins: 25,
    vetoPenalty: 45
  },
  {
    title: "Tower Lift Illusion",
    text: "Find a water tower and pose like you’re holding it.",
    coins: 22,
    vetoPenalty: 50
  },
  {
    title: "Nut Receipt Proof",
    text: "Get a receipt that includes the word “pecan” or “peanut.”",
    coins: 18,
    vetoPenalty: 40
  },
  {
    title: "Flag Controversy Find",
    text: "Find a Confederate flag.",
    coins: 30,
    vetoPenalty: 45
  },
  {
    title: "Coin Flip: Diner vs. Park",
    text: "Flip a coin: heads = next stop spend 5 minutes at a diner, tails = spend 5 minutes at a park",
    coins: 24,
    vetoPenalty: 60
  },
  {
    title: "Push-Up Dice Drill",
    text: "Roll a die and complete that many push-ups times 5",
    coins: 28,
    vetoPenalty: 60
  },
  {
    title: "Stranger Dare Draw",
    text: "Ask a stranger to give you a challenge.",
    coins: 26,
    vetoPenalty: 60
  },
  {
    title: "Road Thanks Monologue",
    text: "Film a 60-second gratitude video for your road trip journey.",
    coins: 24,
    vetoPenalty: 60
  },
  {
    title: "Sticky Note Wisdom Drop",
    text: "Leave a local travel tip for another traveler on a sticky note.",
    coins: 22,
    vetoPenalty: 60
  }
]
}





let coinBalance = 0;
let challengeLocked = false;
let team1Confirmed = false;
let team2Confirmed = false;
let currentChallenge = null;
let team1User = null;
let team2User = null;

function drawChallenge() {
  if (challengeLocked) {
    alert("You must complete or veto the current challenge first.");
    return;
  }

  const selectedRegion = document.getElementById("region-select").value;
  const challenges = regionChallenges[selectedRegion];
  const card = document.getElementById("challenge-card");
  const cardText = document.getElementById("card-text");

  if (!challenges || challenges.length === 0) {
    cardText.innerText = "Please select a valid region.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * challenges.length);
  const selected = challenges[randomIndex];
  currentChallenge = selected;

  card.classList.add("drawing");
  setTimeout(() => {
    cardText.innerHTML = `
      <h3>${selected.title}</h3>
      <p>${selected.text}</p>
      <p>🪙 <strong>Reward:</strong> ${selected.coins} coins<br/>
         ⛔ <strong>Veto Penalty:</strong> ${selected.vetoPenalty} minutes</p>
    `;
    card.classList.remove("drawing");
    document.getElementById("challenge-card").classList.remove("hidden");
    document.getElementById("challenge-actions").style.display = "block";
    team1Confirmed = false;
    team2Confirmed = false;
    challengeLocked = true;
  }, 600);
}

function claimTeam(teamNumber) {
  const userName = prompt("Enter your name to claim this team:");
  if (!userName) {
    alert("You must enter a name to claim a team.");
    return;
  }

  if (teamNumber === 1) {
    if (team1User) {
      alert(`Team 1 is already claimed by ${team1User}.`);
    } else {
      team1User = userName;
      document.getElementById("team-status").innerText = `Team 1: ${team1User} | Team 2: ${team2User || "Unclaimed"}`;
      alert(`You have successfully claimed Team 1, ${userName}!`);
    }
  } else if (teamNumber === 2) {
    if (team2User) {
      alert(`Team 2 is already claimed by ${team2User}.`);
    } else {
      team2User = userName;
      document.getElementById("team-status").innerText = `Team 1: ${team1User || "Unclaimed"} | Team 2: ${team2User}`;
      alert(`You have successfully claimed Team 2, ${userName}!`);
    }
  }
}

function teamConfirm(teamNumber) {
  if (!currentChallenge) return;

  if (teamNumber === 1) {
    if (!team1User) {
      alert("Team 1 has not been claimed yet.");
      return;
    }
    team1Confirmed = true;
    alert(`✅ ${team1User} confirmed the challenge is complete.`);
  } else if (teamNumber === 2) {
    if (!team2User) {
      alert("Team 2 has not been claimed yet.");
      return;
    }
    team2Confirmed = true;
    alert(`✅ ${team2User} confirmed the challenge is complete.`);
  }

  if (team1Confirmed && team2Confirmed) {
    coinBalance += currentChallenge.coins;
    alert(`🎉 Both teams confirmed!\nYou earned ${currentChallenge.coins} coins!\n💰 Total: ${coinBalance}`);
    document.getElementById("coin-balance").innerText = `💰 Total Coins: ${coinBalance}`;
    resetChallengeState();
  }
}

function vetoChallenge() {
  if (!currentChallenge) return;

  alert(`❌ Challenge vetoed. You are stuck here for ${currentChallenge.vetoPenalty} minutes.`);
  resetChallengeState();
}

function resetChallengeState() {
  currentChallenge = null;
  team1Confirmed = false;
  team2Confirmed = false;
  challengeLocked = false;
  document.getElementById("challenge-actions").style.display = "none";
  document.getElementById("challenge-card").classList.add("hidden");
}
