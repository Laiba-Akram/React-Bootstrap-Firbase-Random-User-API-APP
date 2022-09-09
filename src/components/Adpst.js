import React from 'react';

class Adpst extends React.Component {
    constructor(props) {
     super(props);
      this.state = {
        number:'1',
        name:'gogo',
        title:'',
        views:'10',
        likes:'22',
        date:'1.1.1111'
    };
  }
    addPost(title){
      this.state.title.push(title);
      this.setState({
        post: this.state.title
      });
  }
   render() {
      return (
         <div>
            <AddPost addNew={this.addPost} />
            <table>
                <thead>
                    <Thead/>
                </thead>
                <tbody>
                    <Row number={this.state.number}
                        name={this.state.name}
                        title={this.state.title}
                        views={this.state.views}
                        likes={this.state.likes}
                        date={this.state.date}/>
                </tbody>
            </table>
         </div>
      );
   }
}
class AddPost extends React.Component{
    constructor(props) {
     super(props);
      this.state = {
        newPost: ''
     }
     this.updateNewPost = this.updateNewPost.bind(this);
  }
  updateNewPost(e){
    this.setState({newPost: e.target.value});
  }
  handleAddNew(){
    this.props.addNew(this.state.newPost);
    this.setState({newPost: ''});
  }
  render(){
    return (
        <div>
          <input type="text" value={this.state.newPost} onChange={this.updateNewPost} />
          <button onClick={this.handleAddNew}> Add Post </button>
        </div>
    );
  }
}
class Thead extends React.Component {
   render() {
      return (
        <tr>
            <td id='number'>ID</td>
            <td id='name'>User name</td>
            <td id='title'>Post title</td>
            <td id='views'>Views</td>
            <td id='likes'>Likes</td>
            <td id='date'>Created at</td>
        </tr>
      );
   }
}
class Row extends React.Component {
   render() {
      return (
        <tr>
            <td>{this.props.number}</td>
            <td>{this.props.name}</td>
            <td>{this.props.title}</td>
            <td>{this.props.views}</td>
            <td>{this.props.likes}</td>
            <td>{this.props.date}</td>
        </tr>
      );
   }
}

export default Adpst;