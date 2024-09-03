import { Box } from "@mui/material";
import { styled } from "@mui/system";


// this is way when we want to use css again for components
const FlexBetween = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})

export default FlexBetween;