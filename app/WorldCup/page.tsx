const WorldCupPage = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    return <h1>World Cup</h1>
}

export default WorldCupPage;