/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/questions', function(req, res) {  
  let result = [{
    "id": 1,
    "text": "Just met this guy, he is so nice. He surprised me with tickets to the Cavs vs Lakers game. We live in Cleveland, Ohio so I think he is assuming I am a Cavs fan; however, I am a huge Lakers fan. Should I wear the Lakers jersey to the game or should I just go neutral - no team jersey? #flocks Cavs Jersey, No Jersey",
    "parentId": null,
    "userId": "1",
    "username": "Mary",
    "name": "Mary Thompson",
    "createdAt": "2023-01-06T19:17:18.780Z",
    "voteEndAt": "2023-01-02T19:17:18.780Z",
    "sentiment": null,
    "options": [{
            "id": 2759,
            "text": "Cavs Jersey",
            "votes": 0
        },
        {
            "id": 6193,
            "text": "No Jersey",
            "votes": 0
        }
    ],
    "tag": "",
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
    "options": [{
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
    ],
    "tag": "fitness",
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
    ],
    "tag": "nutricionist"
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
    "options": [{
            "id": 4280,
            "text": "Indoor Biking",
            "votes": 0
        },
        {
            "id": 2735,
            "text": "Walk",
            "votes": 0
        }
    ],
    "tag": "trainer"
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
    "options": [{
            "id": 2760,
            "text": "Rebook",
            "votes": 98
        },
        {
            "id": 6100,
            "text": "Refund",
            "votes": 56
        }
    ],
    "tag": "",
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
{
    "id": 6630,
    "text": "what should I have for lunch today ? #flocks brazilian food, mexican food",
    "parentId": null,
    "userId": 2,
    "username": "Luciana",
    "name": "Luciana Bruscino",
    "createdAt": "2023-01-17T03:19:48.630Z",
    "voteEndAt": "2023-01-17T03:29:48.630Z",
    "sentiment": "Positive",
    "options": [{
            "id": 5155,
            "text": "brazilian food",
            "votes": 0
        },
        {
            "id": 5175,
            "text": "mexican food",
            "votes": 0
        }
    ],
    "tag": "nutricionist",
},
];
  
  res.json({success: result, url: req.url});
});

//use oath to only return the questions that were voted by user
app.get('/questions/votes', function(req, res){

  let votes = [{
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
 ];

  res.json({success: votes, url: req.url});
});

app.get('/questions/:id/votes', function(req, res){

  let votes = [
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
  }];

  res.json({success: votes, url: req.url});
});

app.get('/questions/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/questions', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/questions/:id/votes', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/questions', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/questions/:id/votes', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/questions', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/questions/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(5000, function() {
    console.log("FlockQuestionsAPI started on port 5000 - http://localhost:5000/")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
