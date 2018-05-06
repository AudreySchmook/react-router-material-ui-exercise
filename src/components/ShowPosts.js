import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class ShowPosts extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructing show posts")
  }

  componentWillReceiveProps() {
    console.log("show posts props")
  }

  

  render() {

    const postsHtml = this.props.posts.map(elem => {
      return (
        <div className='post'>
        <Card className="post-paper">
        <CardHeader
          title={elem.title}
          subtitle={elem.author}
        />
        <CardText>
          {elem.body}
        </CardText>
        </Card>
        </div>
      )
    })
    return (
      <div>
      {postsHtml}
      </div>
    )
  }
}

export default ShowPosts;
