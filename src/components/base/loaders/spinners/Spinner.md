Any additional props are passed to the HTML element.

```
<Spinner className="some-class" />
```

```
class Sample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 500);
  }

  render() {
    return (
      <Button handleOnClick={this.onClick}>
        { this.state.loading ? <Spinner size={24} /> : 'Click to load' }
      </Button>
    );
  }
}

<Sample />
```
