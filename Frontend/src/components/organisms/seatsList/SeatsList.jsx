import React from "react";
import { Box, Typography } from '@mui/material';
import { SeatCard } from "../../molecules/seatCard/SeatCard";


const SeatList =({ selectedSeats, setSelectedSeats })=>{

  const deleteSeat = (seatNumber) => {
    setSelectedSeats(selectedSeats.filter((seat) => seat.seatNumber !== seatNumber));
  };


  return(
    <Box borderRadius='12px' padding='20px 10px' sx={{backgroundColor: 'white'}} boxShadow='3'>
      <Box>
        <Typography variant="h5">Pasajeros</Typography>
      </Box>
      <Box>
        {selectedSeats.map((value, index) =>{
          return <SeatCard key={index} passengerNumber={index+1} seatNumber={value.seatNumber} 
                  seatPrice={value.seatPrice}  onDelete={()=> deleteSeat(value.seatNumber)}/>
        })}
      </Box>
    </Box>
  );
}

export { SeatList };