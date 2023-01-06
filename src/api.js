export const getQuestions = async () => {
    return [
      {
        "id": 1,
        "text": "Just met this guy, he is so nice. He surprised me with tickets to the Cavs vs Lakers game. We live in Cleveland, Ohio so I think he is assuming I am a Cavs fan; however, I am a huge Lakers fan. Should I wear the Lakers jersey to the game or should I just go neutral - no team jersey? #flocks Cavs Jersey, No Jersey",
        "parentId": null,
        "userId": "2",
        "username": "Luciana",
        "createdAt": "2023-01-06T19:17:18.780Z",
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
        "createdAt": "2023-01-06T19:11:55.817Z",
        "options": [
            {
                "id": 3247,
                "text": "Bike",
                "votes": 0
            },
            {
                "id": 2666,
                "text": "Elliptical",
                "votes": 0
            },
            {
                "id": 339,
                "text": "Rower",
                "votes": 0
            }
        ]
    },
      {
        id: "3",
        text: "First Question first child",
        username: "Luciana",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        text: "Second Question second child",
        username: "Luciana",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        "id": 5,
        "text": "What should I eat today? #flocks pizza, pasta, salad",
        "parentId": null,
        "userId": "2",
        "username": "Luciana",
        "createdAt": "2023-01-06T18:53:58.120Z",
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
            {
                "id": 8409,
                "text": "lu",
                "votes": 0
            },
            {
                "id": 6664,
                "text": "luciana123_2002",
                "votes": 0
            }
        ]
    },
    {
      "id": 6,
      "text": "I have one hour to do exercises right now. Should I go on a bike ride or a long walk? #flocks Indoor Biking, Walk",
      "parentId": null,
      "userId": "2",
      "username": "Luciana",
      "createdAt": "2023-01-06T19:19:05.953Z",
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
  }
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