const StandingPage = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data1 = await fetch('https://jsonplaceholder.typicode.com/blogs');
    const data2 = await fetch('https://jsonplaceholder.typicode.com/news');

    return (
        <h1>Standing Page</h1>
    )
}

export default StandingPage;