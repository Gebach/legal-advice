import { CheckCircleOutline } from '@mui/icons-material'
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { ListIconComponentProps } from '../../model/types'

function ListIconComponent({
  items,
  title,
  classname,
  icon = <CheckCircleOutline sx={{ fontSize: 32, color: 'secondary.light' }} />,
}: ListIconComponentProps) {
  return (
    <Box className={classname}>
      {title && (
        <Typography variant="h4" className="mb-6 font-semibold">
          {title}
        </Typography>
      )}
      <List>
        {items.map(i => (
          <ListItem key={Math.random()} className="px-0 my-2 gap-2" alignItems="flex-start">
            <ListItemIcon className="m-0">{icon}</ListItemIcon>
            <Box>
              {i.title && (
                <Typography variant="h5" className="mb-4 font-semibold">
                  {i.title}
                </Typography>
              )}
              <ListItemText primary={i.content} className="m-0" />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ListIconComponent
