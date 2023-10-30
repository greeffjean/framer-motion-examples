import { motion } from "framer-motion";
import styles from "./Button.module.css";

const GroovyButton = () => {

    return <motion.button
        className={styles.button}
        whileHover={{
            scale: [1, 0.99, 1, 0.99, 1],
            rotate: [0, 0.5, 0, 0.5, 0, 0, 1, 0, 1, 0, 2, 0, 2, 0]
        }}
        transition={{ repeat: Infinity, duration: 0.4 }}
    >
        <motion.h3>Groove with me!</motion.h3>
    </motion.button>
};

export { GroovyButton };