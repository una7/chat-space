# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Chat Space DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :group
- has_many :message

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|

### Association
- belongs_to :user
- has_many :message


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group