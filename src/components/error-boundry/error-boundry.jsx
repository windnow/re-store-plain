import ErrorIndicator from '../error-indicator'
export default class ErrorBoundry {

    state = {
        hasError: false
    };

    render() {
        if(this.state.hasError){
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}