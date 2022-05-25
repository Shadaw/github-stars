export const getUser = async (user) => {
  const userFetch = fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .catch(error => error)

  const repositoriesFetch = fetch(`https://api.github.com/users/${user}/repos?per_page=4`)
    .then(res => res.json())
    .catch(error => error)

  const orgsFetch = fetch(`https://api.github.com/users/${user}/orgs?per_page=3`)
    .then(res => res.json())
    .catch(error => error)

  const response = await Promise.all([userFetch, repositoriesFetch, orgsFetch])
    .then(data => ({
      user: data[0],
      repositories: data[1],
      orgs: data[2]
    }))
    .catch(error => error)

  if(!response.user?.name) {
    return { error: true, data: response};
  }

  return { error: false, data: response};
}
