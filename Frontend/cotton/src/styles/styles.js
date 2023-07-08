import { makeStyles } from '@material-ui/core/styles';

export const useStylesHeader = makeStyles((theme) => ({
    header: {
        backgroundColor: '#FFDDC1',
        marginBottom: theme.spacing(2),
    },
    title: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 800,
        fontSize: '32px',
        flexGrow: 1,
        textAlign: 'center',
        letterSpacing: '2px',
        textTransform: 'uppercase',
    },
}));

export const useStylesContent = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: theme.spacing(2),
    },
    inputsContainer: {
        marginTop: theme.spacing(4),
    },
    responseText: {
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
}));
