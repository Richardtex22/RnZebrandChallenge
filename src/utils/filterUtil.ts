import { User } from "../components/UserCard";

/**
 * Filters an array of User objects by a text query.
 * @param users - The array of User objects to filter.
 * @param query - The text query to filter by.
 * @returns A new array of User objects that match the query.
 */
export const filterUsersByQuery = (users: User[], query: string): User[] => {
  const lowerCaseQuery = query.toLowerCase();

  return users.filter(user => 
    user.login.toLowerCase().includes(lowerCaseQuery)
  );
};