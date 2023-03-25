import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slider from "@mui/material/Slider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

export default function NFTCard(props: any) {
  const [open, setOpen] = React.useState(false);
  const [months, setMonths] = React.useState(1);
  const [step, setStep] = React.useState(1);
  const price = 0.6367; // replace with actual price of NFT

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setMonths(1);
    if (step === 2) {
      setStep(1);
    }
    setOpen(false);
  };

  const handleFinish = () => {
    // Mint the NFT insurance contract
    setOpen(false);
  };

  const handleSliderChange = (event: any, newValue: any) => {
    setMonths(newValue);
  };

  const handleContinue = () => {
    setStep(2);
  };

  function Progress({ step }: any) {
    return (
      <Box
        position="absolute"
        top={0}
        right={0}
        m={2}
        display="flex"
        alignItems="center"
      >
        <Typography variant="body1" color="text.secondary">
          Step {step} of 2
        </Typography>
      </Box>
    );
  }

  function getCost(months: number): number {
    let usedRate: number;
    const maxRate = 0.01;
    if (months >= 6 && months < 12) {
      usedRate = maxRate * 0.7;
    } else if (months >= 12 && months < 18) {
      usedRate = maxRate * 0.5;
    } else if (months >= 18) {
      usedRate = maxRate * 0.3;
    } else {
      usedRate = maxRate;
    }
    return usedRate;
  }

  const cost = (months * getCost(months)).toFixed(4);
  // const cost = (months * (price * 0.004)).toFixed(4); // calculate the cost based on months and price
  const termsAndConditions = `
    Terms and Conditions:

    1. By purchasing insurance for your NFT, you agree to the terms and conditions set forth by the insurer.
    2. The insurer is not responsible for any loss or damage to the insured NFT.
    3. The insured NFT must remain in the possession of the policy holder for the duration of the insurance period.
    4. The insurer reserves the right to modify the terms and conditions of this insurance policy at any time.

    By clicking 'Finish', you acknowledge that you have read, understood, and agree to be bound by the Terms and Conditions of Insure-a-bag. 
    You confirm that you are entering into this insurance policy with full knowledge of the associated risks, and accept all terms pertaining to coverage, claims, 
    and policy administration as outlined in the Insure-a-bag Terms and Conditions.
  `;

  return (
    <Card
      className="card"
      sx={{
        bgcolor: "#0D1A2D",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        height: "300px",
        width: "275px"
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        align="center"
        width="100%"
        color="#FAFFFF"
        height="15%"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      >
        <b>{props.title}</b>
      </Typography>
      <CardMedia
        sx={{
          width: "80%",
          height: "60%",
          margin: "0px auto",
          border: "1px solid #ff7f50"
        }}
        component="img"
        image={props.image}
      />
      <Box m={1} display="flex" justifyContent="space-between">
        <CardContent>
          <Typography
            variant="body1"
            color="#55FFEE"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "0.25rem" }}>{props.price}</span>
              <FontAwesomeIcon icon={faEthereum} color="#55FFEE" />
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              bgcolor: "#ff7f50",
              color: "#FAFFFF",
              "&:hover": {
                bgcolor: "#ff7f50"
              }
            }}
            variant="contained"
            size="large"
            onClick={handleClickOpen}
          >
            Insure
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Insure NFT: {props.title}</DialogTitle>
            <DialogContent>
              <Progress step={step} />
              {step === 1 ? (
                <div>
                  <Typography variant="body1" color="text.secondary">
                    Select the number of months you want to insure your NFT for:
                  </Typography>
                  <Box
                    m={1}
                    display="flex"
                    justifyContent="space-between"
                    height="25%"
                  >
                    <Slider
                      value={months}
                      min={1}
                      max={36}
                      step={1}
                      onChange={handleSliderChange}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ alignSelf: "center" }}
                  >
                    months: {months}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Cost: {cost} ETH
                  </Typography>
                </div>
              ) : (
                <div>
                  <Typography variant="subtitle1" color="text.primary">
                    Terms and Conditions:
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {termsAndConditions}
                  </Typography>
                  <br />
                  <Typography variant="body1" color="text.secondary">
                    Duration: {months} {months === 1 ? "month" : "months"}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Cost: {cost} ETH
                  </Typography>
                </div>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              {step === 1 ? (
                <Button onClick={handleContinue}>Continue</Button>
              ) : (
                <Button onClick={handleFinish}>Finish</Button>
              )}
            </DialogActions>
          </Dialog>
        </CardActions>
      </Box>
    </Card>
  );
}