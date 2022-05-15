import { $host } from './index'

export const getCards = async () => {
  const { data } = await $host.get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')

  return data
}
