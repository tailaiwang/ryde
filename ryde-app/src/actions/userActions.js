const apiBaseUrl = "http://localhost:5000";

//gets all Users
export const getUsers = (onSuccess) => {
  try {
    const getUsersReq = {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
    fetch(apiBaseUrl + "/getUsers", getUsersReq)
      .then((response) => response.json())
      .then((data) => onSuccess(data));
  } catch (err) {
    console.log(`Error on getUsers: ${err}`);
  }
};

//gets Users by ID
export const getUserById = (onSuccess, userId) => {
  try {
    const getUserByIdReq = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    fetch(apiBaseUrl + "/getUserById", getUserByIdReq)
      .then((response) => response.json())
      .then((data) => onSuccess(data));
  } catch (err) {
    console.log(`Error on getUserById: ${err}`);
  }
};

//gets Users by Name
export const getUserByName = (onSuccess, name) => {
  try {
    const getUserByNameReq = {
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
    fetch(apiBaseUrl + "/getUserByName", getUserByNameReq)
      .then((response) => response.json())
      .then((data) => onSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

// CREATE NEW USER
export const createUser = (onSuccess, name, bio, primarySport) => {
    try {
      const createUserReq = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          name: name,
          bio: bio,
          primarySport: primarySport,
          ownActivities: [],
          otherActivities: []
        }),
      };
      fetch(apiBaseUrl + "/createUser", createUserReq)
        .then((response) => response.json())
        .then((data) => onSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
  
  // UPDATE USER BY ID
  export const updateUser = (
    onSuccess,
    userId,
    name,
    bio,
    primarySport,
    ownActivities,
    otherActivities
  ) => {
    try {
      const updateUserReq = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          name: name,
          bio: bio,
          primarySport: primarySport,
          ownActivities: ownActivities,
          otherActivities: otherActivities,
          userId: userId
        }),
      };
      fetch(apiBaseUrl + "/updateUser", updateUserReq)
        .then((response) => response.json())
        .then((data) => onSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
  
  // DELETE USER BY ID
  export const deleteUser = (onSuccess, userId) => {
    try {
      const deleteUserReq = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          userId: userId,
        }),
      };
      fetch(apiBaseUrl + "/deleteUser", deleteUserReq)
        .then((response) => response.json())
        .then((data) => onSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
  