import { View, Modal, Text } from "react-native";

import { AlertErrorProps } from "../../types";
import styles from "./styles";

const AlertError = ({ children }: AlertErrorProps) => {
  return (
    <Modal>
      <View style={styles.container}>
        <Text>
          { children }
        </Text>
      </View>
    </Modal>
  )
}

export default AlertError;