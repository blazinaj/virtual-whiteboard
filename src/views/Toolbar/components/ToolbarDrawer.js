import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Delete, GridOff, GridOn, Save} from "@material-ui/icons";
import CanvasDraw from "../../../RCD";
import Fab from "@material-ui/core/Fab";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import ListWhiteBoards from "../../WhiteBoard/components/ListWhiteBoards";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {API, graphqlOperation} from "aws-amplify";
import {createCanvas} from "../../../graphql/mutations";
// import {AmplifyChatbot} from "@aws-amplify/ui-react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const ToolbarDrawer = (
  {
    body,
    selectedColor,
    setSelectedColor,
    colors,
    hideGrid,
    setHideGrid,
    clear,
    brushRadius,
    setBrushRadius,
    selectedId,
    setSelectedId,
    canvas
  }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [openInput, setOpenInput] = useState(false);

  const [newID, setNewID] = useState("");

  const saveID = (e) => {
    // Create the canvas. If canvas is already created, retrieve the data & draw previous canvas
    API.graphql(graphqlOperation(createCanvas, { input: canvas }))
      .then(d => console.log('canvas created :', d))
      .catch(err => {console.log(err)});
    e.stopPropagation();
    setSelectedId(newID);
    setNewID("");
    setOpenInput(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [saveMenuIsOpen, setSaveMenuIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{backgroundColor: "#607d8b"}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Whiteboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <FormControl className={classes.formControl}>
                <Select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  {
                    colors.map((color, index) =>
                      <MenuItem value={color} key={index}><BorderColorIcon style={{color}}/></MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </ListItemIcon>
            <ListItemText primary="Color" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FormControl className={classes.formControl}>
                <Select
                  value={brushRadius}
                  onChange={(e) => setBrushRadius(e.target.value)}
                >
                  {
                    [2, 4, 8, 16, 32, 64].map((value, index) =>
                      <MenuItem value={value} key={index}>
                        {value}
                      </MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </ListItemIcon>
            <ListItemText primary="Brush Size" />
          </ListItem>
          <ListItem button onClick={() => setHideGrid(!hideGrid)}>
            <ListItemIcon>
              {
                hideGrid ? <GridOff/> : <GridOn/>
              }
            </ListItemIcon>
            <ListItemText primary="Grid" />
          </ListItem>

          {/*<AmplifyChatbot*/}
          {/*  botName="yourBotName"*/}
          {/*  botTitle="My ChatBot"*/}
          {/*  welcomeMessage="Hello, how can I help you?"*/}
          {/*/>*/}
        </List>
      </Drawer>
      <main className={classes.content}>
        {React.cloneElement(body)}
      </main>
      <Fab
        onClick={(e) => {e.stopPropagation(); setSaveMenuIsOpen(true)}}
        color="primary"
        style={{
          position: "absolute",
          right: "3em",
          top: "5em"
        }}
      >
        <Save />
      </Fab>
      <Drawer anchor="right" open={saveMenuIsOpen} onClose={() => setSaveMenuIsOpen(false)}>
        <div
          className={clsx(classes.list, {
            [classes.fullList]: true,
          })}
        >
          <List>
            {
              openInput ?
                <ListItem>
                  <Input value={newID} onChange={(e) => setNewID(e.target.value)} />
                  <Button
                    onClick={(e) => saveID(e)}
                  >
                    Save
                  </Button>
                </ListItem>
                :
                <ListItem button onClick={(e) => {e.stopPropagation(); setOpenInput(true)}}>
                  <ListItemIcon>
                    <Save/>
                  </ListItemIcon>
                  <ListItemText primary="Create a Whiteboard" />
                </ListItem>
            }
            <ListItem button onClick={() => clear()}>
              <ListItemIcon>
                <Delete/>
              </ListItemIcon>
              <ListItemText primary="Clear this whiteboard" />
            </ListItem>
          </List>
          <Divider/>
          <ListWhiteBoards selectedId={selectedId} setSelectedId={setSelectedId}/>
        </div>
      </Drawer>
    </div>
  );
};

export default ToolbarDrawer;