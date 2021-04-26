import React, { useDebugValue, useEffect, useState } from 'react';
import { Statistic } from 'semantic-ui-react';

export const ShiftStats = () => {

return(
        <Statistic.Group horizontal inverted>
            <Statistic>
                <Statistic.Value>0</Statistic.Value>
                    <Statistic.Label>Orders</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>0</Statistic.Value>
                    <Statistic.Label>Cases to pick</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>1</Statistic.Value>
                    <Statistic.Label>Staff member online</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    )
}

export default ShiftStats;