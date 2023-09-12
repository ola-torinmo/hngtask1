import React, { useState, useEffect } from 'react';
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myImage from "../images/bam-bam.jpeg";
import "../App.css";

const greeting = "Ayobami Torinmo Adebayo";
const bio1 = "Frontend Track";
const bio2 = "specialized in React";

const LandingSection = () => {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');
  const [currentTimeInMilliseconds, setCurrentTimeInMilliseconds] = useState(0);

  useEffect(() => {
    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    const currentDay = daysOfWeek[dayIndex];
    setCurrentDayOfWeek(currentDay);

    // Get the current time in milliseconds
    const currentMilliseconds = currentDate.getTime();
    setCurrentTimeInMilliseconds(currentMilliseconds);
  }, []);

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#4E473A"
      className="fss"
    >
      <VStack className="landing-section" spacing={4}>
        <Avatar size="2xl" src={myImage} data-testid="slackDispalyImage"  alt='Ayobami Torinmo Adebayo'/>
        <Heading as="h2" size="2xl" noOfLines={1} data-testid="slackUserName">
          {greeting}
        </Heading>
        <Heading as="h3" size="lg" noOfLines={1} data-testid="myTrack">
          {bio1}
        </Heading>
        
        {/* <Heading as="h3" size="lg" noOfLines={1}>
          {bio2}
        </Heading> */}
        <p data-testid='currentDayOfTheWeek'>Current day of the week is: {currentDayOfWeek}</p>
        <p data-testid='currentUTCTime'>Current time in milliseconds: {currentTimeInMilliseconds}</p>
        <a href='' data-testid="githubURL" >Github</a>
      
        
      </VStack>
    </FullScreenSection>
  );
}

export default LandingSection;
