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

export type ResponseBase = {
  success: boolean
  message: string
}
export type NotificationsReturn = ResponseBase & {
  data: NotificationInfo[]
}

export const getNotifications = async (): Promise<NotificationsReturn> => {
  const returnValue = {
    success: false,
    message: '',
    data: []
  } as NotificationsReturn
  return fetch('https://testau.asknice.ly/api/v1/candidate-test/mock-notifications/')
    .then((res) => {
      if (res.status === 200) {
        return res
          .json()
          .then((jsonRes) => {
            returnValue.success = true
            returnValue.data = jsonRes.data
            return returnValue
          })
          .catch(() => {
            returnValue.message = 'Failed to decode notifications.'
            return returnValue
          })
      }
      // handle non-200
      returnValue.message = 'Failed to load notifications.'
      return returnValue
    })
    .catch(() => {
      // handle failed requeset
      returnValue.message = 'Failed to load notifications.'
      return returnValue
    })
}
