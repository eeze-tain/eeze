import {ReactNode} from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProp {
    children? : ReactNode,
}
const AnimatedSection = ({children}: AnimatedSectionProp) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;