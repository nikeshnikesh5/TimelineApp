import timelineElements from "./data";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function App() {
  let workIcon = { background: "limegreen" };
  let schoolIcon = { background: "lightcoral" };

  return (
    <div>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((items) => {
          let Button =
            items.buttonText !== undefined && items.buttonText !== null && items.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={items.key}
              date={items.date}
              dateClassName="date"
              iconStyle={items.icon === "work" ? workIcon : schoolIcon}
            >

              <h3 className="vertical-timeline-element-title">
                {items.title}
              </h3>

              <h5 className="vertical-timeline-element-subtitle">
                {items.location}
              </h5>

              <p className="p">{items.description}</p>

              {Button && (<button className={`btn ${items.icon === "work" ? "work-btn" : "school-btn"}`} >{items.buttonText}</button>)}
           
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;