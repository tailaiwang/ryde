const apiBaseUrl = "http://localhost:5000";

//gets all Activities
export const getActivities = (onSuccess) => {
  try {
    const getActivitiesReq = {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
    fetch(apiBaseUrl + "/getActivities", getActivitiesReq)
      .then((response) => response.json())
      .then((data) => onSuccess(data));
  } catch (err) {
    console.log(`Error on getActivities: ${err}`);
  }
};

//gets Activities by ID
export const getActivityById = (onSuccess, activityId) => {
  try {
    const getActivityByIdReq = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        activityId: activityId,
      }),
    };
    fetch(apiBaseUrl + "/getActivityById", getActivityByIdReq)
      .then((response) => response.json())
      .then((data) => onSuccess(data));
  } catch (err) {
    console.log(`Error on getActivityById: ${err}`);
  }
};

//gets Activity by Title
export const getActivityByTitle = (onSuccess, title) => {
  try {
    const getActivityByTitleReq = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        name: name,
      }),
    };
    fetch(apiBaseUrl + "/getActivityByTitle", getActivityByTitleReq)
      .then((response) => response.json())
      .then((data) => onSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

// CREATE NEW ACTIVITY
export const createActivity = (
    onSuccess, 
    creatorId,
    title,
    type,
    distance,
    time,
    music,
    stats,
    others
    ) => {
    try {
      const createActivityReq = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          creatorId: creatorId,
          title: title,
          type: type,
          distance: distance,
          time: time,
          music: music,
          stats: stats,
          others: others
        }),
      };
      fetch(apiBaseUrl + "/createActivity", createActivityReq)
        .then((response) => response.json())
        .then((data) => onSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
  
  // UPDATE ACTIVITY BY ID
  export const updateActivity = (
    onSuccess, 
    creatorId,
    title,
    type,
    distance,
    time,
    music,
    stats,
    others,
    activityId
  ) => {
    try {
      const updateActivityReq = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
            creatorId: creatorId,
            title: title,
            type: type,
            distance: distance,
            time: time,
            music: music,
            stats: stats,
            others: others,
            activityId: activityId
        }),
      };
      fetch(apiBaseUrl + "/updateActivity", updateActivityReq)
        .then((response) => response.json())
        .then((data) => onSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
  
  // DELETE ACTIVITY BY ID
  export const deleteActivity = (onSuccess, activityId) => {
    try {
      const deleteActivityReq = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          activityId: activityId,
        }),
      };
      fetch(apiBaseUrl + "/deleteActivity", deleteActivityReq)
        .then((response) => response.json())
        .then((data) => onSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
  