# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160602082828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.text     "title"
    t.text     "image"
    t.text     "equipment_list"
    t.text     "description"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "activities_destinations", id: false, force: :cascade do |t|
    t.integer "activity_id"
    t.integer "destination_id"
  end

  create_table "activities_users", id: false, force: :cascade do |t|
    t.integer "activity_id"
    t.integer "user_id"
  end

  create_table "destinations", force: :cascade do |t|
    t.text     "address"
    t.text     "country"
    t.text     "terrain"
    t.text     "image"
    t.text     "description"
    t.text     "title"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.float    "longitude"
    t.float    "latitude"
  end

  create_table "destinations_users", id: false, force: :cascade do |t|
    t.integer "destination_id"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.text     "username"
    t.text     "email"
    t.text     "image"
    t.text     "name"
    t.text     "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
