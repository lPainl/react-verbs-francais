export const Request = async (endpoint: string): Promise<any> => {
  const fetchResponse = await fetch(endpoint)
  const response = await fetchResponse.json()
  return response
}
