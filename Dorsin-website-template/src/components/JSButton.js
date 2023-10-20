// import Button from 'react-bootstrap/Button';

// export default function JSButton(){

//     return <>
//     <Button variant="danger">Danger</Button>
    
//     </>
// }

// import Button from '@mui/material/Button';
// import MicIcon from '@mui/icons-material/Mic';

// export default function JSButton( ){
//     return (<>
//     <Button   variant="outlined">test</Button>
//     </>)
// }

// export default function JSButton(props) {
//     return <button >{props.buttonValue}</button>;
//   }


export default function JSButton(props) {
        return <button  className="rounded-pill nav-btn">{props.label}</button>;
  }
  
   
  
