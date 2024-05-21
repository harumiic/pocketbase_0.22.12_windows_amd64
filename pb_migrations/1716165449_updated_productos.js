/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  collection.name = "usuarios"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  collection.name = "productos"

  return dao.saveCollection(collection)
})
