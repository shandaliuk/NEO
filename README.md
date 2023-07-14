
# NEO

A website to check information about near orbital objects (NEO): it represents aggregated info of the day about NEOs, beginning from the start of the month till the current day. After we reach the present day, it starts from the start of the month again.

## Challenges

- Fetch neo information.
- Fetch neo by single day.
- Aggregate daily info in four topics.
- Sort two most hazardous NEOs.
## Used technologies

- React
- React Hooks
- Vite
- TypeScript
- Axios
- Material UI
- styled-components
- Date-fns
- react-hot-toast
## API Reference

We use **Asteroids - NeoWs API** from [NASA Open API](https://api.nasa.gov/).

#### Get daily NEOs

```http
  GET /feed
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `start_date` | `YYYY-MM-DD` | Starting date for asteroid search |
| `end_date` | `YYYY-MM-DD` | Ending date for asteroid search |
| `api_key` | `string` | **Required**. Your API key |


## How to use the project

Run the development server with 'npm run dev'. Open http://localhost:5173 with your browser to see the result.
## Credits

The project was designed and developed by Kyrylo Shandaliuk: 
- Github - [@shandaliuk](https://www.github.com/shandaliuk)
- LinkedIn - [@kyrylo-shandaliuk](https://www.linkedin.com/in/kyrylo-shandaliuk)
