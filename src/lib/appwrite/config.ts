import {Client,Account,Databases,Storage,Avatars} from 'appwrite';


export const appwriteConfig = {
    ProjectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_ENDPOINT,
}

export const client = new Client();

client.setProject(appwriteConfig.ProjectId);
client.setEndpoint(appwriteConfig.url); 




export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);