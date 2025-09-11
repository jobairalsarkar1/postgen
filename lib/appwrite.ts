import { Client, Account, Databases, OAuthProvider } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);

export const loginWithOAuth = async (provider: 'google' | 'github') => {
    try {
        await account.createOAuth2Session(
            provider === 'google' ? OAuthProvider.Google : OAuthProvider.Github,
            `${process.env.NEXT_PUBLIC_BASE_URL}/chat`,
            `${process.env.NEXT_PUBLIC_BASE_URL}/sign-in`,
        )
        
    } catch (error) {
        console.error("OAuth Login Failed", error)
    }
}

export const getCurrentUser = async () => {
    try {
        const session = await account.getSession('current');
        if (!session) return null;
        const user = await account.get();
        return {session, user};
    } catch (error) {
        console.error('Failed to fetch current user: ', error);
        return null;
    }
}

export const logout = async () => {
    try {
        await account.deleteSession('current');
    } catch (error) {
        console.error("Logout failed: ", error)
    }
}

export { client, account, databases };
