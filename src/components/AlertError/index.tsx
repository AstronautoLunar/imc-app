import { 
  View, 
  Modal, 
  Text
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { 
  AlertErrorProps, 
  OptionsButtontypes 
} from "../../types";

import styles from "./styles";
import colors from "../../styles/colors";
import Button from "../Button";

const optionsButtonDefault: OptionsButtontypes = {
  color: colors.extra.info,
  text: "Okay",
  press: () => {}
}

const AlertError = ({ 
  children, 
  optionsButton,
  visible
}: AlertErrorProps) => {
  const applyPropPress = optionsButton?.press || optionsButtonDefault.press;
  const applyPropText = optionsButton?.text || optionsButtonDefault.text;
  const applyPropColor = optionsButton?.color || optionsButtonDefault.color;

  return (
    <Modal 
      transparent={true} 
      animationType="fade"
      visible={visible}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.areaText}>
            <MaterialIcons
              name="dangerous"
              size={48}
              color={colors.extra.danger}
            />
            <Text style={styles.text}>
              { children }
            </Text>
          </View>
          <Button 
            press={applyPropPress}
            text={applyPropText}
            styleView={{
              backgroundColor: applyPropColor,

            }}
            type="primary"
          />

        </View>
      </View>
    </Modal>
  )
}

export default AlertError;