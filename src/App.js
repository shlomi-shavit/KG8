import React, { useEffect, useState } from 'react';
import classes from './App.module.scss';
import LazyLoad from 'react-lazyload';
import axios from 'axios';

import Transaction from './component/transaction/transaction';

const Loading = () => {
  return (
    <div className={classes.transactions_loading}>
      <h5>Loading...</h5>
    </div>
  )
}

const App = () => {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.etherscan.io/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=0&endblock=99999999&sort=asc&apikey=674HFF79ZXT1VQT3AEVGIMMGCQM6M9FUMT',
      );

      setTransactions(result.data.result);
    };

    fetchData();
  }, []);
  // console.log(transactions);

  return (
    <div>

      <div className={classes.post_container}>
        {transactions.map(data => (
          <LazyLoad key={data.hash} placeholder={<Loading />}>

            <Transaction {...data} />

          </LazyLoad>
        ))}
      </div>
    </div >
  );
};

export default App;
