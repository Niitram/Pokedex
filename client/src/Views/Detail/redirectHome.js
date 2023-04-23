const redirectHome = (pokemonDeleted, navigate) => {
    if (pokemonDeleted) setTimeout(() => { navigate("/home") }, 2000)
}

export default redirectHome;