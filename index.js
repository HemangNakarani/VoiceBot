const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const dialogflow = require("@google-cloud/dialogflow").v2beta1;

// Dot env config for environmental variables
require("dotenv").config();

const PROJECT_ID = process.env.PROJECT_ID;
const NODE_ENV = process.env.NODE_ENV;
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// CORS
app.use(cors()); // Enable All CORS Requests
app.use("",express.static(__dirname))
app.use(express.json())

const server = http.createServer(app);
const sessionClient = new dialogflow.SessionsClient({
  projectId:PROJECT_ID,
  credentials:CREDENTIALS
});

app.post("/chat", async (req, res) => {
  const { sessionId, query } = req.body;

  const languageCode = "en-US";


  //Define session path
  const sessionPath = sessionClient.projectAgentSessionPath(
    PROJECT_ID,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
    queryParams: {
      sentimentAnalysisRequestConfig: {
        analyzeQueryTextSentiment: true,
      },
    },
  };

  // Send request and log result
  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    if (NODE_ENV === "development") {
      console.log("Detected intent");
      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);
      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
      } else {
        console.log("  No intent matched.");
      }
      if (result.sentimentAnalysisResult) {
        console.log("Detected sentiment");
        console.log(
          `  Score: ${result.sentimentAnalysisResult.queryTextSentiment.score}`
        );
        console.log(
          `  Magnitude: ${result.sentimentAnalysisResult.queryTextSentiment.magnitude}`
        );
      } else {
        console.log("No sentiment Analysis Found");
      }
    }

    res.status(200).json({ message: result.fulfillmentText });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: e,
    });
  }
});

// If request is able pass till here, route was not found. => Send 404 error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Handle all the previous errors (including 404 and others)
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.PORT || 4848;

server.listen(port, () => {
  console.log(
    `Server is running in ${NODE_ENV} mode on port ${port}...`
  );
});
