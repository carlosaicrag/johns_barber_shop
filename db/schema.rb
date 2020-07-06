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

ActiveRecord::Schema.define(version: 2020_07_06_033609) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "barbers", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "image_url"
    t.boolean "working", default: false
    t.boolean "cutting_hair", default: false
    t.index "lower((email)::text)", name: "user_lower_email_idx", unique: true
    t.index ["session_token"], name: "index_barbers_on_session_token"
  end

  create_table "client_haircut_times", force: :cascade do |t|
    t.integer "client_id", null: false
    t.integer "haircut_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "barber_id", null: false
    t.integer "avg_time", default: 45
    t.index ["barber_id"], name: "index_client_haircut_times_on_barber_id"
    t.index ["client_id", "haircut_id", "barber_id"], name: "index_on_combo_barber_client_haircut_id", unique: true
    t.index ["client_id"], name: "index_client_haircut_times_on_client_id"
    t.index ["haircut_id"], name: "index_client_haircut_times_on_haircut_id"
  end

  create_table "client_haircuts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "client_id", null: false
    t.integer "haircut_id", null: false
    t.integer "barber_id", null: false
    t.datetime "closed_at"
    t.integer "avg_time"
    t.datetime "started_haircut_time"
    t.index ["client_id"], name: "index_client_haircuts_on_client_id"
    t.index ["haircut_id"], name: "index_client_haircuts_on_haircut_id"
  end

  create_table "clients", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer "priority", default: 0, null: false
    t.integer "attempts", default: 0, null: false
    t.text "handler", null: false
    t.text "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string "locked_by"
    t.string "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority"
  end

  create_table "haircuts", force: :cascade do |t|
    t.string "haircut_name", null: false
    t.string "path", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["haircut_name"], name: "index_haircuts_on_haircut_name", unique: true
    t.index ["path"], name: "index_haircuts_on_path", unique: true
  end

end
