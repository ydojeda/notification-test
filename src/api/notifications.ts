// Types
export type NotificationTitle = 'ALERT' | 'WARNING' | 'ERROR' | 'INFO'
export type NotificationAction = 'IGNORE' | 'CREATE_TODO' | 'DELETE'
export type NotificationInfo = {
  id: string
  title: NotificationTitle
  preview_text: string
  full_text: string
  author: string
  created: string
  read: boolean
  available_actions: NotificationAction[]
}

export const getNotifications = async (): Promise<NotificationInfo[]> => {
  return fetch('https://testau.asknice.ly/api/v1/candidate-test/mock-notifications/')
    .then((res) => {
      if (res.status === 200) {
        return res
          .json()
          .then((data) => {
            console.log('hello1', data.data)
            return data.data as NotificationInfo[]
          })
          .catch(() => {
            // Handle json decoder failure
            return []
          })
      }
      // Handle non 200 errors
      return []
    })
    .catch(() => {
      // additional error handling here
      return []
    })
}
