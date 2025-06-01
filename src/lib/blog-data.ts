
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  snippet: string;
  content: string; 
}

export const blogPosts: BlogPost[] = [
  {
    slug: "my-journey-into-web-development",
    title: "My Journey into Web Development",
    date: "June 1, 2024",
    snippet: "A brief look into how I started my journey in the world of web development, the challenges I faced, and the exciting projects I've worked on. Click to read more!",
    content: `
      <p>This is the full story of my journey into web development. It all started with a curious spark when I first tweaked a piece of HTML and saw the results live in a browser. That moment of creation was incredibly empowering.</p>
      <p>I dived deeper, learning about CSS to style my creations and JavaScript to bring them to life with interactivity. The learning curve was steep, filled with late nights, debugging frustrations, and the thrill of finally making something work.</p>
      <h2>First Steps & Challenges</h2>
      <p>My first encounter with "real" code beyond simple HTML/CSS was through a basic JavaScript tutorial. I was amazed by how a few lines of text could create dynamic experiences on a screen. However, concepts like scope, asynchronous operations, and the DOM were initially challenging. I relied heavily on online communities, documentation, and building small, experimental projects to solidify my understanding.</p>
      <h2>Learning Frameworks and Expanding Horizons</h2>
      <p>As I grew more comfortable with vanilla JavaScript, I started exploring frameworks. React, with its component-based architecture, was a revelation. It changed how I approached building UIs, making them more modular and manageable. Soon after, I discovered Next.js, which took my development workflow to another level with features like server-side rendering, routing, and API routes. This allowed me to build more complex, performant full-stack applications.</p>
      <p>Alongside front-end development, I ventured into the back-end with Node.js and Express, and learned to work with databases like MongoDB. Understanding the full stack gave me a more holistic view of web applications.</p>
      <h2>Projects and Growth</h2>
      <p>Each project, from simple to-do apps to more complex platforms like Konet Hub and Nuvue, taught me invaluable lessons not just about coding, but also about problem-solving, project management, and user experience. The journey is ongoing, and with technologies like AI and Web3 on the rise, I'm excited to keep learning and building!</p>
    `,
  },
];
