
import { Fragment } from "react";
import MeetUpList from "../components/meetups/meetUpList"

const DUMMY_MEETUPS = [
    {
        id:"m1",
        title:"A First Meetup",
        image:"../public/img/photo.jpg",
        address:"Some addresss 5, 12345 Some city",
        description:"this is a first meetup"
    },
    {
        id:"m2",
        title:"A First Meetup",
        image:"../public/img/photo.jpg",
        address:"Some addresss 5, 12345 Some city",
        description:"this is a first meetup"
    },
];

const HomePage = () => {
  return (
    <Fragment>
        <MeetUpList meetups={DUMMY_MEETUPS}/>
    </Fragment>
  )
}

export default HomePage;