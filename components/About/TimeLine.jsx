import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ListIcon from "../ListIcon/ListIcon";
import Journey from "@/Data/Journey";
const TimeLine = () => {
  return (
    <div className="">
      <div className="text-2xl md:text-center text-white items-center md:justify-center ">
        <div className="flex items-center md:justify-center">
          <h1 className="p-4 border-b-4 border-blue-800 hover:border-white">My Journey So Far.</h1>
        </div>
      </div>
      <VerticalTimeline lineColor="rgb(30, 64, 175)">
        {Journey.map((data, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#888888",
              }}
              contentArrowStyle={{ display: "none" }}
              iconStyle={{ background: "rgb(30, 64, 175)" }}
              icon={<ListIcon />}
            >
              <h3 className=" text-blue-500">
                {data.company}
              </h3>
              <h4 className=" text-white">
                {data.positionTime}
              </h4>
              <p className="vertical-timeline-element-desc">{data.desc}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  )
};
export default TimeLine;