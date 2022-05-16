
# Onion Architecture (DDD)


## Introduction


This architecture solves the tight **coupling** and **separation of concerns** that raises when the application grows. Based on the **inversion of control** & **dependency inyection** pattern, using **OOP**. Introduced by **Jeffrey Palermo** to provide a **cleaner solution** when it comes to **build better application** in the sense of better **testability**, **maintainability**, and **dependability**, solving the challenges of the **n-tier** & **3-tier** architectures.


## Layers


![ONION ARQ(4)](https://herbertograca.files.wordpress.com/2018/11/070-explicit-architecture-svg.png)

The architecture it's divided into **4 layers**, each of them represents a **specific responsability** that are interfacing each other, **coupling inwards** to the **core** that represents the **Domain Entity**.

## Services Layer


This layer handles the external services, such as external API's, Repositories ( SQL, noSQL ), Buckets, Queues, etc. 
Defining comunication between the **domain entities** and the **business logic**, creating an abstraction of this, adding classes to provide the **behaviours**, usually to handle all the logic of the connection between them and the delegation of this,  as a service to be **inyected**. 
To resumee this is the **data access layer**, where we define the queries, to map the data from the source to the business entity.

## Application Layer

This layer it's a bridge between the **infrastructure** layer & the **domain** layer, inyecting the external services into the domain. It doens't hold any business or infrasture logic.

## Domain Services Layer

This layers contains the all the **business logic** for an **Entity** implementing the **infrastructure as a dependency inyection**. It's the communication layer between the **application** and the **domain**.

## Domain Entities Layer

This layer it's the **core** of the architecture, defining the contract of the domain, holding the **Domain Entity Object**, this domain entities doens't have any dependencies.