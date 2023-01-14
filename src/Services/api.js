export const getVotes = async() =>{
  return [{
    "id": 1,
    "createdBbyUserId": 2,   
    "optionId": 6193,
    "questionId": 1,
    "createdAt": "2023-01-06T22:17:18.780Z",
  },
  {
    "id": 2,
    "createdBbyUserId": 2,
    "optionId": 2525,
    "questionId": 5,
    "createdAt": "2023-01-06T18:53:18.780Z",
  },
  {
    "id": 3,
    "createdBbyUserId": 3,
    "optionId": 2525,
    "questionId": 5,
    "createdAt": "2023-01-06T18:55:18.780Z",
  }]
}

export const createVote = async(userId, questionId, optionId) => {
  // return[
  //   {
  //     "id": 4,
  //     "createdBbyUserId": 2,
  //     "optionId": 3247,
  //     "questionId": 2,
  //     "createdAt": "2023-01-06T19:53:18.780Z",
  //   },
  // ];  

  return getQuestions();
}


export const getQuestions = async () => {
    return [
      {
        "id": 1,
        "text": "Just met this guy, he is so nice. He surprised me with tickets to the Cavs vs Lakers game. We live in Cleveland, Ohio so I think he is assuming I am a Cavs fan; however, I am a huge Lakers fan. Should I wear the Lakers jersey to the game or should I just go neutral - no team jersey? #flocks Cavs Jersey, No Jersey",
        "parentId": null,
        "userId": "1",
        "username": "Mary",
        "name": "Mary Thompson",
        "createdAt": "2023-01-06T19:17:18.780Z",
        "voteEndAt": "2023-01-02T19:17:18.780Z",
        "sentiment": null,
        "options": [
            {
                "id": 2759,
                "text": "Cavs Jersey",
                "votes": 0
            },
            {
                "id": 6193,
                "text": "No Jersey",
                "votes": 0
            }
        ]
    },
      {
        "id": 2,
        "text": "I’d like to purchase a cardio equipment for my gym. Right now I have a blowflex, and some free weights. Which cardio machine should I get? Bike, Elliptical, Rower? #flocks Bike, Elliptical, Rower",
        "parentId": null,
        "userId": "2",
        "username": "Luciana",
        "name": "Luciana Bruscino",
        "createdAt": "2023-01-06T19:11:55.817Z",
        "voteEndAt": "2023-01-12T19:17:18.780Z",
        "sentiment": null,
        "options": [
            {
                "id": 3247,
                "text": "Bike",
                "votes": 55
            },
            {
                "id": 2666,
                "text": "Elliptical",
                "votes": 83
            },
            {
                "id": 339,
                "text": "Rower",
                "votes": 102
            }
        ]
    },
      {
        "id": 3,
        "text": "I broke up with him.",
        "username": "Mary",
        "name": "Mary Joe",
        "userId": "2",
        "parentId": 1,
        "createdAt": "2021-08-16T23:00:33.010+02:00",
        "voteEndAt": "2023-01-02T19:17:18.780Z",
        "sentiment": "Negative",
        "options": [],
      },
      {
        id: 4,
        "text": "Thank you everyone. I ended up getting the Rower as suggested. What an awesome full body workout. I love it! In just a few meetings I am sweating and feeling the burn!",
        "username": "Luciana",  
        "name": "Luciana Bruscino",     
        "userId": "2",
        "parentId": 2,
        "createdAt": "2021-08-16T23:00:33.010+02:00",
        "voteEndAt": "2023-01-012T19:17:18.780Z",
        "sentiment": "Positive",
        "options": [],
      },
      {
        "id": 5,
        "text": "What should I eat today? #flocks pizza, pasta, salad",
        "parentId": null,
        "userId": "3",
        "username": "Rodolfo",
        "name": "Rodolfo Vendramini",
        "createdAt": "2023-01-06T18:53:58.120Z",
        "voteEndAt": "2023-02-06T19:17:18.780Z",
        "sentiment": null,
        "options": [{
                "id": 292,
                "text": "pizza",
                "votes": 0
            },
            {
                "id": 2525,
                "text": "pasta",
                "votes": 0
            },
            {
                "id": 6608,
                "text": "salad",
                "votes": 0
            },          
        ]
    },
    {
      "id": 6,
      "text": "I have one hour to do exercises right now. Should I go on a bike ride or a long walk? #flocks Indoor Biking, Walk",
      "parentId": null,
      "userId": "3",
      "username": "Rodolfo",
      "name": "Rodolfo Vendramini",
      "createdAt": "2023-01-06T19:19:05.953Z",
      "voteEndAt": "2023-02-01T19:17:18.780Z",
      "sentiment": null,
      "options": [
          {
              "id": 4280,
              "text": "Indoor Biking",
              "votes": 0
          },
          {
              "id": 2735,
              "text": "Walk",
              "votes": 0
          }
      ]
    },
    {
      "id": 7,
      "text": "My flight got cancelled for a quick weekend trip last minute without a reason. They rebooked me but made a mistake on the number of passagens. I am having a bad feeling. Should I rebook it or get refund? #flocks rebook, refund",
      "parentId": null,
      "userId": "2",
      "username": "Luciana",
      "name": "Luciana Bruscino",
      "createdAt": "2023-01-13T21:17:18.780Z",
      "voteEndAt": "2023-01-13T23:17:18.780Z",
      "sentiment": null,
      "options": [
          {
              "id": 2760,
              "text": "Rebook",
              "votes": 98
          },
          {
              "id": 6100,
              "text": "Refund",
              "votes": 56
          }
      ]
  },
  {
      id: 8,
        "text": "There is a huge snow storm here today, so I decided to refund it. My daughter was not happy at first but now we get to play in the snow instead, which she loves!",
        "username": "Luciana",  
        "name": "Luciana Bruscino",     
        "userId": "2",
        "parentId": 2,
        "createdAt": "2021-01-14T06:00:33.010+02:00",
        "voteEndAt": "2023-01-13T23:17:18.780Z",
        "sentiment": "Positive",
        "options": [],
      },
    ];
  };

  export const createQuestion = async (text, parentId = null) => {
    return { text };
      
  };
  
  export const updateQuestion = async (text) => {
    return { text };
  };
  
  export const deleteQuestion = async () => {
    return {};
  };