const btn=document.getElementById('btn');
const output=document.querySelector('.down');

let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "Your limitation—it’s only your imagination. - Unknown",
    "Push yourself, because no one else is going to do it for you. - Unknown",
    "Great things never come from comfort zones. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "Success doesn’t just find you. You have to go out and get it. - Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Dream bigger. Do bigger. - Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. - Unknown",
    "Wake up with determination. Go to bed with satisfaction. - Unknown",
    "Do something today that your future self will thank you for. - Unknown",
    "Little things make big days. - Unknown",
    "It’s going to be hard, but hard does not mean impossible. - Unknown",
    "Don’t wait for opportunity. Create it. - Unknown",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. - Unknown",
    "The key to success is to focus on goals, not obstacles. - Unknown",
    "Dream it. Believe it. Build it. - Unknown",
    "The only way to do great work is to love what you do. - Unknown",
    "Don’t stop until you’re proud. - Unknown",
    "When you feel like quitting, think about why you started. - Unknown",
    "You don’t always get what you wish for; you get what you work for. - Unknown",
    "Work hard in silence. Let success make the noise. - Unknown",
    "Dream bigger. Do bigger. - Unknown",
    "Don’t wait for opportunity. Create it. - Unknown",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. - Unknown",
    "The key to success is to focus on goals, not obstacles. - Unknown",
    "Dream it. Believe it. Build it. - Unknown",
    "The only way to do great work is to love what you do. - Unknown",
    "Don’t stop until you’re proud. - Unknown",
    "When you feel like quitting, think about why you started. - Unknown",
    "You don’t always get what you wish for; you get what you work for. - Unknown",
    "Work hard in silence. Let success make the noise. - Unknown",
    "Wake up with determination. Go to bed with satisfaction. - Unknown",
    "Do something today that your future self will thank you for. - Unknown",
    "Little things make big days. - Unknown",
    "It’s going to be hard, but hard does not mean impossible. - Unknown",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
];

// Access a random quote

btn.addEventListener('click', ()=>{
    console.log("sss")
    const randomQuote = Math.floor(Math.random() * quotes.length);
     output.textContent = quotes[randomQuote];
})

