const AWS = require("aws-sdk");
//const { v4: uuidv4 } = require("uuid");
AWS.config.update({ region: "us-east-2" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

//const certId = uuidv4();

//Add item to table

var params = {
  TableName: "alchemy-certifications",
  Item: {
    Email: "bob.baker@neudesic.com",
    Cert_Name: "Solutions Architect",
    Emp_Name: "Bob Baker",
    Cert_Provider: "AWS",
    Date_Recieved: ["2020-12-20"],
    Date_Expired: ["2023-12-20"],
  },
};

dynamodb.put(params, function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});

//Update item attributes

// const tempEmpId = "6f8503ce-5d02-461f-a27c-292aea1ef378";
// const tempCertId = "6f8503ce-5d02-461f-a27c-292aea1ef378";

//Update w/list append

// var params = {
//   TableName: "alchemy-certifications",
//   Key: {
//     Email: "joe.schmoe@neudesic.com",
//     Cert_Name: "AZ-900",
//   },
//   UpdateExpression:
//     "SET #dateRecieved = list_append(#dateRecieved, :Date_Received)", //"set #Date_Recieved = :Date_Received",
//   ExpressionAttributeNames: { "#dateRecieved": "Date_Recieved" },
//   ExpressionAttributeValues: {
//     ":Date_Received": ["2020-12-06"],
//   },
// };

// var params = {
//   TableName: "alchemy-certifications",
//   Key: {
//     Email: "joe.schmoe@neudesic.com",
//     Cert_Name: "AZ-900",
//   },
//   UpdateExpression:
//     "SET #dateExpired = list_append(#dateExpired, :Date_Expired)", //"set #Date_Expired = :Date_Expired",
//   ExpressionAttributeNames: { "#dateExpired": "Date_Expired" },
//   ExpressionAttributeValues: {
//     ":Date_Expired": ["2021-05-06"],
//   },
// };

// dynamodb.update(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });
