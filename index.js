const header = document.getElementById('header')
const text = document.getElementById('text')
const btns = document.getElementsByClassName('btns')

let curr = 0

const cards = [
    {
        title: 'Good Morning Tg',
        body: "Welcome back from youth service! It feels like forever since we last worked together, and I'm beyond excited to reconnect with you. Your guidance and mentorship have meant so much to me over the years."
    },
    {
        title: 'Reflecting on the Journey',
        body: 'I still remember when you first introduced me to programming. Those early days were filled with learning and exploration, and your patience helped me grow. I’ve come so far, thanks to everything you’ve taught me.'
    },
    {
        title: 'Your Impact on My Growth',
        body: 'You didn’t just teach me to code, you helped me develop a mindset for problem-solving. Whenever I tackle a new project, I still think back to the principles and tips you shared with me.'
    },
    {
        title: 'Missing Our Sessions',
        body: "It’s been hard working on my own without our regular sessions. I’ve missed your insights and the way you could make even the most complex topics seem simple. There's so much I want to catch up on with you!"
    },
    {
        title: 'Thank You for Your Support',
        body: 'I want to take a moment to express my heartfelt gratitude. Thank you for being there for me, even when I behaved foolishly and rudely. Your patience and understanding mean the world to me, and I appreciate you more than words can say.'
    },
    {
        title: 'Excited for What’s Next',
        body: 'I know the best is yet to come. With all you’ve gained and everything I’ve learned in your absence, I can’t wait to see what new heights we can reach together. Welcome back once again!'
    },
]

for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    element.onclick = changeIndex
}

updateCard()

function changeIndex({ target }) {
    const content = target.id
    if (content == '>') {
        const newCurr = curr + 1
        if (curr < cards.length - 1) {
            curr = newCurr
            updateCard()
        } else {
            alert('This seems to be the last slide!')
        }
    } else {
        const newCurr = curr - 1
        if (curr > 0) {
            curr = newCurr
            updateCard()
        } else {
            alert('This is the first slide. Try pressing next ">" to see more!')
        }
    }
}

function updateCard() {
    header.classList.remove('slideUp')
    text.classList.remove('slideUp')

    header.classList.add('d-none')
    text.classList.add('d-none')

    header.classList.add('slideUp')
    text.classList.add('slideUp')

    const { title, body } = cards[curr]
    header.textContent = title
    text.textContent = body

    // Loops over .del element to remove d-none
    loop(true)
}