# nodejs-sls-image-resizer



## Introduction


This is a Serverless Image resizer that uses Serverless resources of AWS.

## Requirements

- NodeJS version 14.xx or greater
- Understanding Domain Driven Designs
- Serverless Framework to deploy in AWS

## How to run Locally

```
npm i

npm run start:dev
```

## How to run Lint


 ```
npm run lint

npm run lint:fix
```


## What does this repo give us ?


1. REST Endpoint `[POST] {{BASE_DOMAIN}}/dev/resizer`
2. Lambda Function that process an image with new sizes from a static list.
3. S3 Bucket in order to storage the resized image
4. Pipelines with Github Actions in order to deploy with Github Secrets into AWS
5. Infrastructure as Code using Serverless Framework
6. Swagger API Docs 2.0

## API Baselines

The API ONLY accept PNG and JPEG files

The API rejects input file bigger than 5mb

The API returns with the user 3 new images with the following dimensions
- 400x300
- 160x120
- 120x120



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

2. Note the outputs from the serverless deployment process. These contain the resource names and/or URL's that were created.

## Cleanup

1. Delete the stack
    ```bash
    sls remove
    ```
1. Confirm the stack has been deleted
    ```bash
    aws cloudformation list-stacks --query "StackSummaries[?contains(StackName,<STACK_NAME>)].StackStatus"
    ```

## Architecture

Mainly based in:

- Domain Driven Design (Eric Evans)
- Onion Architecture (Jeffrey Palermo)
- Clean Architecture (Robert C Martin)
- SOLID Principles


