## Ryde API

### Users
- Object_ID (MongoDB Id)
- name (String)
- bio (String)
- primarySport (String)
- ownActivities (Array of MongoDB IDs)
- otherActivities (Array of MongoDB IDs)

### Activities
- Object_ID (MongoDB Id)
- creatorId (MongoDB Id) of User who created Activity)
- title (String)
- type (String)
- distance (Double)
- time (Integer)
- music (String)
- stats (Array of Strings)
- others (Array of MongoDB Ids of other users on Activity)
