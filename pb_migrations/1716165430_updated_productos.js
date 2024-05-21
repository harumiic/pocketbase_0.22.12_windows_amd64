/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  // remove
  collection.schema.removeField("v3x5uxvj")

  // remove
  collection.schema.removeField("csdzd6cy")

  // remove
  collection.schema.removeField("rdttrdby")

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

  // update
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

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oy13zo9vbydof1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v3x5uxvj",
    "name": "field2",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "csdzd6cy",
    "name": "precio",
    "type": "text",
    "required": false,
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
    "id": "rdttrdby",
    "name": "link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("4hrvlkph")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsxhsvgs",
    "name": "field",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "nombre"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lz9toubw",
    "name": "file",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "imagen"
    }
  }))

  return dao.saveCollection(collection)
})
