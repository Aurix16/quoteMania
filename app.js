// Initial Code to Serve Static Content

var express = require('express');
var path = require('path');
var app = express();

const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')
dotenv.config()

async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jgsz2.mongodb.net/<trial>?retryWrites=true&w=majority`;
  console.log(`${process.env.DB_USER}`)
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      // Connect to the MongoDB cluster
      dbConn = client.connect(); 
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

      // Store into DB
      app.post('/pages/', function (req, res) {
        dbConn.then(function(db) {
            delete req.body._id; // for safety reasons
            console.log(req.email)
            db.collection('quotesMania.quotesUsers').insertOne(req.body);
        });    
        res.send('Data received:\n' + JSON.stringify(req.body));
    });

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};




app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );

