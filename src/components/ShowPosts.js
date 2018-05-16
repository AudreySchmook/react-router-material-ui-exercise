import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class ShowPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentWillReceiveProps() {
    console.log("show posts props")
  }

  render() {

    const postsHtml = this.state.posts.map(elem => {
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

  componentDidMount() {
    fetch ('http://10.206.25.26:8080/posts')
    .then(response => response.json())
    .then(posts => this.setState ({ posts: posts }))
  }

}

export default ShowPosts;
