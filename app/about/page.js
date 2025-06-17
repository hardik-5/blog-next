import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I&apos;m Hardik, a versatile web developer passionate about creating modern, responsive, and high-performance web applications. This blog is my space to share insights, tips, and tutorials drawn from real-world experience with technologies like ReactJS, Next.js, and Tailwind CSS. From building dynamic UIs to integrating Markdown-based content systems and AI-driven solutions, I believe in continuously learning and growing—and helping others do the same. Whether you're a beginner or a fellow tech enthusiast, I hope this blog becomes a valuable stop on your development journey.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you&apos;re just beginning your coding journey or aiming to level up your development skills, this blog offers hands-on insights, real project experiences, and practical resources. Let&apos;s dive into the world of modern web development—together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Hardik&apos;s Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to seasoned developer, here&apos;s how Hardik navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image src="/3.jpg" alt="Hardik as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white dark:text-white">From Curiosity to Code</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Hardik&apos;s development journey began with a spark of interest in building things for the web. Starting with HTML, CSS, and JavaScript, he gradually explored frameworks like React and Next.js, turning curiosity into capability. With every project—from dynamic blogs to interactive dashboards—he continues to refine his skills and push the boundaries of what&apos;s possible.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image src="/2.jpg" alt="Hardik learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Sharpening the Craft</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                As his foundation grew stronger, Hardik delved into advanced concepts like data structures, algorithms, and full-stack development. He reinforced his learning through structured coursework, hands-on projects, and internships—gaining experience with frameworks like React, Next.js, and Express. Real-world applications, from blogs to dashboards, became the canvas where theory met execution.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image src="/1.jpg" alt="Hardik working on a big project" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Building Beyond Limits</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                As his confidence grew, Hardik began tackling more complex challenges—designing scalable applications, optimizing user experiences, and contributing to impactful tech initiatives. From creating dynamic blog platforms with Next.js to developing admin dashboards and design portfolios, each project reflected his evolving skill set. Obstacles became fuel for growth, shaping him into a thoughtful and adaptive developer.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image src="/4.jpg" alt="Hardik mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Sharing the Journey</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                Beyond building applications, Hardik actively contributes to the tech community—through writing insightful blogs, managing college tech events, and mentoring peers. His leadership roles in societies like CodeChef MAIT and Tech Vision Alliance reflect his passion for collaboration and growth. For Hardik, development is not just about code—it&apos;s about inspiring others and evolving together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}