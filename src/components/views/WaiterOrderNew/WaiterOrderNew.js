// import React from 'react';
// import style from './WaiterOrderNew.module.scss';

// const WaiterOrderNew = () => {
//   return (
//     <div className={style.component}>
//       <h2>
//       WaiterOrderNew view
//       </h2>
//     </div>
//   );
// };

// export default WaiterOrderNew;

import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const demoMenu = [
  { name: 'pizza margheritta', price: '5' },
  { name: 'ravioli anatra', price: '7' },
];

class WaiterOrderNew extends React.Component {
  static propTypes = {
    fetchMenu: PropTypes.func,
    product: PropTypes.any,
    
   
  }
  componentDidMount(){
    const { fetchMenu} = this.props;
    fetchMenu();
  }

  render() {
    const { product} = this.props;
    console.log(product);
    return (
      <Paper className={styles.component}>
        <h2>New Order</h2>
        <div className={styles.order}>
          <div className={styles.table}>
            <div className={styles.body}>
              {demoMenu.map(row => (
                <div className={styles.menuRow} key={row.name}>
                  <div className={styles.position}>
                    {row.name}
                    {' '}
                    {row.price}$
                  </div>
                  <Button className={styles.optionButtons}>edit</Button>
                  <Button className={styles.optionButtons}>delete</Button>
                </div>
              ))}
              <Button className={styles.addInMenu}>+add</Button>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.tableOption}>
              <p>Table</p>
              <Select
                id="select-table"
                value=""
              >
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
                <MenuItem>4</MenuItem>
                <MenuItem>5</MenuItem>
                <MenuItem>6</MenuItem>
                <MenuItem>7</MenuItem>
              </Select>
            </div>
            <div className={styles.cost}>
              <p>Cost</p>
            12$
            </div>
          </div>
        </div>
        <div className={styles.foot}>
          <Button className={styles.addOrder}>Submit</Button>
        </div>
      </Paper>
    );
  }
}
export default WaiterOrderNew;