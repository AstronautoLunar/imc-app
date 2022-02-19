import { Text } from 'react-native';

import { TitleProps } from '../../types';

import styles from './styles';

const Title = ({ children }: TitleProps) => {
    return (
        <Text style={styles.title}>
            { children }
        </Text>
    )
}

export default Title;