import React, { useDebugValue, useEffect, useState } from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react';
import { IconContext } from "react-icons";
import { FcShipped, FcAssistant,FcDocument, FcPackage } from "react-icons/fc";

export const ShiftStats = () => {

return(
    <Statistic.Group inverted size='large' className='verticalAlign'>
        <Statistic >
            <Statistic.Label className='marginBottom' >Orders to ship</Statistic.Label>
            
            <Statistic.Value text className='verticalAlign'>
            <IconContext.Provider value={{style:{width:'40px', height:'40px'}}}>
                <FcShipped/>
            </IconContext.Provider>
                1200
           
            
               
            </Statistic.Value>
            
        </Statistic>

        <Statistic>
            <Statistic.Label className='marginBottom'>Orders picked</Statistic.Label>
            <Statistic.Value text className='verticalAlign'>
            <IconContext.Provider value={{style:{width:'40px', height:'40px'}}}>
                <FcPackage/>
            </IconContext.Provider>               
                1
            </Statistic.Value>
            
        </Statistic>

        <Statistic>
        <Statistic.Label className='marginBottom'>Open POs</Statistic.Label>
        <Statistic.Value text className='verticalAlign'>
            <IconContext.Provider value={{style:{width:'40px', height:'40px'}}}>
                <FcDocument/>
            </IconContext.Provider>               
                25
            </Statistic.Value>
            
        </Statistic>

        <Statistic>
            <Statistic.Label className='marginBottom'>Active Pickers</Statistic.Label>
            <Statistic.Value text className='verticalAlign'>
            <IconContext.Provider value={{style:{width:'40px', height:'40px'}}}>
                <FcAssistant/>
            </IconContext.Provider>               
                12
            </Statistic.Value>
            
        </Statistic>
  </Statistic.Group>
    )
}

export default ShiftStats;