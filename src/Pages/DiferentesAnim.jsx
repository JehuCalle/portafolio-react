import React, {useState, useEffect} from "react";

import { Alert } from "@mui/material";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';

//ICONOS MUI  ICONOS MUI  ICONOS MUI  ICONOS MUI  ICONOS MUI
import DoneAllIcon from '@mui/icons-material/DoneAll';

import '../Css/DiferentesAnim.css';



function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function DiferentesAnim(){

  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return(
    <div>
      <div className="tituloAnim col-12">
        <label> ALERTAS CON MUI </label>
      </div>
      <div className="cuerpoAnim col-12">
        <div className="contBtnDifAnim col-3">
          <button className="estiloBtnDifAnim col-5">ejemplo 1</button>


          <div className="col-5">
          <Button className="estiloBtnDifAnim d-flex col-12" onClick={handleClick(SlideTransition)}>Boton Desplegable 5s</Button>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            key={state.Transition.name}
            autoHideDuration={5000}>
            <Alert
              variant="filled"
              severity="warning"
              icon={<DoneAllIcon color="primary" fontSize="inherit"/>}
              className="text-info border rounded-4 border-5 border-dark">
              a
            </Alert>
          </Snackbar>
          </div>


          <button className="estiloBtnDifAnim col-5">ejemplo 2</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 3</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 4</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 5</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 6</button>
        </div>
        <div className="contBtnDifAnim col-3">
          <button className="estiloBtnDifAnim col-5">ejemplo 1</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 2</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 3</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 4</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 5</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 6</button>
        </div>
        <div className="contBtnDifAnim col-3">
          <button className="estiloBtnDifAnim col-5">ejemplo 1</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 2</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 3</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 4</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 5</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 6</button>
        </div>
      </div>
    </div>
  )
};

export default DiferentesAnim;