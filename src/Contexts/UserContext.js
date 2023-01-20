
import React, { createContext, useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const [progressCircle, setProgressCircle] = useState(true)
  Hub.listen('auth', (data) => {
    switch (data.payload.event) {
      case 'signIn':
        console.log('auth event signed in');
        break;
      case 'signOut':
        setUser(null);
        console.log('auth event signed out');
         Auth.signOut();
        break
      case 'cognitoHostedUI':
         console.log('cognitoHostedUI', data)
        break
      default:
        break
    }
  })
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          console.log('auth event signed in - useeffect');
          break;
        case 'cognitoHostedUI':
          checkUser();
          break
        case 'signOut':
          setUser(null);          
          break;
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
  const values = React.useMemo(() => ({ user,setUser }), [user]);
  return (
    <>
    
      {progressCircle ? (
        'Loading'
      ) : (
       
      <UserContext.Provider value={values}>{props.children}</UserContext.Provider>

        // <UserContext.Provider value={{ user, setUser }}>
        //   {props.children}
        // </UserContext.Provider>
      )}
    </>
  )
}

export const useUser = () => {
  const context = React.useContext(UserContext);
  
  if(context === undefined) {
    throw new Error('`useUser` hook must be used within a `UserProvider` component');
  }
  return context;
};