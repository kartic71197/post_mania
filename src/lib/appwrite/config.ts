import { Client, Account, Databases, Storage, Avatars } from 'appwrite';
export const appwriteConfig = {
    // projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    // url: import.meta.env.VITE_APPWRITE_URL,
    // databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
    // storageId:import.meta.env.VITE__APPWRITE_STORAGE_ID,
    // userCollectionId:import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    // savesCollectionId:import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    // postCollectionId:import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
    projectId : '65a8c47c722f61e6e04d',
    url:'https://cloud/appwrite.io/v1',
    databaseId:'65a8fb12f0b17e6dc04c',
    storageId:'65a8facef280b2fa12be',
    userCollectionId:'65a8fb75ea3be04a475f',
    savesCollectionId:'65a8fb95527453ea12ea',
    postCollectionId:'65a8fb586a73a5b010bc',
}

export const client = new Client();
export const account = new Account(client);

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

