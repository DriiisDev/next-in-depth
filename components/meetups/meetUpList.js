import MeetUpItem from "./meetUpItem";
import "./meetUpList.module.css";

const MeetUpList = (props) => {
  return (
      <ul className="list">
          {props.meetups.map((meetup)=>{
            return(
              <MeetUpItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              />
            );
          })}
      </ul>
  );
}

export default MeetUpList;
