const products = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        genres: ['fiction'],
        dateReleased: 1605-01-16,
        photo: 'https://d1pwnu15mzvjms.cloudfront.net/210x320/9781504044486.jpg',
        description: 'Often referred to as the first modern European novel, Don Quixote follows the exploits of the titular noble who becomes obsessed with the romantic notion of chivalry. On a self-imposed mission to become a knight-errant, Don Quixote recruits common farmer, Sancho Panza, as his squire. Unfortunately, however, their quests rarely end well—among other misadventures, Don Quixote does battle with a herd of sheep, attacks a group of monks, and even frees a group of convicted criminals.',
        isFeatured: true,
        dateAdded: 2023-04-13,
        rating: 5,
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        genres: ['fiction'],
        dateReleased: 2001-12-19,
        photo: 'https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg',
        description: "This high-fantasy novel is a famous three volume epic. It centers around an all powerful ring forged by the Dark Lord Sauron. For many years the ring is sought after by all likes, but at the start of the novel, it resides in the simple home of the hobbit Bilbo Baggins. Bilbo sets a momentous quest upon his cousin Frodo’s shoulders, tasking him with the journey to Mount Doom to destroy the ring. ",
        isFeatured: true,
        dateAdded: 2023-04-13,
        rating: 6,
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        genres: ['fiction'],
        dateReleased: 2001/11/14,
        photo: 'https://orion-uploads.openroadmedia.com/sm_9333ba5b72d2-hp.jpg',
        description: "Harry Potter and the Sorcerer’s Stone brings readers into a world of magic at Hogwarts School of Witchcraft and Wizardry. On his eleventh birthday, Harry’s magical heritage is brought to light by the bumbling half-giant Hagrid. As he embarks on his new life as a wizard, he finds that there’s more to this news than just learning spells and potions. The Dark Lord Voldemort, who had tried and failed to kill Harry as an infant, is regaining power, and Harry stands in his path.",
        isFeatured: false,
        dateAdded: 2023-04-13,
        rating: 5,
    },
    {
        title: "And Then There Were None",
        author: 'Agatha Christie',
        genres: ['fiction'],
        dateReleased: 1939-11-06,
        photo: 'https://orion-uploads.openroadmedia.com/sm_e82064-and-then-there-were-none.jpg',
        description: "And Then There Were None is a mastery of tension. A quirky millionaire hosts a gathering of eight strangers on a private island off of the English coast. When the guests arrive, the elusive host is nowhere to be found. In his place, however, is the accusation of murder upon each of the guests.",
        isFeatured: false,
        dateAdded: 2023-04-13,
        rating: 5,
    },
]

// all book info from google and https://earlybirdbooks.com/most-popular-books

// Export the seed data to `models/index.js`
module.exports = products