# Data fill rules

## albums
Array of objects { year, albums }
Albums: array of album objects:
* id - album id (used to reference from events and links)
* description - title of the album (ru, en)
* src - relative path to the folder with album photos
* cover - relative path to the album cover
* date (optional) - sub description with album date (eu, en)
* files - an array of photo file names

## events
Array of event objects:
* id - id of an event
* description - event name
* date (optional) - event dates
* cover - event cover photo (object for different languages or string if one for both)
* vid - rel path to the video file
* albums - array of albums for the event, object:
    * year - album year
    * id (optional) - album id if not same as event id
    * label (optional) - to show a particular label instead of the year
* exlinks - array of external link objects:
    * app - type of link (web / vk)
    * link