export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Just met this guy, he is so nice. He surprised me with tickets to the Cavs vs Lakers game. We live in Cleveland, Ohio so I think he is assuming I am a Cavs fan; however, I am a huge Lakers fan. Should I wear the Lakers jersey to the game or should I just go neutral - no team jersey? #flocks Cavs Jersey, No Jersey",
        username: "Mary",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "I’d like to purchase a cardio equipment for my gym. Right now I have a blowflex, and some free weights. Which cardio machine should I get? Bike, Elliptical, Rower? #flocks Bike, Elliptical, Rower",
        username: "Luciana",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "First comment first child",
        username: "Luciana",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Second comment second child",
        username: "Luciana",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "5",
        body: "What should I eat today? #flocks pizza, pasta, salad",
        username: "Rodolfo",
        userId: "3",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "6",
        body: "I have one hour to do exercises right now. Should I go on a bike ride or a long walk? #flocks Indoor Biking, Walk",
        username: "Rodolfo",
        userId: "3",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Mary",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };