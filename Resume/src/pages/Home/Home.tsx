import Navbar from "../../components/navbar/Navbar";
import me from "../../assets/oscar.png";
import "./home.css";
import TypingName from "../../components/typingname/Typingname";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <section id="home" className="introduction center">
            <article>
              <img src={me} alt="Image" />
              <TypingName />
              <p className="student">Student & Future Frontend-developer</p>
              <p className="quote">
                "side before self every time" - Billy Bremner
              </p>
            </article>
          </section>

          <section id="aboutme" className="description center">
            <article>
              <h1>Skills & Mindset</h1>
              <div className="lists">
                <ul>
                  <li>HTML, Css, Vanilla JS</li>
                  <li>React</li>
                  <li>React-testing library</li>
                </ul>
                <ul>
                  <li>Good communication</li>
                  <li>Willing to Cooperate</li>
                  <li>Teamworker</li>
                </ul>
                <ul>
                  <li>Creative</li>
                  <li>Problem-solver</li>
                  <li>Grit</li>
                  <li>Willingness to learn</li>
                </ul>
              </div>
            </article>
            <article>
              <h1>Experiences</h1>
              <div className="lists">
                <ul>
                  <li>Highschool graduate in Teknik</li>
                  <li>1 year university studying Economics</li>
                  <li>Working in petrolstation 7 years</li>
                </ul>
              </div>
            </article>
          </section>

          <section className="about center">
            <article>
              <h1>About me</h1>
              <p>
                Iam a 22 year old future developer! I love watching sports,
                mainly football and hockey. I'm a huge fan och Leeds United and
                my hometown hockeyteam. In my freetime I hangout with friends,
                chill on my pc or workout.
              </p>
            </article>
          </section>

          <section id="contact" className="contact center">
            <article>
              <div className="name">
                <h1>Oscar La | 羅俊義</h1>
                <p>Future Frontend Developer</p>
              </div>
              <div className="links">
                <p>LINKEDIN</p>
                <p>OSCAR.LA02@OUTLOOK.COM</p>
                <p>WWW.LTYOSCAR.ME</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
