/**
 * Fetching events
 */

import {
  siteConfigs
} from "configs";

export type EventsResponse = {
  error: any;
  events: EventsArray;
};

export type EventsArray = EventObject[];

export type EventObject = {
  uuid: string;
  organization: string;
  committee: string;
  cover: string;
  title: string;
  description: string;
  location: string;
  eventLink: string | null;
  start: string;
  end: string;
  pointValue: number;
  requiresStaff: boolean;
  staffPointBonus: number;
};

const handleErrors = (response: Response): Promise < EventsResponse > => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export const getAllCommunityEvents = async (): Promise < EventsArray | undefined > => {
  let apiurl = `https://acmucsd-membership-portal-api.herokuapp.com/api/v1/event?committee=${siteConfigs.committee}`;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // apiurl = `https://acmucsd-portal-testing.herokuapp.com/api/v1/event?committee=${siteConfigs.committee}`;
  }

  try {
    // const response: Response = await fetch(apiurl);
    // const result: EventsResponse = await handleErrors(response);
    // return result.events.reverse();
    return tempdata.events;
  } catch (error) {
    return undefined;
  }
};
let tempdata = {
  "error": null,
  "events": [{
    "uuid": "038e3ca7-f268-4970-86c8-4d6c80187771",
    "organization": "ACM",
    "committee": "AI",
    "cover": "https://imgur.com/DtM9gbH.png",
    "title": "AI Pathing",
    "description": "This workshop will show different methods that enable AI and bots to navigate maps, and teach people how to write those methods and how to use them!",
    "location": "acmurl.com/ai-event",
    "eventLink": null,
    "start": "2020-06-03T03:00:00.000Z",
    "end": "2020-06-03T04:00:00.000Z",
    "pointValue": 10,
    "requiresStaff": false,
    "staffPointBonus": 0
  }, {
    "uuid": "b38bf213-80d1-4cf1-a4a5-2a4f45347398",
    "organization": "ACM",
    "committee": "AI",
    "cover": "https://imgur.com/uMpPZSy.png",
    "title": "Introduction to Computer Vision with Fashion MNIST",
    "description": "Introduction to different computer vision techniques for the problem of image classification on the Fashion MNIST dataset. We will be trying out techniques such as feature detection, CNNs, and transfer learning.\n\nLink: live.acmucsd.com",
    "location": "acmurl.com/ai-event",
    "eventLink": null,
    "start": "2020-06-07T02:00:00.000Z",
    "end": "2020-06-07T04:00:00.000Z",
    "pointValue": 10,
    "requiresStaff": false,
    "staffPointBonus": 0
  }]
}