
const ApiProvider = ({ children }) => {

  const getAllUserNames = async () => {
    toast.loading('Loading User Names')
    try {

      return await TimmeyApi.getAllUserNames()
      toast.success('Loaded User Names')
    } catch (error) {

      if (error.status === 401) {
        toast.error("invalid credentials, please login again")
        Router.push('/login')
        return;
      } 

      toast.error('Failed to load User Names')
    }

  }

  const clockIn = async (username: string, password: string) => {
    toast.loading('Clocking In')
    try {
      const res = await TimmeyApi.clockIn(username, password)
      if (res.success) {
        toast.success('Clocked In')
      } else {
        if (res.status === 401) {
          toast.error("invalid credentials, please login again")
          Router.push('/login')
          return;
        }
        toast.error('Failed to Clock In')
      }

  return (
    <ApiContext.Provider value={{}}>
      {children}
    </ApiContext.Provider>
  )
}