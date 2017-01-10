export default class ViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.viewType = 'ReactComponent';
  }

  render() {
    return (
      <div
        title={this.props.title}
        className={`overthrow ${this.props.cls}`}
        ref={(div) => { this.domNode = div; }}>
      {this.props.children}
    </div>);
  }

  onShow() {// eslint-disable-line
  }

  init() {// eslint-disable-line

  }

  placeAt(domNode) {
    ReactDOM.render(this.render(), domNode);
  }

  refreshRequiredFor(options) {// eslint-disable-line
  }

  getTag() {// eslint-disable-line
  }

  getContext() {
    return {
      id: this.id,
    };
  }

  show(options, transitionOptions) {
    if (this.onShow(this) === false) {
      return;
    }

    if (this.refreshRequiredFor(options)) {
      this.refreshRequired = true;
    }

    this.options = options || this.options || {};

    const tag = this.getTag();
    const data = this.getContext();

    const newOptions = Object.assign(transitionOptions || {}, {
      tag,
      data,
    });
    ReUI.show(this.domNode, newOptions);
  }
}
