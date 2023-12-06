## Installation

$ npm install

## For start project

$ npm run start:dev;

## NEW Project Setup

$ npm i -g @nestjs/cli
$ nest new book
$ cd book
$ npm install --save @nestjs/typeorm typeorm pg
$ nest g res user

$ npm i --save class-validator class-transformer

create database book;
CREATE TABLE book ( id SERIAL PRIMARY KEY, book_name VARCHAR(100),author VARCHAR(100),delete_status BOOLEAN DEFAULT true,created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP default current_timestamp);

## Project setup as per following link

https://medium.com/simform-engineering/nestjs-and-postgresql-a-crud-tutorial-32aa78778752