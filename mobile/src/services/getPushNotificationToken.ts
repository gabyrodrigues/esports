import * as Notifications from 'expo-notifications'

export async function getPushNotificationToken() {
	const { granted } = await Notifications.getPermissionsAsync()

	if(!granted) {
		await Notifications.requestPermissionsAsync()
	}

	if(granted) {
		const pushToken = await Notifications.getExpoPushTokenAsync()
		
		console.log('NOTIFICATION TOKEN =>', pushToken.data) //test this @ https://expo.dev/notifications

		return pushToken.data
	}
}