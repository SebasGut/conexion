import App from "./src/config/App.js";

const app = new App(8000);

app.listen();

/**
 * const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:8000/api/students/list",
    })
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div>
      <header>Sebas</header>
      <main>
        {data ? <p>{JSON.stringify(data)}</p> : <p>.l.</p>}
        {error && <p>{JSON.stringify(error)}</p>}
      </main>
    </div>
  );
};

export default App;

 */
