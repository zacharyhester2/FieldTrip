import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import ArrowLeftSharpIcon from '@material-ui/icons/ArrowLeftSharp';

const useStyles = makeStyles({
  outer: {
    width: '100%',
    position: 'absolute',
    left: '41.25%',
  },
  root: {
    maxWidth: '17%',
    flexGrow: 1,
    backgroundColor: 'rgb(9, 11, 23)',
    // marginRight: '34%',
  },
  arrows: {
    color: 'whitesmoke',
  },
});

const ThemeStepper = ({ setStepperCount }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // console.log(earthThemes[activeStep])
  };

  useEffect(() => {
    setStepperCount(activeStep);
  }, [setStepperCount, activeStep]);

  return (
    <div className={classes.outer}>
    <MobileStepper
      variant="dots"
      steps={5}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="medium" onClick={handleNext} disabled={activeStep === 4} className={classes.arrows}>
          {theme.direction === 'rtl' ? <ArrowLeftSharpIcon id='arrows'/> : <ArrowRightSharpIcon id='arrows'/>}
        </Button>
      }
      backButton={
        <Button size="large" onClick={handleBack} disabled={activeStep === 0} className={classes.arrows}>
          {theme.direction === 'rtl' ? <ArrowRightSharpIcon id='arrows'/> : <ArrowLeftSharpIcon id='arrows'/>}
        </Button>
      }
    />
    </div>
  );
}

export default ThemeStepper;