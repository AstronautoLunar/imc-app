import { Text } from 'react-native';

import { TitleProps } from '../../types';
import styles from './styles';
import { useResult } from '../../contexts/result';
import { applyHiddenElement } from '../../utils';

const Title = ({ children }: TitleProps) => {
    const { hiddenTexts } = useResult();
    
    return (
        <Text style={[
            styles.title,
            {
                display: applyHiddenElement(hiddenTexts)
            }
        ]}>
            { children }
        </Text>
    )
}

export default Title;