import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
// CSS
import './Table.css';

export default props => {
    return (
        <React.Fragment>
            <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
            >
                {props.title}
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {props.headers.map((header, index) => (
                            <TableCell key={index}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, id) => (
                        <TableRow key={id}>
                            {row.map((cell, index) => (
                                <TableCell key={index}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
};
