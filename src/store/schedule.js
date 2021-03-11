module.exports = {
    state: () => ({
      events: [
        {
            date: "2021-03-17T13:00:00",
            title: "Introduction to Client Side Coding",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            links: [
                {
                    title: "CodePen",
                    description: "CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.",
                    url: "https://codepen.io/",
                    tags: ["Setup"]
                },
                {
                    title: "What is HTML",
                    url: "https://youtu.be/W-6OY9eI3hk",
                    tags: ["YouTube", "HTML"]
                },
                {
                    title: "HTML, CSS, JavaScript Explained [in 4 minutes for beginners]",
                    url: "https://youtu.be/gT0Lh1eYk78",
                    tags: ["YouTube", "HTML", "JavaScript", "CSS"]
                }
            ],
            tags: ["Setup", "YouTube", "HTML", "JavaScript", "CSS"]
           },
           {
            date: "2021-03-24T13:00:00",
            title: "Day Two",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            links: [
                {
                    title: "VS Code",
                    description: "Visual Studio Code. Free. Built on open source. Runs everywhere.",
                    url: "https://code.visualstudio.com/",
                    tags: ["Setup"]
                }
            ],
            tags: ["Setup"]
           },
           {
            date: "2021-03-31T13:00:00",
            title: "Day Three",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            links: [
                {
                    title: "HTML, CSS, JavaScript Explained [in 4 minutes for beginners]",
                    url: "https://youtu.be/gT0Lh1eYk78",
                    tags: ["YouTube", "HTML", "JavaScript", "CSS"]
                }
            ],
            tags: ["YouTube", "HTML", "JavaScript", "CSS"]
           },
    ],
    tags: [
        'HTML',
        'CSS',
        'JavaScript',
        'Setup',
        'YouTube',
    ]
    }),
    
    mutations: {},
    actions: {},
    getters: {}
  }