
import { createContext, useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const [progressCircle, setProgressCircle] = useState(true)
  Hub.listen('auth', (data) => {
    switch (data.payload.event) {
      case 'signOut':
        setUser(null)
        break
      case 'cognitoHostedUI':
        // console.log('cognitoHostedUI', data)
        break
      default:
        break
    }
  })
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'cognitoHostedUI':
          checkUser();
          break
        case 'signOut':
          setUser(null);
          break
      }
    })
    checkUser();
  }, [])
  const checkUser = async () => {
    try {
      const responseUser = await Auth.currentAuthenticatedUser()
      setUser(responseUser)
      setProgressCircle(false)
    } catch (error) {
      setUser(null)
      setProgressCircle(false)
    }
  }
  return (
    <>
      {progressCircle ? (
        'Loading'
      ) : (
        <UserContext.Provider value={{ user, setUser }}>
          {props.children}
        </UserContext.Provider>
      )}
    </>
  )
}