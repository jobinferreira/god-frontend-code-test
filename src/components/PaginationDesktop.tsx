import { IconButton } from "vcc-ui";
import styles from '../../public/css/components/ButtonsPages.module.css'

interface ButtonPagesProps {
  onClickLeft: () => void;
  onClickRight: () => void;
}

export default function ButtonsPages({onClickLeft, onClickRight} : ButtonPagesProps) {
  return (
    <div className={styles.btnWrapper}>
      <IconButton variant="outline" onClick={onClickLeft} aria-label="esquerda" iconName="navigation-chevronback" />
      <IconButton variant="outline" onClick={onClickRight} aria-label="direita" iconName="navigation-chevronforward" />
    </div>
  )
}
