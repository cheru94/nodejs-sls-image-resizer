# Civic Plus REC 2

## Introduction


This is a Serverless throttling middleware. With a Pub / Sub Architecture.

## Purpose

The intention of the middleware is to decrease the pressure for the destination. Fowarding the Request from an origin, delaying it's delivery & expose a consultive API to see the response of the destination.


## Requirements

- NodeJS version 14.xx or greater
- Understanding Domain Driven Designs
- SAM to deploy in AWS


## Architecture

Mainly based on:

- Domain Driven Design (Eric Evans)
- Onion Architecture (Jeffrey Palermo)
- Clean Architecture (Robert C Martin)
- SOLID Principles


## Folder structure


```
src
├── aggregate ( domain concept )
│     ├── domain (business layer)
│     │   ├── aggregateService.js
│     │   └── aggregateEntity.js
│     ├── infrastructure (outbound services)
│     │   └── service
│     │       └── aggregateHttpService.js
│     ├── handlers (folder with the handler function)
│     │   └── aggregate.js
│     └── utils
│         └── constants
├── package.json
├── template.yml (serverless config)
```



## Debug Locally


 ```
    npm run sqs-docker # Runs SQS with docker

    npm run offline-debug # runs the local environment with Serverless Framework
```


## Build Clouformation Stack


    sam build
    
## How to Deploy 

In this case we choosed to use SAM


1. From the command line, use AWS SAM to deploy the AWS resources for the pattern as specified in the template.yml file:
    ```
    sam deploy --guided
    ```

    Once you have run `sam deploy --guided` mode once and saved arguments to a configuration file (samconfig.toml), you can use `sam deploy` in future to use these defaults.

3. Note the outputs from the SAM deployment process. These contain the resource names and/or ARNs that were created.

## Cleanup

1. Delete the stack
    ```bash
    aws cloudformation delete-stack --stack-name STACK_NAME
    ```
1. Confirm the stack has been deleted
    ```bash
    aws cloudformation list-stacks --query "StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus"
    ```
