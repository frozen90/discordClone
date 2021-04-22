import React from 'react';
import { motion } from 'framer-motion';


const Loader = () => {

    return(

            <motion.div 
            className="loader" 
            initial={{ x: -20, y: 0 }}
            animate={{ x: 20, y: 30 ,transition:{x:{duration: 0.5, yoyo: Infinity, ease: 'easeOut'}, y:{duration: 0.25, yoyo: Infinity, ease: 'easeOut'}}}}
             >

            </motion.div>
    )
}

export default Loader;