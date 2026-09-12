import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Виникла помилка.</h1>
          <p>{this.state.error.toString()}</p>
          <p>Спробуйте оновити сторінку або зверніться до служби підтримки.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
