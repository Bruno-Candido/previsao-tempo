import { Button as ButtonNativeBase, IButtonProps, Text} from 'native-base'

interface Props extends IButtonProps {
    title:string
}

export function Button({title, ...rest}:Props){
    return(
        <ButtonNativeBase
            w={70}
            h={16}
            rounded='full'
            bg='primary.600'
            _pressed={{bg:'primary.700'}}
            {...rest}
        >
            <Text
                fontFamily='heading'
                color='white'
            >
                {title}
            </Text>
        </ButtonNativeBase>
    )
}