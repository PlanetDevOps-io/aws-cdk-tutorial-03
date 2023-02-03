#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTutorial03Stack } from '../lib/aws-cdk-tutorial-03-stack';

const app = new cdk.App({
    treeMetadata: false  // Only used in this example to remove the metadata construct from the tree
});
new AwsCdkTutorial03Stack(app, 'TutorialStack', {});
