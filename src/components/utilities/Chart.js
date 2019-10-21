import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';
import Typography from '@material-ui/core/Typography';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData('00:00', 0.00434),
    createData('03:00', 0.00394),
    createData('06:00', 0.00164),
    createData('09:00', 0.00094),
    createData('12:00', 0.00043),
    createData('15:00', 0.00014),
    createData('18:00', 0.00634),
    createData('21:00', 0.00834),
    createData('24:00', undefined)
];

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
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 24,
                        left: 24
                    }}
                >
                    <XAxis dataKey="time">
                        <Label
                            position="bottom"
                            style={{ textAnchor: 'middle' }}
                        >
                            {props.x}
                        </Label>
                    </XAxis>
                    <YAxis>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle' }}
                        >
                            {props.y}
                        </Label>
                    </YAxis>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="green"
                        dot={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
};
