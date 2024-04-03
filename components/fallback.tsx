import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export default function Fallback() {
  return (
    <Backdrop sx={{ color: '#fff' }} open={true}>
      <CircularProgress color="info" />
    </Backdrop>
  )
}
