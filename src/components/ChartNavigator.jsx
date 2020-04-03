import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// const useStyles = makeStyles({
//   root: {
//     width: 1000,
//   },
// });

export default function ChartNavigator({ setChart }) {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setChart(newValue)
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Pie Chart" icon={<PieChartIcon />} />
      <BottomNavigationAction label="Bar Chart" icon={<BarChartIcon />} />
    </BottomNavigation>
  );
}
