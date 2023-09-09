# Timestamp Microservice
Link: [https://fcc-timestamp-zm2u.onrender.com](https://fcc-timestamp-zm2u.onrender.com) 
## Features
This microservice return the Unix and UTC formatted timestamps with input of:
- Unix 
- Date string
    - Date string (2015-12-15) 
    - Date string with spaces (05%20October%202011)

These are returned in JSON form 
```JSON 
{
    unix: "Timestamp in unix",
    utc: "Timestamp in UTC"
}
```

If the date is invalid in any way, an error in JSON format is returned: 
```JSON
{
    error: "Invalid Date"
}
```

## Caveats 
Due to this project being hosted on [render.com](https://render.com/) with a free plan, the service spins down after inactivity.

Because of this, the service needs to be spin back up (automatically) if one wishes to use it.
