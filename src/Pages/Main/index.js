import React, {useState} from 'react';
import '../pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vote from '../../Components/Vote';

function Main() {
  const [items, setItems] = useState(    [
    {
        "id": 1171,
        "text": "Bike",
        "votes": 0
    },
    {
        "id": 3411,
        "text": "Elliptical",
        "votes": 4
    },
    {
        "id": 8952,
        "text": "Rower",
        "votes": 4
    }
    ]);
    const voteUp = id => {
      let i = [...items];
      let item = i.find(x => x.id === id);
    
      item.votes++;
  
      setItems(i);
    };

    const voteDown = id => {
      let i = [...items];
      let item = i.find(x => x.id === id);
      if (item.votes === 0) return;
      item.votes--;
      setItems(i);
    };
  

  return (
    <div>
      <div className="container"> 
        <h1 className="text-dark">Help others by voting on their questions</h1>
        <h5 className="text-dark">People need you to chime in. Vote on the options for the question</h5>
        <div className="my-5 row"> 
          <div className="col border border-2 p-3 d-flex align-items-start flex-column">           
            <div className="mb-auto p-2"> Just met this guy, he is so nice. He surprised me with tickets to the Cavs vs Lakers game. We live in Cleveland, Ohio so I think he is assuming I am a Cavs fan; however, I am a huge Lakers fan. Should I wear the Lakers jersey to the game or should I just go neutral - no team jersey? </div>
            <div className="px-2 py-4">
              <p className="fw-light">By Luciana Bruscino on Jan 4th, 2023</p>
             </div>
          </div>     
          <div className="col col-md-auto">
          <Vote
            items={items}
            voteUp={voteUp}
            voteDown={voteDown}
          />
          </div>
        </div>
        <hr className="m-0" />
        <div className="row"> 
          <div className="col">
          I’d like to purchase a cardio equipment for my gym. Right now I have a blowflex, and some free weights. Which cardio machine should I get? Bike, Elliptical, Rower?
          </div>     
          <div className="col col-md-auto">
            Column
          </div>
        </div>
        <hr className="m-0" />
        <div className="row"> 
          <div className="col">
          I have one hour to do exercises right now. Should I go on a bike ride or a long walk?
          </div>     
          <div className="col col-md-auto">
            Column
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
