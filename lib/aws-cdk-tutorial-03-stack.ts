import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkTutorial03Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new Table(this, 'Table', {
      partitionKey: {
        type: AttributeType.STRING,
        name: 'id'
      },
    })

    const notificationHandler = new NodejsFunction(this, 'Function', {
      environment: {
        TABLE_NAME: table.tableName
      }
    })

    table.grantReadData(notificationHandler)
  }
}
