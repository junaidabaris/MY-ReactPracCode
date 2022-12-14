import Company from "./Company"
import Details from "./Details"
import './AllTab.css'
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const TabsData = [
  {
    "id": "recAGJfiU4CeaV0HL",
    "order": 3,
    "title": "Full Stack Web Developer",
    "dates": "December 2015 - Present",
    "duties": [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
    ],
    "company": "TOMMY"
  },
  {
    "id": "recIL6mJNfWObonls",
    "order": 2,
    "title": "Front-End Engineer",
    "dates": "May 2015 - December 2015",
    "duties": [
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"
    ],
    "company": "BIGDROP"
  },
  {
    "id": "rec61x18GVY99hQq5",
    "order": 1,
    "title": "Engineering Intern",
    "dates": "May 2014 - September 2015",
    "duties": [
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."
    ],
    "company": "CUKER"
  }
]

const company = []
TabsData.map((item) => {
  company.push(item.company)
})

function Experience() {
  const [index, setIndex] = useState(0)
  const getIndex = (index) => {
    // console.log('kkkkkk',index);
    setIndex(index)
  }
  return (
    <div className="Experience">

      <Link to='/'>Go to Home page</Link>
      <h1>Experience</h1>
      <hr />
      <div className="detail-comp">
        <Company company={company} getIndex={getIndex} />
        <Details TabsData={TabsData[index]} />

      </div>
      <Link to='Hackers'><button>Go Hackers</button></Link>
      <Outlet></Outlet>
    </div>
  )
}
export default Experience