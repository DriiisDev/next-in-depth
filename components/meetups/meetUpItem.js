import Image from 'next/image';
import Card from '../ui/Card';
import './meetupItem.module.css';

const MeetupItem = (props) => {
  return (
    <li className="card-item">
      <Card>
        <div className="card-image">
          {/* <Image src={props.image} alt={props.title} /> */}
        </div>
        <div className="cardcontent">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="card-actions">
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
