
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  snippet: string;
  content: string; 
}

export const blogPosts: BlogPost[] = [
  {
    slug: "my-journey-into-web-development-and-dsa",
    title: "My Journey into Web Development and DSA",
    date: "March 3, 2025",
    snippet: "A brief look into how I started my journey in the world of web development(and DSA), the challenges I faced, and the exciting projects I've worked on. Click to read more!",
    content: `
      <p>When I first got into tech, it wasn’t some cinematic “aha” moment. I was just curious. Curious about how websites worked. Curious about why everyone said DSA was the "key to everything." Curious about what I could create with just a keyboard and logic. That curiosity slowly grew into something bigger..</p>
      <h2>Starting Out: Clueless but Curious</h2>
      <p>Should I do DSA first? Or make websites? Or learn Python? Everyone had advice, and all of it conflicted. So I made a deal with myself: I’ll do both — but I’ll do it my way.</p>
      <h2>DSA: The Mental Gym</h2>
      <p>I began with Java. Then dove into LeetCode and a few other platforms. At first, even solving basic problems took me way too long. But the satisfaction of finally cracking a solution? Addictive.</p>
      <p>I started appreciating how problems had layers — and solving them made me feel like I was levelling up not just as a coder, but as a thinker. It wasn’t easy, but it was real. Especially when I started noticing how my logic evolved outside of code too. Even today, I go back to DSA as a way to sharpen myself — especially when web dev starts feeling too “drag-and-drop.”</p>
      <h2>Web Dev: My Creative Escape</h2>
      <p>I’ve always liked creating things that feel alive. That’s what drew me to Web Dev.</p>
      <p>From building NuVue for a hackathon, to developing KoNet as part of a college project, to now ideating and building LoKAL — a platform designed to connect local service providers and small businesses — I’ve realised that building for the web is where I come alive.</p>
      <p>The first time I deployed on Vercel and saw my own work live? Magic.</p>
      <p>The first time something broke after a push? Humbling.</p>
      <p>The first time I fixed it without Googling? Growth.</p>
      <p>Frontend taught me design. Backend taught me structure. GitHub taught me version control. And late nights taught me patience.</p>
      <h2>Where I’m At — And Where I’m Headed</h2>
      <p>Right now?</p>
      <p>I’m polishing my full-stack skills.</p>
      <p>Learning APIs through hands-on mini projects.</p>
      <p>Studying Linear Algebra alongside.</p>
      <p>Grinding a bit of DSA to stay sharp.</p>
      <p>And building cool stuff that I would want to use.</p>
      <h2>To Anyone Starting Out</h2>
      <p>You don’t need to figure it all out at once.</p>
      <p>Try things. Drop some. Obsess over others.</p>
      <p>Don’t just copy what works — build what matters to you.</p>
      <p>And most of all — don’t wait to feel “ready”. I didn’t feel ready either when I wrote my first line of code or deployed my first app. But I did it anyway.</p>
      <p>Because progress (no matter how small) > perfection.</p>
    `,
  },
];
