import { Box, Fab } from '@mui/material'
import { useState } from 'react'
import { Check, Save} from '@mui/icons-material'
import { green } from '@mui/material/colors'
import CircularProgress from '@mui/material/CircularProgress';

const UserActions = ({params, rowId, setRowId}) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess ] = useState(true)


  return (
    <Box
      sx={{
        m:1,
        position: 'relative'
      }}
    >
      {success ? (
        <Fab
        color='primary'
        sx={{
          width:40,
          height:40,
          bgcolor:green[500],
          '&:hover':{bgcolor: green[700]}

        }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
        color='primary'
        sx={{
          width:40,
          height:40,
        }}
        disabled={params.id !== rowId || loading}


        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress 
        size={52}
        sx={{
          color:green[500],
          position:'absolute',
          topic:-6,
          left:-6,
          zIndex:1
        }}
      />
      )}
    </Box>
  )
}

export default UserActions