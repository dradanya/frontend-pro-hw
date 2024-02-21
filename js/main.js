const emojiList = document.getElementById('emoji_list');
const counterList = document.getElementById('emoji_counter');
const emojis = ['⚽️', '🏀', '🥊', '🏋️‍♂️', '🤼‍♀️'];
const counters = [0, 0, 0, 0, 0];

// Add event listeners to each emoji
emojiList.querySelectorAll('.emoji').forEach((emoji, index) => {
    emoji.addEventListener('click', () => {
        counters[index]++;
        updateCounters();
    });
});

// Function to update counters
function updateCounters() {
    counterList.querySelectorAll('.count').forEach((count, index) => {
        count.textContent = counters[index];
    });
}