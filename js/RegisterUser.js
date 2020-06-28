const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
AWS.config.update({region: 'us-east-1'});

exports.handler = (event, context, callback) => {
    const body = JSON.parse(event.body);
    const email = body.email;
    const username = body.username;
    const password = body.password;

    const params = {
        TableName: 'Users',
        Item: {
            userId: {S: email},
            email: {S: email},
            username: {S: username},
            password: {S: password}
        }
    }

    ddb.putItem(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
        }
    });
}