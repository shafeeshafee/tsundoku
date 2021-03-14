import React from 'react'
//Mission Page
//Tailwind Styling needed

const ReturnBodyText = () => {
    return (
        <div>
            <p>
            From relieving stress to improving brain function to increasing empathy, <strong> books are capable of doing a lot more than just entertaining the people who enjoy them </strong>. In fact, reading is the <strong> best workout for your brain </strong>, and it can even <strong> improve your memory </strong>. Sure, unwinding with Netflix at the end of every day is relaxing and all, but regularly reading is good for your mind, body, and soul.
            </p>
            <br />
            <p>
            You may not be able to see it, but <strong>your brain is one of the most important parts of yourself</strong>. Without it and the memories it keeps, you wouldn't be you, let alone remember all of your favorite books.
            </p>
            <br />
            <p>                
            Luckily, just be reading them, you can help improve your memory and exercise your brain in the most fun and effective way.    
            </p>
        </div>
    );
};

const ReturnWebStory = () => {
    return (
        
        <div className="story-container">
            <div className="story-photo">
                <a href="https://www.brainpickings.org/2015/03/24/umberto-eco-antilibrary/">
                    <img alt="AntiLibrary" src="/src/Images/umbertoeco.jpg" width="300" height="100"/>
                </a>
                <div className="story-title">
                    <h2>Why Unread Books Are More Valuable to Our Lives than Read Ones</h2>
                </div>
                <div className="story-description">
                    <p>
                    The writer Umberto Eco belongs to that small class of scholars who are encyclopedic, insightful, and nondull. He is the owner of a large personal library (containing thirty thousand books) ...
                    </p>
                </div>
                <div className="story-author">
                    <h3>by Maria Popova</h3>
                </div>
            </div>
            <div className="story-container">
            <div className="story-photo">
                <a href="https://www.bustle.com/p/what-does-reading-do-to-your-brain-these-5-effects-are-pretty-astounding-74676">
                    <img border="0" alt="ReadingBook" src="/src/Images/girl-library.jpg" width="100" height="100"/>
                </a>
                <div className="story-title">
                    <h2>5 Astonishing Ways Reading Changes Your Brain</h2>
                </div>
                <div className="story-description">
                    <p>
                        Since you were a child, you've probably been told to read because "it's good for you." Parents and doctors, teachers and librarians — even me on this very site — have touted the many health and wellness benefits of books, but has anyone every told you ...
                    </p>
                </div>
                <div className="story-author">
                    <h3>by Sadie Trombetta</h3>
                </div>
            </div>
        </div>
        <div className="story-container">
            <div className="story-photo">
                <a href="https://www.ted.com/talks/chip_kidd_why_books_are_here_to_stay">
                    <img border="0" alt="TedTalk" src="/src/Images/read-more-books.jpg" width="100" height="100"/>
                </a>
                <div className="story-title">
                    <h2>5 Why books are here to stay </h2>
                </div>
                <div className="story-description">
                    <p>
                        Despite the rise of e-books, physical books aren't going anywhere. Graphic designer Chip Kidd shares why their design is so lasting. The physical object of a book is almost like a person. I mean, it has a spine and it has a backbone. It has a face. Actually ...
                    </p>
                </div>
                <div className="story-author">
                    <h3>by Chip Kidd</h3>
                </div>
            </div>
        </div>
        </div>
    )
}

function Mission() {
    return (
        <div>
            <h1> mission </h1>
            <div>
                <h1> WHY WE BELIEVE IN READING BOOKS </h1>
            </div>
            <div>
                <h3><strong> By Tsundoku Team </strong></h3>
            </div>
            <ReturnBodyText />
            <ReturnWebStory />
        </div>
    );
};


export default Mission;