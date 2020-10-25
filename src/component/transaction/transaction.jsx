import React from 'react';
import classes from './transaction.module.scss';

const Transaction = ({ timeStamp, from, to, value, confirmations, hash }) => {

    return (
        <ul className={classes.field}>
            <li>
                <div><div className={classes.field_label}>timeStamp: </div>{timeStamp}</div>
                <div><div className={classes.field_label}>from: </div>{from}</div>
                <div><div className={classes.field_label}>to: </div>{to}</div>
                <div><div className={classes.field_label}>value: </div>{value}</div>
                <div><div className={classes.field_label}>confirmations: </div>{confirmations}</div>
                <div><div className={classes.field_label}>hash: </div>{hash}</div>
            </li>
        </ul>
    )
};

export default Transaction;
