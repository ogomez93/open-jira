import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Draft']

export const Sidebar = () => {
  return (
    <Drawer
      anchor='left'
      open={true}
      onClose={() => console.log('closing')}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menu</Typography>
        </Box>

        <List>
          { menuItems.map((text, index) => (
            <ListItemButton key={text}>
              <ListItemIcon>
                { index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          )) }
        </List>

        <Divider />

        <List>
          { menuItems.map((text, index) => (
            <ListItemButton key={text}>
              <ListItemIcon>
                { index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          )) }
        </List>
      </Box>
    </Drawer>
  )
}
