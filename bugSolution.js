```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("someObjectId")}, {"$inc": {"count": 10}});
```