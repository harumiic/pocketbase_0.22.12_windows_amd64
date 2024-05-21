/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  // remove
  collection.schema.removeField("tsxhsvgs")

  // remove
  collection.schema.removeField("lz9toubw")

  // remove
  collection.schema.removeField("4hrvlkph")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsxhsvgs",
    "name": "usuario_nom",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lz9toubw",
    "name": "password",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4hrvlkph",
    "name": "correo",
    "type": "email",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // remove
  collection.schema.removeField("f2tcbmr4")

  // remove
  collection.schema.removeField("5mk4sl5r")

  // remove
  collection.schema.removeField("kjjhlpc5")

  return dao.saveCollection(collection)
})
