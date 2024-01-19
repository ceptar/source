const projectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;


export const PROJECT_ID = projectID;
export const DATABASE_ID = databaseID;


const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(projectID);

export const databases = new Databases(client);