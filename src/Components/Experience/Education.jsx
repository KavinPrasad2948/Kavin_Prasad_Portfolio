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
// import university from "./assets/university.png";

const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 bg-white">
            <div className="w-16 h-8 overflow-hidden">
        <Avatar
          src="https://drmcet.ac.in/wp-content/themes/mcet/img/logo.png"
          alt="user 1"
          className="object-cover w-full h-full"
        />
      </div>
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
             Dr. MAHALINGAM COLLEGE OF ENGINEERING AND TECHNOLOGY
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="white" className="font-semibold text-black">
              Bachelor of Engineering , Mechatronics Engineering
              <br /> 2018 - 2022
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://targetstudy.com/files/img/2/80667/L_59369.gif"
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
            21 century international matriculation and higer secondary school 
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
            Higher Secondary School, (HSC) <br /> 2016 - 2018
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>  
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="data:image/jpeg;base64,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"
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
            Oxford matriculation higher secondary school
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
              Secondary School Certificate (SSC) <br /> 2015 - 2016
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
