import './App.css';

function App() {

  const data = 'SOME DATA'

  function fetchData(data) {
    console.log(data)
    fetch('https://test-ruokaserver.vercel.app/api', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({data: data})
    })
    .then(response => response.json())
    .then(responseData => {
      console.log('Server response:', responseData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="App">
      <button onClick={() => fetchData(data)}>
        Submit
      </button>
    </div>
  );
}

export default App;
