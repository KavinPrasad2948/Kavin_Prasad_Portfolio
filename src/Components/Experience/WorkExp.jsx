import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import companylogo from "./company.png";

const WorkExp = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a href="https://www.innomatics.in/" target="_blank">
                <Avatar
                  size="lg"
                  src="https://play-lh.googleusercontent.com/lAFgx9P9v6g9CGiJ4yXEghRTGikQg88xuxOg30t_licriW4ODAyXVK4NHBJj-HGILw"
                  alt="user 1"
                />
              </a>
            </TimelineIcon>
            <div className="flex flex-col  text-blue-900">
              <Typography variant="h5" className="font-bold">
                Guvi
              </Typography>
              <Typography
                className="font-bold text-gray-900 my-2"
                color="white"
              >
                Full Stack Web Developer <br /> Feb 2024 - April 2024
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul
              color="gary"
              className="list-disc font-sans ml-5 text-black text-base"
            >
              <li>Completed a comprehensive Full Stack Developer course.</li>
              <li>
                Gained proficiency in HTML, CSS, JavaScript, React.js,
                Express.js, Node.js, MongoDB, and MySQL.
              </li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;
