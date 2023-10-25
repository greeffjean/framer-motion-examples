import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./TextArea.module.css";
import { input, colorOutput, scaleOutput, opacityOutput } from "./constants";

const TextArea = () => {
    const x = useMotionValue(0);
    const backgroundColor = useTransform(x, input, colorOutput) as any;
    const width = useTransform(x, input, [0, 100, 525, 530]) as any;
    const scale = useTransform(x, input, scaleOutput) as any;
    const opacity = useTransform(x, input, opacityOutput) as any;

    const handleLenChange = (l: number) => x.set(l);

    return <div className={styles.textAreaWrapper}>
        <motion.textarea
            className={styles.textArea}
            onChange={(e) => handleLenChange(e.target.value.length)} maxLength={50}  >
        </motion.textarea>
        <motion.p style={{ scale, opacity }}>You have reached the allowed character limit!</motion.p>
        <motion.div
            style={{ width, backgroundColor }}
            className={styles.lenBar}></motion.div>
    </div>


};

export { TextArea };