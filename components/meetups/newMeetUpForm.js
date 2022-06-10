import {useRef} from 'react';

import Card from "../ui/card";
import "./newMeetUpForm.module.css"

const NewMeetUpForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e) {
        e.prevent.default();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetUpData = {
          title: enteredTitle,
          image: enteredImage,
          address: enteredAddress,
          description: enteredDescription,
        };

        props.onAddMeetUp(meetUpData);
    }
  return (
    <Card>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-container'>
          <div className="form-direction">
            <div className='form-title'>
              <label htmlFor="title">Meetup Title</label>
              <input type="text" required id='title' ref={titleInputRef} />
            </div>
            <div className='form-image'>
              <label htmlFor="image">Meetup Image</label>
              <input type="url" required id='image' ref={imageInputRef} />
            </div>
            <div className='form-address'>
              <label htmlFor="address">Address</label>
              <input type="text" required id='address' ref={addressInputRef} />
            </div>
            <div className='form-description'>
              <label htmlFor="description">Description</label>
              <textarea id="description" required rows="5"></textarea>
            </div>
            <div className="form-button">
              <button>Add Meetup</button>
            </div>
          </div> 
        </div>
      </form>
    </Card>
  )
}

export default NewMeetUpForm;