import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CircularProgress} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { MedicalNewsAPI } from '../../store/action/API'
import ScrollDialog from './view/Dialog'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    width: 40,
    height: 40,
  }, gridList: {
    width: '100%',
  },
});

class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.MedicalNewsAPI()

  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    console.log(this.props)

    return (
      // add progress bar until the data come from database
      !this.props.isArticalReceived ?
        <CircularProgress disableShrink size={50} style={{ position: 'absolute', top: "50%", left: "50%" }} /> :
        <div className={classes.root}>
          <GridList cellHeight={600} className={classes.gridList} cols={3}>

            {this.props.Articles.map((value, key) => {
              return (

                <GridListTile key={key} >
                  <Card className={classes.card}>
                    <CardHeader
                      component="h6"
                      title={value.title}
                      subheader={value.publishedAt.slice(0, 10)}
                    />
                    <CardMedia
                      className={classes.media}
                      image={value.urlToImage}
                      title="Paella dish"
                    />
                    <CardContent>
                      <Typography component="p">
                        {value.description}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                      <span style={{ marginLeft: 'auto' }}>
                        <ScrollDialog link={value.url} content={value.content.slice(0, (value.content.length - 14))}></ScrollDialog>
                      </span>

                    </CardActions>
                  </Card>
                </GridListTile>
              )
            })}
          </GridList>
        </div>

    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    Articles: state.API.article,
    isArticalReceived: state.API.isArticalReceived
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    MedicalNewsAPI: () => dispatch(MedicalNewsAPI())
  }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(RecipeReviewCard);





//1de56e7232b74585b19b44db1c2e6d18
//https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=API_KEY
//API : https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=1de56e7232b74585b19b44db1c2e6d18