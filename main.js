const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://m001-mongodb-basics@sandbox.v4vjp.mongodb.net/myFirstDatabasetest?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();     //asynchronous process
 
        const database = client.db("lab");
        const collection = database.collection("members");
 
        const res = await collection.insertMany(
            [
              {
                name: "NURUL AAISYAH",
                matric: "B021910026",
                course:"BENR",
                cohort:"2020/2021-1"
              },
              {
                name: "NURUL ANIS BT FADZIAL",
                matric: "B021910085",
                course:"BENR",
                cohort:"2020/2021-1"
              },
              {
                name: "NUR SYAKIRAH BT TAJUDIN",
                matric: "B021910088",
                course:"BENR",
                cohort:"2020/2021-1"
              },
              {
                name: "SATES RAJ A/L JAYARAJ",
                matric: "B021910028",
                cohort:"2020/2021-1"
              },

            ]  
        );

        console.log(res)

    } catch (e) {             //exception
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