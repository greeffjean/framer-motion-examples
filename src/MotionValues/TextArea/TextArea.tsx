import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./TextArea.module.css";
import { input, colorOutput, scaleOutput, opacityOutput } from "./constants";

const TextAreaSpring = () => {
    const x = useSpring(0);
    const backgroundColor = useTransform(x, input, colorOutput);
    const outlineColor = useTransform(x, input, colorOutput);
    const width = useTransform(x, input, [0, 100, 525, 530]);
    const scale = useTransform(x, input, scaleOutput);
    const opacity = useTransform(x, input, opacityOutput);

    const handleLenChange = (l: number) => x.set(l);

    return <div className={styles.textAreaWrapper}>
        <motion.textarea
            style={{ outlineColor }}
            className={styles.textArea}
            onChange={(e) => handleLenChange(e.target.value.length)} maxLength={50}  >
        </motion.textarea>
        <motion.p style={{ scale, opacity }}>You have reached the allowed character limit!</motion.p>
        <motion.div
            style={{ width, backgroundColor }}
            className={styles.lenBar}></motion.div>
    </div>
};

const TextAreaStandard = () => {
    const x = useMotionValue(0);
    const backgroundColor = useTransform(x, input, colorOutput);
    const outlineColor = useTransform(x, input, colorOutput);
    const width = useTransform(x, input, [0, 100, 525, 530]);
    const scale = useTransform(x, input, scaleOutput);
    const opacity = useTransform(x, input, opacityOutput);

   
    const handleLenChange = (l: number) => x.set(l);

    return <div className={styles.textAreaWrapper}>
        <motion.textarea
            style={{ outlineColor }}
            className={styles.textArea}
            onChange={(e) => handleLenChange(e.target.value.length)} maxLength={50}  >
        </motion.textarea>
        <motion.p style={{ scale, opacity }}>You have reached the allowed character limit!</motion.p>
        <motion.div
            style={{ width, backgroundColor }}
            className={styles.lenBar}></motion.div>
    </div>
};

export { TextAreaSpring, TextAreaStandard };