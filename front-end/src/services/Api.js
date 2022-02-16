import axios from "axios";
// Tell axios to send cookies on each requests
axios.defaults.withCredentials = true;

// Back end URL API
export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api";

/**
 * Log a user in
 */
export const login = async (email, password) => {
  return (await axios.post(`${API_URL}/login`, { email, password })).data;
};

/**
 * Log a user in with facebook
 */

export const facebookLogin = async () => {
  return (
    await axios.get(`${API_URL}/login/facebook/callback`),
    { withCredentials: false }
  );
};

/**
 * Returns the whole user list
 */
export const fetchUsers = async () => {
  return (await axios(`${API_URL}/users`)).data;
};

/**
 * Returns the current logged in user
 */
 export const fetchMe = async () => {
  return (await axios(`${API_URL}/users/me`)).data;
}

/**
 * Create a user in the database
 */
export const createUser = async (data) => {
  return await axios.post(`${API_URL}/register`, data);
};

/**
 * Get a user from the database with an email
 */
export const findUser = async (data) => {
  return await axios(`${API_URL}/users/find`, data);
};

/**
 * Get a user from the database with its ID
 */

export const findUserWithId = async (id) => {
  return (await axios(`${API_URL}/users/me/${id}`)).data;
};

/**
 * Update a user from the database
 */
export const updateUser = async (data) => {
  return (await axios.put(`${API_URL}/users/update`, data)).data;
};

/**
 * Get the whole tags list
 */
export const fetchTags = async () => {
  return (await axios(`${API_URL}/tags`)).data;
};
/**
 * Delete a userTag
 */
export const deleteUserTag = async (id) => {
  await axios.delete(`${API_URL}/users/me/tags/${id}`);
};

/**
 * Add a useTag
 */
export const createUserTag = async (id) => {
  await axios.put(`${API_URL}/users/me/tags/${id}`);
};

/**
 * Get a place
 */
export const fetchPlace = async (id) => {
  return (await axios(`${API_URL}/places/${id}`)).data;
};

/**
 * Get the whole events list in a place
 */
export const fetchEvents = async (id) => {
  return (await axios(`${API_URL}/places/${id}/events`)).data;
};

/**
 * Get all the places
 */

export const fetchPlaces = async () => {
  return (await axios(`${API_URL}/places/`)).data;
};

/**
 *
 * make a search
 */
export const search = async (label) => {
  return (await axios(`${API_URL}/search?label=${label}`)).data;
};
