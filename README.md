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
|name|string|index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups,  through:user_group
  has_many :user_group
- has_many :messages

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- belongs_to :user,  through:user_group
has_many :user_group
- has_many :messages


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|text|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group

## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group