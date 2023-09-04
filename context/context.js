import { createContext, useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AppContext = createContext(null)

const DetailsContext = ({ children }) => {
  const [details, setDetails] = useState(null)
  
  useEffect(() => {
    const getDetails = async () => {
      try {
        const storedData = await AsyncStorage.getItem("details")
        if (storedData) {
          setDetails(await JSON.parse(storedData))
        }
      } catch (e) {}
    }
    getDetails()
  }, [])
  
  return (
    <AppContext.Provider value = {{details, setDetails}}>
      {children}
    </AppContext.Provider>
  )
}

export default DetailsContext