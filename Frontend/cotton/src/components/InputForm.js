import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Typography } from '@material-ui/core';
import { useStylesContent } from '../styles/styles';

function InputForm({ onSubmit }) {
    const classes = useStylesContent();
    const [url, setUrl] = useState('');
    const [explanation, setExplanation] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulating a loading delay of 20 seconds
        await new Promise((resolve) => setTimeout(resolve, 20000));

        // Simulating a response with test recommendations
        const recommendations = 'Sample test recommendations';
        setResponse(recommendations);

        setLoading(false);
        onSubmit(url, explanation);
    };

    return (
        <div className={classes.inputsContainer}>
            {response && <Typography variant="body1" className={classes.responseText}>{response}</Typography>}
            <form onSubmit={handleSubmit} className={classes.content}>
                <TextField
                    label="GitHub Repository URL"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <TextField
                    label="Explanation"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                    style={{ position: 'relative' }}
                >
                    {isLoading && (
                        <CircularProgress
                            size={24}
                            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                    )}
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default InputForm;
