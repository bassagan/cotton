import React from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import InputForm from './components/InputForm';

// Main component
function App() {
    const handleFormSubmit = (url, explanation) => {
        // Call backend API with the provided URL and explanation
        // You can make an HTTP request here using libraries like Axios or Fetch
        console.log('URL:', url);
        console.log('Explanation:', explanation);
    };

    return (
        <div>
            <Header user="John Doe" />
            <Container maxWidth="sm">
                <InputForm onSubmit={handleFormSubmit} />
            </Container>
        </div>
    );
}

export default App;
