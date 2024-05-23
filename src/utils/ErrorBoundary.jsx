import React, { Component } from 'react';
import withNavigation from './WithNavigation';

class ErrorBoundary extends Component {
    handleNavigation = () => {
        // Navigate to the desired route
        this.props.navigate('/target-route');
    };

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary: ", error, errorInfo);
        // location.assign('/error');
    }

    render() {
        if (this.state.hasError) {
            // Return null to avoid rendering the error UI
            // return location.assign('/error');
        }
        return this.props.children;
    }
}

export default withNavigation(ErrorBoundary);
