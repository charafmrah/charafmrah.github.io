function App() {
  return (
    <div className="flex flex-col gap-10 max-w-3xl transition-all duration-700 ease-in-out">
      <h1>hi, this is charaf mrah!</h1>

      <a href="https://github.com/charafmrah" target="_blank">
        <img
          src="headshot.png"
          alt="Charaf"
          className="w-96 rounded-2xl shadow-lg shadow-hackerGreen hover:scale-105"
        />
      </a>

      <p>software engineer & content creator.</p>

      <div>
        <h2>skills</h2>
        <p>
          JavaScript - React - TailwindCSS - TypeScript - PHP - WordPress -
          Python - Django - HTML - CSS - SQL - Kotlin - Android SDK - Git
        </p>
      </div>

      <div>
        <h2>projects</h2>
        <p>
          This website is a work in progress. For the meantime, you can check
          out{" "}
          <a target="_blank" href="https://github.com/charafmrah">
            my GitHub profile
          </a>{" "}
          to check some of my projects
        </p>
      </div>

      <div>
        <h2>contact</h2>
        <div className="flex flex-col lg:flex-row gap-5 overflow-hidden">
          <p>
            email:{" "}
            <a target="_blank" href="mailto:charaf4charaf@gmail.com">
              charaf4charaf@gmail.com
            </a>
          </p>
          <p>
            linkedin:{" "}
            <a target="_blank" href="https://linkedin.com/in/charafmrah">
              @charafmrah
            </a>
          </p>
          <p>
            twitter:{" "}
            <a target="_blank" href="https://twitter.com/charafmrah">
              @charafmrah
            </a>
          </p>
          <p>
            instagram:{" "}
            <a target="_blank" href="https://instagram.com/charafmrah">
              @charafmrah
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
