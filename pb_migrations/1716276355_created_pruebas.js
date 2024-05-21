/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vw6c1ovi8ibf2yu",
    "created": "2024-05-21 07:25:55.587Z",
    "updated": "2024-05-21 07:25:55.587Z",
    "name": "pruebas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dln8bhrf",
        "name": "nombres",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0t1u4mav",
        "name": "edad",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vw6c1ovi8ibf2yu");

  return dao.deleteCollection(collection);
})
