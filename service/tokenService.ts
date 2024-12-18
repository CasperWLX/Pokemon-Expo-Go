import {saveToken, deleteToken, getToken} from './tokenFuntions'

const JWT_TOKEN_KEY = "jwtToken";
const REFRESH_TOKEN_KEY = "refreshToken";

// Save JWT Token
export async function saveJwtToken(token: string) {
	await saveToken(JWT_TOKEN_KEY, token);
}

// Save Refresh Token
export async function saveRefreshToken(token: string) {
	await saveToken(REFRESH_TOKEN_KEY, token);
}

// Retrieve JWT Token
export async function getJwtToken() {
	return await getToken(JWT_TOKEN_KEY);
}

// Retrieve Refresh Token
export async function getRefreshToken() {
	return await getToken(REFRESH_TOKEN_KEY);
}

// Delete JWT Token
export async function deleteJwtToken() {
	await deleteToken(JWT_TOKEN_KEY);
}

// Delete Refresh Token
export async function deleteRefreshToken() {
	await deleteToken(REFRESH_TOKEN_KEY);
}

// Check if the token is available
export async function isJwtTokenAvailable() {
	const token = await getJwtToken();
	return token != null;
}

// Refresh tokens if needed (e.g., refresh access token using refresh token)
export async function refreshTokens() {
	try {
		const refreshToken = await getRefreshToken();
		if (refreshToken) {
			const response = await fetch("/user/v1/refresh-token", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ refreshToken }),
			});

			if (response.ok) {
				const { accessToken, refreshToken: newRefreshToken } =
					await response.json();
				await saveJwtToken(accessToken);
				await saveRefreshToken(newRefreshToken);
			} else {
				// Handle refresh token failure, e.g., user needs to log in again
				console.error("Failed to refresh tokens.");
				await deleteJwtToken();
				await deleteRefreshToken();
			}
		}
	} catch (error) {
		console.error("Error refreshing tokens:", error);
	}
}
