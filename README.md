# nodejs-sls-image-resizer



## Introduction


This is a Serverless Image resizer


## Requirements

- NodeJS version 14.xx or greater
- Understanding Domain Driven Designs
- SAM to deploy in AWS



## How to run Locally


 ```
npm run start:dev
```

## How to run Lint


 ```
npm run lint

npm run lint:fix
```


## How to manually test the funcionality 


TBD


## Architecture

Mainly based in:

- Domain Driven Design (Eric Evans)
- Onion Architecture (Jeffrey Palermo)
- Clean Architecture (Robert C Martin)
- SOLID Principles


## Folder structure


```
src
├── aggregate ( domain concept )
│     ├── domain (business layer)
│     ├── services (outbound services)
│     ├── application (folder with the handler function)
├── package.json
├── serverless.yml (serverless config)
```


## How to Deploy 

In this case we choosed to use Serverless Framework


1. From the command line, use the Serverless Framework to deploy the AWS resources for the pattern as specified in the template.yml file:
    ```
    sls deploy
    ```

3. Note the outputs from the serverless deployment process. These contain the resource names and/or URL's that were created.

## Cleanup

1. Delete the stack
    ```bash
    sls remove
    ```
1. Confirm the stack has been deleted
    ```bash
    aws cloudformation list-stacks --query "StackSummaries[?contains(StackName,<STACK_NAME>)].StackStatus"
    ```