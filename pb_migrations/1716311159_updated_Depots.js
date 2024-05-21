/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  collection.name = "Usuarios"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  collection.name = "Depots"

  return dao.saveCollection(collection)
})
