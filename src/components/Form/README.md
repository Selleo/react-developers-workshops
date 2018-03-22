# Example form

## Event handlers

  handleChange = event =>
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        [event.target.name]: event.target.value,
      },
    });

  handleSubmit = event => {
    event.preventDefault();
    console.log('this.state.post', this.state.post);
  };

## Template

  <form onSubmit={this.handleSubmit}>
    <Input
      type="text"
      name="title"
      value={this.state.post.title}
      onChange={this.handleChange}
    />
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
