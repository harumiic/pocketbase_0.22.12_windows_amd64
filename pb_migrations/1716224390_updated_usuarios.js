/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  collection.name = "Depots"

  // remove
  collection.schema.removeField("f2tcbmr4")

  // remove
  collection.schema.removeField("5mk4sl5r")

  // remove
  collection.schema.removeField("kjjhlpc5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frtmaikq",
    "name": "lat",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kkipu8ex",
    "name": "Ing",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ta6imiyq",
    "name": "product",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  collection.name = "usuarios"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f2tcbmr4",
    "name": "depot",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5mk4sl5r",
    "name": "vehicle",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1oy13zo9vbydof1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjjhlpc5",
    "name": "plans",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1oy13zo9vbydof1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("frtmaikq")

  // remove
  collection.schema.removeField("kkipu8ex")

  // remove
  collection.schema.removeField("ta6imiyq")

  return dao.saveCollection(collection)
})
