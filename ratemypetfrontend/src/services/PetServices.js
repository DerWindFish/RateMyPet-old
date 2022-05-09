import Client from './api'

export const GetUser = async (data) => {
    try {
        const res = await Client.get(`api/users/${data}/`)
        return res.data
    } catch (error) {
      throw error        
    }
}

export const GetAllPets = async () => {
    try {
        const res = await Client.get('api/pets/')
        return res.data
    } catch (error) {
        throw error
    }
}