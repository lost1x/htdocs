// ===== FORTUNE TELLER DATA =====

const fortuneCategories = {
    "love": {
        name: "Love & Relationships",
        icon: "fa-heart",
        color: "#EC4899",
        keywords: ["heart", "love", "relationship", "romance", "partner", "soulmate", "connection", "passion"],
        fortunes: [
            "The crystal ball reveals a deep connection approaching your life. Keep your heart open to unexpected encounters.",
            "Your romantic future holds passion and devotion. A significant relationship will transform your life.",
            "Love surrounds you like a warm embrace. The universe conspires to bring you closer to your heart's desire.",
            "A soulmate connection is on the horizon. The mystical forces align to unite twin flames.",
            "Your heart's true calling will be answered soon. Love blooms in the most unexpected places."
        ],
        guidance: [
            "Trust your intuition in matters of the heart. Your inner wisdom guides you toward true love.",
            "Be vulnerable and authentic. The right person will love you for who you truly are.",
            "Focus on self-love first. When you radiate love from within, you attract it abundantly.",
            "Release past relationship baggage. The future holds new possibilities when you make space.",
            "Communication is key. Express your feelings honestly and listen with an open heart."
        ]
    },
    "career": {
        name: "Career & Success",
        icon: "fa-briefcase",
        color: "#3B82F6",
        keywords: ["career", "work", "success", "promotion", "business", "achievement", "goals", "ambition"],
        fortunes: [
            "The crystal ball shows a major career breakthrough on your horizon. Your hard work will soon be recognized.",
            "Success flows to you like a river of opportunity. Professional advancement is imminent.",
            "Your talents will be discovered by influential people. A dream opportunity awaits.",
            "The mystical forces favor your professional journey. Leadership and recognition are coming.",
            "Your career path aligns with your true purpose. Prosperity and fulfillment await."
        ],
        guidance: [
            "Network with intention. Meaningful connections will open doors to opportunity.",
            "Invest in your skills. Continuous learning leads to exponential growth.",
            "Trust your instincts when making career decisions. Your intuition rarely steers you wrong.",
            "Balance ambition with well-being. Sustainable success requires self-care.",
            "Take calculated risks. Fortune favors the bold who prepare thoroughly."
        ]
    },
    "health": {
        name: "Health & Wellness",
        icon: "fa-heartbeat",
        color: "#10B981",
        keywords: ["health", "wellness", "healing", "energy", "vitality", "strength", "recovery", "balance"],
        fortunes: [
            "The crystal ball reveals renewed vitality and energy flowing through your body. Healing is on the way.",
            "Your health journey takes a positive turn. Wellness and strength will be your companions.",
            "The mystical forces of restoration surround you. Complete healing is within reach.",
            "Your body responds beautifully to positive changes. Vibrant health manifests soon.",
            "Balance returns to your physical and energetic self. Harmony and wellness prevail."
        ],
        guidance: [
            "Listen to your body's wisdom. It communicates needs before problems arise.",
            "Nourish yourself holistically. Mind, body, and spirit connection brings true health.",
            "Rest is as important as activity. Recovery time amplifies your wellness efforts.",
            "Stay hydrated and move joyfully. Simple habits create profound health transformations.",
            "Manage stress through mindfulness. Peaceful thoughts support physical healing."
        ]
    },
    "money": {
        name: "Wealth & Prosperity",
        icon: "fa-coins",
        color: "#F59E0B",
        keywords: ["money", "wealth", "prosperity", "abundance", "financial", "riches", "success", "fortune"],
        fortunes: [
            "The crystal ball shows abundant wealth flowing into your life. Financial prosperity is imminent.",
            "Money magnetizes to you from unexpected sources. Your fortune multiplies rapidly.",
            "The mystical forces of abundance surround you. Financial freedom is your destiny.",
            "Your investments and efforts bear fruit. Wealth accumulation accelerates.",
            "Prosperity consciousness attracts unlimited abundance. Riches flow to you effortlessly."
        ],
        guidance: [
            "Practice gratitude for current abundance. Appreciation attracts more prosperity.",
            "Budget wisely but think abundantly. Smart planning meets expansive thinking.",
            "Multiple income streams strengthen your financial foundation. Diversify your wealth.",
            "Give generously within your means. The flow of giving and receiving creates abundance.",
            "Invest in yourself first. Personal growth compounds into financial success."
        ]
    },
    "general": {
        name: "General Guidance",
        icon: "fa-star",
        color: "#8B5CF6",
        keywords: ["life", "future", "destiny", "path", "journey", "guidance", "wisdom", "direction"],
        fortunes: [
            "The crystal ball reveals a beautiful journey unfolding. Your path is blessed by mystical forces.",
            "Destiny calls you toward greatness. The universe conspires to support your highest good.",
            "Your future holds magical possibilities. Wonder and delight await around every corner.",
            "The mystical realm embraces your journey. Divine guidance illuminates your path.",
            "Your life's purpose becomes clearer with each passing day. Fulfillment is your birthright."
        ],
        guidance: [
            "Trust the timing of your life. Everything unfolds in divine order.",
            "Stay present and mindful. The present moment holds all the power you need.",
            "Follow your joy and passion. Your enthusiasm is your compass to fulfillment.",
            "Embrace change as growth. Transformation leads to expanded possibilities.",
            "Connect with your inner wisdom. Your intuition is your most trusted guide."
        ]
    }
};

const fortuneMethods = [
    {
        name: "Crystal Ball Gazing",
        icon: "fa-crystal-ball",
        description: "Ancient method of scrying using a crystal ball to reveal hidden truths and future possibilities.",
        origin: "Dating back to Celtic druidic traditions"
    },
    {
        name: "Tarot Reading",
        icon: "fa-layer-group",
        description: "Using tarot cards to gain insight into past, present, and future events through symbolic interpretation.",
        origin: "15th century Europe, evolved from playing cards"
    },
    {
        name: "Palm Reading",
        icon: "fa-hand-paper",
        description: "Analyzing the lines, shapes, and mounts of the hand to reveal character traits and predict future events.",
        origin: "Ancient India, spread through Roma culture"
    },
    {
        name: "Astrology",
        icon: "fa-star",
        description: "Interpreting celestial positions and movements to understand personality and forecast future events.",
        origin: "Ancient Babylon, over 2,000 years old"
    },
    {
        name: "Numerology",
        icon: "fa-hashtag",
        description: "Using the mystical significance of numbers to analyze personality and predict future patterns.",
        origin: "Ancient Greek and Pythagorean traditions"
    },
    {
        name: "Tea Leaf Reading",
        icon: "fa-mug-hot",
        description: "Interpreting patterns formed by tea leaves in a cup to gain insight into future events.",
        origin: "Ancient China, popularized in Europe"
    }
];

const luckyElements = {
    numbers: [7, 11, 22, 33, 8, 13, 21],
    colors: ["Purple", "Gold", "Silver", "Blue", "Green", "Red"],
    stones: ["Amethyst", "Crystal", "Rose Quartz", "Citrine", "Black Tourmaline", "Moonstone"],
    days: ["Monday", "Wednesday", "Friday", "Sunday"],
    months: ["January", "March", "May", "July", "September", "November"]
};

const cosmicAlignments = [
    "Mercury in retrograde brings reflection and review",
    "Venus enters your sign bringing love and harmony",
    "Mars energizes your career sector with ambition",
    "Jupiter expands your financial opportunities",
    "Saturn brings structure to your creative projects",
    "Full moon illuminates your path to success",
    "New moon begins a cycle of abundance",
    "Solar eclipse catalyzes major life changes",
    "Lunar eclipse releases what no longer serves you",
    "Planetary alignment supports your highest good"
];

// ===== HELPER FUNCTIONS =====

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateFortune(category, question, timeframe) {
    const categoryData = fortuneCategories[category] || fortuneCategories["general"];
    
    // Select random fortune
    const fortune = getRandomElement(categoryData.fortunes);
    const guidance = getRandomElement(categoryData.guidance);
    const alignment = getRandomElement(cosmicAlignments);
    
    // Generate lucky elements
    const luckyNumbers = [];
    for (let i = 0; i < 3; i++) {
        luckyNumbers.push(getRandomElement(luckyElements.numbers));
    }
    
    const luckyColor = getRandomElement(luckyElements.colors);
    const luckyStone = getRandomElement(luckyElements.stones);
    const luckyDay = getRandomElement(luckyElements.days);
    
    // Customize based on timeframe
    let timeframeModifier = "";
    if (timeframe === "near") {
        timeframeModifier = "In the coming month, ";
    } else if (timeframe === "mid") {
        timeframeModifier = "Over the next three months, ";
    } else {
        timeframeModifier = "In the year ahead, ";
    }
    
    // Customize based on question if provided
    let questionContext = "";
    if (question) {
        questionContext = ` Regarding your question about "${question.substring(0, 50)}${question.length > 50 ? "..." : ""}", `;
    }
    
    return {
        fortune: timeframeModifier + questionContext + fortune,
        guidance: guidance,
        alignment: alignment,
        category: categoryData,
        luckyElements: {
            numbers: luckyNumbers.sort((a, b) => a - b),
            color: luckyColor,
            stone: luckyStone,
            day: luckyDay
        }
    };
}

function getPersonalizedMessage(category, question) {
    const categoryData = fortuneCategories[category] || fortuneCategories["general"];
    
    // Check for specific keywords in question
    if (question) {
        const lowerQuestion = question.toLowerCase();
        
        for (const [key, data] of Object.entries(fortuneCategories)) {
            for (const keyword of data.keywords) {
                if (lowerQuestion.includes(keyword)) {
                    return `The crystal ball senses your focus on ${data.name.toLowerCase()}. ${getRandomElement(data.fortunes)}`;
                }
            }
        }
    }
    
    return getRandomElement(categoryData.fortunes);
}

// Export for use in other files
window.fortuneCategories = fortuneCategories;
window.fortuneMethods = fortuneMethods;
window.luckyElements = luckyElements;
window.cosmicAlignments = cosmicAlignments;
window.generateFortune = generateFortune;
window.getPersonalizedMessage = getPersonalizedMessage;
