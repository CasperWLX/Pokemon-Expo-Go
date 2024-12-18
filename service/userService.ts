import { create } from "zustand";
import util from "./clientUtils";
import * as tokenService from "./tokenService";
import userInterface from "@/interface/userInterface";

interface serviceInterface {
	loggedInUser: userInterface;
	register: (username: string, password: string) => Promise<boolean>;
	login: (username: string, password: string) => Promise<boolean>;
	logout: () => void;
	getUserInfo: () => Promise<void>;
	refreshTokens: () => Promise<boolean>;
}

const userEndpoints = "/user/v1";

const userService = create<serviceInterface>()((set) => ({
	loggedInUser: {} as userInterface,

	register: async (username, password) => {
		try {
			const response = await util.post(`${userEndpoints}/register`, {
				username,
				password,
			});
			if (response.status === 201) {
				return true;
			}
		} catch (error) {
			console.error("Failed to register");
		}
		return false;
	},

	login: async (username, password) => {
		try {
			const response = await util.post(`${userEndpoints}/login`, {
				username,
				password,
			});

			if (response.status === 200) {
				const { accessToken, refreshToken } = response.data;

				await tokenService.saveJwtToken(accessToken);
				await tokenService.saveRefreshToken(refreshToken);

				return true;
			}
		} catch (error) {
			console.error("failed to log in");
		}
		return false;
	},

	logout: async () => {
		try {
			await tokenService.deleteJwtToken();
			await tokenService.deleteRefreshToken();
			set({ loggedInUser: {} as userInterface });
		} catch (error) {
			console.error("failed to log out");
		}
	},

	getUserInfo: async () => {
		try {
			const accessToken = await tokenService.getJwtToken();
			if (!accessToken) {
				console.error("Access token not found.");
				return;
			}

			const response = await util.get(`${userEndpoints}/info`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			if (response.status === 200) {
				set({ loggedInUser: response.data });
			}
		} catch (error) {
			console.error("Can't fetch user info");
		}
	},

	refreshTokens: async () => {
		try {
			const refreshToken = await tokenService.getRefreshToken();
			if (!refreshToken) {
				console.error("No refresh token found.");
				return false;
			}

			const response = await util.post(`${userEndpoints}/refresh-token`, {
				refreshToken,
			});

			if (response.status === 200) {
				const { accessToken, refreshToken: newRefreshToken } =
					response.data;

				await tokenService.saveJwtToken(accessToken);
				await tokenService.saveRefreshToken(newRefreshToken);

				console.log("Tokens refreshed successfully.");
				return true;
			} else {
				console.error("Failed to refresh tokens.");
				return false;
			}
		} catch (error) {
			console.error("Error refreshing tokens:", error);
			return false;
		}
	},
}));

export default userService;
