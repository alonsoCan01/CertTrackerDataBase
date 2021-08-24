const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid"); //Random id generation
AWS.config.update({ region: "us-east-2" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const empId = uuidv4();
const certId = uuidv4();

console.log(empId);
console.log(certId);

var params = {
  TableName: "Certifications",
  Item: {
    Emp_ID: `${empId}`,
    Cert_ID: `${certId}`,
    Emp_name: "Billy Bob",
    Cert_Provider: "AWS",
    Cert_Name: "Solutions Architect",
    Date_Started: "03-02-2020",
    Date_Recieved: "",
  },
};

dynamodb.put(params, function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});

// const tempEmpId = "6f8503ce-5d02-461f-a27c-292aea1ef378";
// const tempCertId = "6f8503ce-5d02-461f-a27c-292aea1ef378";

// var params = {
//   TableName: "Certifications",
//   Key: {
//     Emp_ID: `${tempEmpId}`,
//     Cert_ID: `${tempCertId}`,
//   },
//   UpdateExpression: "set #Date_Recieved = :Date_Received",
//   ExpressionAttributeNames: { "#Date_Recieved": "Date_Recieved" },
//   ExpressionAttributeValues: {
//     ":Date_Received": "08-31-2020",
//   },
// };

// dynamodb.update(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });
