import './App.css';
import Details from './Details';
import List from './List';
import { useState } from 'react';
import useJsonFetch from './useJsonFetch';

function App() {


  const [userId, setUserId] = useState([]);


  const fetchList = (url, setState) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setState(data))
  }

  const [dataList, loading, error] = useJsonFetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', 0);

  const SelectListItemHandler = (user) => {
    setUserId(user);
  };

  const [data, loading2, error2] = useJsonFetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/', userId);
  console.log('ffff  ' + userId);

  return (
    <div className="App">
      <List dataList={dataList} onSelectListItem={SelectListItemHandler} />
      <Details data={data} />
    </div>
  );
}

export default App;
